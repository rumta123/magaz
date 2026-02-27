import React, { useEffect, useMemo, useState } from "react";
import { useCartStore } from "../lib/cartStore";
import { useAuthStore } from "../lib/authStore";

type AddressForm = {
  city: string;
  street: string;
  building: string;
  apartment: string;
  postalCode: string;
  phone: string;
};

function getPrices(item: any) {
  const original = Number(item?.price ?? item?.price_with_tax ?? 0) || 0;
  const discounted =
    Number(
      item?.discontPrice ??
        item?.discountPrice ??
        item?.discount_price ??
        item?.price_with_tax ??
        item?.price ??
        0,
    ) || 0;
  const hasDiscount = original > 0 && discounted > 0 && discounted < original;
  const finalPrice = hasDiscount ? discounted : original;
  const discountPerItem = hasDiscount ? original - discounted : 0;
  return { original, finalPrice, hasDiscount, discountPerItem };
}

function getUserId(user: any): number | null {
  const raw = user?.id ?? user?.userId ?? null;
  const id = Number(raw);
  return Number.isFinite(id) && id > 0 ? id : null;
}

export default function CartDrawer() {
  const items = useCartStore((s) => s.items);
  const open = useCartStore((s) => s.open);
  const toggleOpen = useCartStore((s) => s.toggleOpen);
  const remove = useCartStore((s) => s.remove);
  const increase = useCartStore((s) => s.increase);
  const decrease = useCartStore((s) => s.decrease);
  const clear = useCartStore((s) => s.clear);
  const user = useAuthStore((s) => s.user);

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
  const [useNewAddress, setUseNewAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "online">("cash");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);
  const [addressForm, setAddressForm] = useState<AddressForm>({
    city: "",
    street: "",
    building: "",
    apartment: "",
    postalCode: "",
    phone: "",
  });

  const userId = useMemo(() => getUserId(user), [user]);
  const base = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3333";
  const totalCount = items.reduce((s, i) => s + (i.quantity || 0), 0);
  const totalDiscount = items.reduce((sum, item) => {
    const { discountPerItem } = getPrices(item);
    return sum + discountPerItem * (item.quantity || 1);
  }, 0);
  const totalAmount = items.reduce((sum, item) => {
    const { finalPrice } = getPrices(item);
    return sum + finalPrice * (item.quantity || 1);
  }, 0);

  useEffect(() => {
    if (!open || !userId) return;
    fetch(`/api/addresses/user/${userId}`)
      .then((r) => r.json())
      .then((d) => {
        const list = Array.isArray(d) ? d : [];
        setAddresses(list);
        if (list.length > 0 && !selectedAddressId) {
          setSelectedAddressId(Number(list[0].id));
        }
      })
      .catch(() => setAddresses([]));
  }, [open, userId, selectedAddressId]);

  if (!open) return null;

  async function placeOrder() {
    if (!userId) {
      setOrderError("Сначала войдите в аккаунт, чтобы оформить заказ");
      return;
    }
    if (!items.length) {
      setOrderError("Корзина пуста");
      return;
    }

    const payload: any = {
      userId,
      paymentMethod,
      notes: notes.trim() || undefined,
      items: items.map((i) => ({
        productId: Number(i.id),
        quantity: Number(i.quantity) || 1,
      })),
    };

    if (useNewAddress) {
      if (!addressForm.city.trim() || !addressForm.street.trim()) {
        setOrderError("Заполните город и улицу для нового адреса");
        return;
      }
      payload.address = {
        city: addressForm.city.trim(),
        street: addressForm.street.trim(),
        building: addressForm.building.trim() || undefined,
        apartment: addressForm.apartment.trim() || undefined,
        postalCode: addressForm.postalCode.trim() || undefined,
        phone: addressForm.phone.trim() || undefined,
      };
    } else {
      if (!selectedAddressId) {
        setOrderError("Выберите адрес доставки");
        return;
      }
      payload.addressId = selectedAddressId;
    }

    try {
      setSubmitting(true);
      setOrderError(null);
      setOrderSuccess(null);

      const res = await fetch("/api/orders/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.error?.message ||
            data?.error ||
            data?.message ||
            "Не удалось оформить заказ",
        );
      }

      setOrderSuccess(`Заказ ${data?.orderNumber || `#${data?.id}`} успешно создан`);
      clear();
      setCheckoutOpen(false);
    } catch (e: any) {
      setOrderError(e?.message || "Ошибка оформления заказа");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm">
      <div className="absolute right-3 top-3 h-[calc(100%-1.5rem)] w-full max-w-md rounded-3xl border border-white/10 bg-[#0b1c2c] p-4 shadow-neon sm:right-4 sm:top-4 sm:h-[calc(100%-2rem)]">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Корзина ({totalCount})</h3>
          <div className="flex items-center gap-2">
            <button className="btn-soft" onClick={clear}>
              Очистить корзину
            </button>
            <button className="btn-soft" onClick={toggleOpen}>
              Закрыть
            </button>
          </div>
        </div>

        <div className="h-[calc(100%-4.5rem)] overflow-y-auto pr-1">
          {items.length === 0 && (
            <div className="glass-card p-4 text-sm text-slate-300">Ваша корзина пуста</div>
          )}

          {items.map((it, idx) => {
            const { original, finalPrice, hasDiscount } = getPrices(it);
            const imgPath = it.image
              ? it.image.startsWith("products/")
                ? it.image
                : `products/${it.image}`
              : null;
            const imgUrl = imgPath
              ? `${base}/uploads/${imgPath}`
              : it.thumbnail
                ? `${base}/uploads/${it.thumbnail}`
                : "/placeholder.png";

            return (
              <div
                key={it.id ?? idx}
                className="mb-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2.5"
              >
                <img
                  src={imgUrl}
                  className="h-16 w-16 rounded-xl object-cover"
                  alt={it.title || it.name || "Товар"}
                />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-white">{it.title || it.name}</div>
                  <div className="flex flex-col text-sm">
                    {hasDiscount && (
                      <span className="text-xs text-slate-400 line-through">₽{original.toFixed(2)}</span>
                    )}
                    <span className="text-mint">₽{finalPrice.toFixed(2)}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="btn-soft !px-2.5 !py-1" onClick={() => decrease(it.id)}>
                      -
                    </button>
                    <div className="w-8 text-center text-sm">{it.quantity || 1}</div>
                    <button className="btn-soft !px-2.5 !py-1" onClick={() => increase(it.id)}>
                      +
                    </button>
                  </div>
                </div>
                <button className="btn-soft !px-2.5 !py-1" onClick={() => remove(idx)}>
                  Удалить
                </button>
              </div>
            );
          })}

          {items.length > 0 && (
            <div className="mt-4 space-y-2 rounded-2xl border border-coral/35 bg-coral/10 p-3">
              <div className="flex items-center justify-between text-sm font-semibold text-white">
                <span>Товаров</span>
                <span>{totalCount}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-mint">
                <span>Скидка</span>
                <span>-₽{totalDiscount.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-white">
                <span>Итого</span>
                <span>₽{totalAmount.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full" onClick={() => setCheckoutOpen((v) => !v)}>
                {checkoutOpen ? "Скрыть" : "Оформить заказ"}
              </button>
            </div>
          )}

          {checkoutOpen && (
            <div className="mt-4 space-y-3 rounded-2xl border border-white/15 bg-white/5 p-3">
              {!userId && (
                <div className="text-sm text-red-300">
                  Для оформления заказа нужно авторизоваться.
                </div>
              )}

              {userId && (
                <>
                  <div className="flex items-center gap-2">
                    <button
                      className={`btn-soft ${!useNewAddress ? "!border-mint/70" : ""}`}
                      onClick={() => setUseNewAddress(false)}
                    >
                      Сохраненный адрес
                    </button>
                    <button
                      className={`btn-soft ${useNewAddress ? "!border-mint/70" : ""}`}
                      onClick={() => setUseNewAddress(true)}
                    >
                      Новый адрес
                    </button>
                  </div>

                  {!useNewAddress ? (
                    <select
                      className="field"
                      value={selectedAddressId ?? ""}
                      onChange={(e) => setSelectedAddressId(Number(e.target.value))}
                    >
                      <option value="">Выберите адрес</option>
                      {addresses.map((a) => (
                        <option key={a.id} value={a.id}>
                          {a.city}, {a.street}
                          {a.building ? `, ${a.building}` : ""}
                          {a.apartment ? `, ${a.apartment}` : ""}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="grid grid-cols-1 gap-2">
                      <input
                        className="field"
                        placeholder="Город*"
                        value={addressForm.city}
                        onChange={(e) => setAddressForm((s) => ({ ...s, city: e.target.value }))}
                      />
                      <input
                        className="field"
                        placeholder="Улица*"
                        value={addressForm.street}
                        onChange={(e) => setAddressForm((s) => ({ ...s, street: e.target.value }))}
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          className="field"
                          placeholder="Дом"
                          value={addressForm.building}
                          onChange={(e) =>
                            setAddressForm((s) => ({ ...s, building: e.target.value }))
                          }
                        />
                        <input
                          className="field"
                          placeholder="Квартира"
                          value={addressForm.apartment}
                          onChange={(e) =>
                            setAddressForm((s) => ({ ...s, apartment: e.target.value }))
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          className="field"
                          placeholder="Почтовый индекс"
                          value={addressForm.postalCode}
                          onChange={(e) =>
                            setAddressForm((s) => ({ ...s, postalCode: e.target.value }))
                          }
                        />
                        <input
                          className="field"
                          placeholder="Телефон"
                          value={addressForm.phone}
                          onChange={(e) =>
                            setAddressForm((s) => ({ ...s, phone: e.target.value }))
                          }
                        />
                      </div>
                    </div>
                  )}

                  <select
                    className="field"
                    value={paymentMethod}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value as "cash" | "card" | "online")
                    }
                  >
                    <option value="cash">Наличные</option>
                    <option value="card">Карта</option>
                    <option value="online">Онлайн</option>
                  </select>

                  <textarea
                    className="field min-h-[72px]"
                    placeholder="Комментарий к доставке (необязательно)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />

                  {orderError && <div className="text-sm text-red-300">{orderError}</div>}
                  {orderSuccess && <div className="text-sm text-mint">{orderSuccess}</div>}

                  <button
                    className="btn-primary w-full"
                    disabled={submitting}
                    onClick={placeOrder}
                  >
                    {submitting ? "Оформляем заказ..." : "Оформить заказ"}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
