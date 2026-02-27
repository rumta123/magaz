"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuthStore } from "../lib/authStore";
import { useCartStore } from "../lib/cartStore";

type PurchasedProduct = {
  productId: number | null;
  productName: string;
  quantity: number;
  lastOrderAt: string | null;
};

function toNumber(value: any): number | null {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function getOrderItems(order: any): any[] {
  if (Array.isArray(order?.orderItems)) return order.orderItems;
  if (Array.isArray(order?.order_items)) return order.order_items;
  if (Array.isArray(order?.items)) return order.items;
  return [];
}

function getProductName(item: any): string {
  const name =
    item?.productName ??
    item?.product_name ??
    item?.name ??
    item?.title ??
    item?.product?.title ??
    item?.product?.name;
  const normalized = String(name || "").trim();
  return normalized || "Товар";
}

function getProductId(item: any): number | null {
  return (
    toNumber(item?.productId) ??
    toNumber(item?.product_id) ??
    toNumber(item?.product?.id)
  );
}

function getQuantity(item: any): number {
  return toNumber(item?.quantity ?? item?.qty ?? item?.count) ?? 0;
}

function buildProductPath(productName: string, productId: number | null): string {
  if (!productId) return "#";
  const normalizedSlug = String(productName || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-\s]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return normalizedSlug ? `/products/${normalizedSlug}-${productId}` : `/products/${productId}`;
}

export default function Header() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const toggleOpen = useCartStore((s) => s.toggleOpen);
  const items = useCartStore((s) => s.items);
  const totalCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const [orders, setOrders] = useState<any[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [ordersError, setOrdersError] = useState<string | null>(null);
  const [purchasedOpen, setPurchasedOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const querySearch = typeof router.query.q === "string" ? router.query.q : "";
  const queryCategory = typeof router.query.category === "string" ? router.query.category : "";

  useEffect(() => {
    setSearchText(querySearch);
  }, [querySearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText === querySearch) return;

      const nextQuery: Record<string, string> = {};
      if (queryCategory) nextQuery.category = queryCategory;
      if (searchText.trim()) nextQuery.q = searchText.trim();

      void router.push(
        { pathname: "/", query: nextQuery },
        undefined,
        { shallow: router.pathname === "/" },
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText, querySearch, queryCategory, router]);

  useEffect(() => {
    const userId = (user as any)?.id;
    if (!userId) {
      setOrders([]);
      setPurchasedOpen(false);
      setOrdersError(null);
      return;
    }

    let cancelled = false;
    setOrdersLoading(true);
    setOrdersError(null);

    fetch(`/api/orders/user/${userId}`, { credentials: "same-origin" })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error?.message || data?.error || data?.message || "Не удалось загрузить заказы");
        }
        if (!cancelled) {
          setOrders(Array.isArray(data) ? data : []);
        }
      })
      .catch((err: any) => {
        if (!cancelled) {
          setOrders([]);
          setOrdersError(err?.message || "Не удалось загрузить заказы");
        }
      })
      .finally(() => {
        if (!cancelled) setOrdersLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  const purchasedProducts = useMemo<PurchasedProduct[]>(() => {
    const map = new Map<string, PurchasedProduct>();

    for (const order of orders) {
      const createdAt = order?.createdAt ? String(order.createdAt) : order?.created_at ? String(order.created_at) : null;
      for (const item of getOrderItems(order)) {
        const productId = getProductId(item);
        const productName = getProductName(item);
        const quantity = getQuantity(item);
        const key = productId ? `id:${productId}` : `name:${productName.toLowerCase()}`;

        if (!map.has(key)) {
          map.set(key, {
            productId,
            productName,
            quantity,
            lastOrderAt: createdAt,
          });
          continue;
        }

        const existing = map.get(key)!;
        existing.quantity += quantity;
        if (createdAt && (!existing.lastOrderAt || new Date(createdAt) > new Date(existing.lastOrderAt))) {
          existing.lastOrderAt = createdAt;
        }
      }
    }

    return Array.from(map.values()).sort((a, b) => {
      if (!a.lastOrderAt && !b.lastOrderAt) return 0;
      if (!a.lastOrderAt) return 1;
      if (!b.lastOrderAt) return -1;
      return new Date(b.lastOrderAt).getTime() - new Date(a.lastOrderAt).getTime();
    });
  }, [orders]);

  return (
    <header className="relative z-40 mt-6 rounded-3xl border border-white/10 bg-[#0c1d2c]/80 p-4 shadow-neon backdrop-blur md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-coral to-mint text-xl font-bold text-ink">
            S
          </div>
          <div>
            <div className="text-xl font-extrabold tracking-tight text-white">Shop Nova</div>
            <div className="text-xs text-slate-300">Работает на вашем бэкенде</div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
          <div className="w-full md:w-72">
            <input
              className="field"
              placeholder="Поиск категорий или товаров..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <nav className="relative flex flex-wrap items-center gap-2">
            <Link className="btn-soft" href="/">
              Главная
            </Link>
            {user ? (
              <>
                <button className="btn-soft gap-2" type="button" onClick={() => setPurchasedOpen((v) => !v)}>
                  Покупки
                  <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-white/20 px-1.5 text-xs font-bold text-white">
                    {purchasedProducts.length}
                  </span>
                </button>
                <span className="rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200">
                  Привет, {user.name || user.email}
                </span>
                <button className="btn-soft" onClick={logout}>
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link className="btn-soft" href="/auth/login">
                  Войти
                </Link>
                <Link className="btn-soft" href="/auth/register">
                  Регистрация
                </Link>
              </>
            )}
            <button className="btn-primary gap-2" onClick={toggleOpen}>
              Корзина
              <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-white/20 px-1.5 text-xs font-bold text-white">
                {totalCount}
              </span>
            </button>

            {user && purchasedOpen && (
              <div className="absolute right-0 top-12 z-30 w-[320px] rounded-2xl border border-white/10 bg-[#0b1c2c] p-3 shadow-neon">
                <div className="mb-2 text-sm font-semibold text-white">Купленные товары</div>

                {ordersLoading && <div className="text-sm text-slate-300">Загрузка...</div>}
                {ordersError && <div className="text-sm text-red-300">{ordersError}</div>}
                {!ordersLoading && !ordersError && purchasedProducts.length === 0 && (
                  <div className="text-sm text-slate-300">Покупок пока нет.</div>
                )}

                {!ordersLoading && !ordersError && purchasedProducts.length > 0 && (
                  <div className="max-h-72 space-y-2 overflow-auto pr-1">
                    {purchasedProducts.map((item) => (
                      <div key={`${item.productId ?? item.productName}`} className="rounded-xl border border-white/10 bg-white/5 p-2">
                        {item.productId ? (
                          <Link
                            href={buildProductPath(item.productName, item.productId)}
                            className="line-clamp-1 text-sm font-medium text-white hover:text-mint"
                            onClick={() => setPurchasedOpen(false)}
                          >
                            {item.productName}
                          </Link>
                        ) : (
                          <div className="line-clamp-1 text-sm font-medium text-white">{item.productName}</div>
                        )}
                        <div className="mt-1 text-xs text-slate-300">Куплено: {item.quantity}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}


