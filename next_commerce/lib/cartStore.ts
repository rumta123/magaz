"use client";

import { create } from "zustand";

const LOCAL_KEY = "next_commerce_cart_v1";
const CART_API = "/api/cart";

export type CartItem = any;

type CartState = {
  items: CartItem[];
  open: boolean;
  isInitialized: boolean;
  init: () => void;
  syncWithServer: (user: any, token: string | null) => Promise<void>;
  backgroundSync: (user: any, token: string | null) => void;
  add: (item: any) => void;
  increase: (id: any) => void;
  decrease: (id: any) => void;
  remove: (index: number) => void;
  clear: () => void;
  toggleOpen: () => void;
};

let saveTimer: any = null;
let lastSyncedHash = "";
let skipSync = false;

function getAuthHeaders(token: string | null): HeadersInit {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (token) (headers as any).Authorization = `Bearer ${token}`;
  return headers;
}

function persistLocalCart(items: any[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("Failed to persist cart to localStorage", e);
  }
}

function transformBackendCart(backendItems: any[]): any[] {
  return backendItems.map((item: any) => {
    const productData = item.product || {};
    return {
      id: item.productId || productData.id,
      cartItemId: item.id,
      quantity: item.quantity || 1,
      ...productData,
    };
  });
}

function getUserId(user: any): number | null {
  const raw = user?.id ?? user?.userId ?? null;
  const id = Number(raw);
  return Number.isFinite(id) && id > 0 ? id : null;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  open: false,
  isInitialized: false,

  init: () => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          set({ items: parsed });
        }
      }
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
    } finally {
      set({ isInitialized: true });
    }
  },

  syncWithServer: async (user, token) => {
    if (!user) return;
    const userId = getUserId(user);
    if (!userId) return;

    const items = get().items;
    const headers = getAuthHeaders(token);

    try {
      if (items.length > 0) {
        const payload = {
          userId,
          items: items.map((item: any) => ({
            userId,
            productId: Number(item.id),
            quantity: Number(item.quantity) || 1,
          })),
        };

        const syncRes = await fetch(`${CART_API}/sync`, {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
          credentials: "include",
        });

        if (!syncRes.ok) {
          const errText = await syncRes.text();
          console.error("Sync failed:", syncRes.status, errText);
        }
      }

      const res = await fetch(`${CART_API}/user/${userId}`, {
        headers,
        credentials: "include",
      });

      if (!res.ok) {
        console.warn("Server cart fetch failed");
        return;
      }

      const data = await res.json();
      const backendItems = Array.isArray(data)
        ? data
        : Array.isArray(data?.items)
          ? data.items
          : [];

      const transformed = transformBackendCart(backendItems);

      skipSync = true;
      set({ items: transformed });
      persistLocalCart(transformed);

      lastSyncedHash = JSON.stringify(
        transformed.map((i: any) => `${i.id}:${i.quantity}`),
      );

      setTimeout(() => {
        skipSync = false;
      }, 500);
    } catch (e) {
      console.error("Cart sync error", e);
    }
  },

  backgroundSync: (user, token) => {
    if (!user) return;
    const userId = getUserId(user);
    if (!userId) return;
    if (skipSync) return;
    if (!get().isInitialized) return;

    const items = get().items;
    const currentHash = JSON.stringify(items.map((i: any) => `${i.id}:${i.quantity}`));
    if (currentHash === lastSyncedHash) return;

    if (saveTimer) clearTimeout(saveTimer);

    saveTimer = setTimeout(async () => {
      try {
        await fetch(`${CART_API}/sync`, {
          method: "POST",
          headers: getAuthHeaders(token),
          body: JSON.stringify({
            userId,
            items: items.map((item: any) => ({
              userId,
              productId: Number(item.id),
              quantity: Number(item.quantity) || 1,
            })),
          }),
          credentials: "include",
        });

        lastSyncedHash = currentHash;
      } catch (e) {
        console.error("Background sync failed", e);
      }
    }, 1000);
  },

  add: (item) =>
    set((prev) => {
      const idx = prev.items.findIndex((p: any) => String(p.id) === String(item.id));
      const max = item?.stock ? Number(item.stock) : Infinity;

      if (idx >= 0) {
        const copy = [...prev.items];
        const current = (copy[idx].quantity || 1) + 1;
        copy[idx] = { ...copy[idx], quantity: current > max ? max : current };
        persistLocalCart(copy);
        return { items: copy };
      }

      const next = [...prev.items, { ...item, quantity: Math.min(1, max) }];
      persistLocalCart(next);
      return { items: next };
    }),

  increase: (id) =>
    set((prev) => {
      const next = prev.items.map((p: any) => {
        if (String(p.id) !== String(id)) return p;
        const max = p?.stock ? Number(p.stock) : Infinity;
        const qty = (p.quantity || 1) + 1;
        return { ...p, quantity: qty > max ? max : qty };
      });
      persistLocalCart(next);
      return { items: next };
    }),

  decrease: (id) =>
    set((prev) => {
      const next = prev.items.reduce((acc: any[], p: any) => {
        if (String(p.id) === String(id)) {
          const qty = (p.quantity || 1) - 1;
          if (qty > 0) acc.push({ ...p, quantity: qty });
        } else {
          acc.push(p);
        }
        return acc;
      }, []);
      persistLocalCart(next);
      return { items: next };
    }),

  remove: (index) =>
    set((s) => {
      const next = s.items.filter((_, i) => i !== index);
      persistLocalCart(next);
      return { items: next };
    }),

  clear: () => {
    set({ items: [] });
    lastSyncedHash = "";
    if (typeof window !== "undefined") {
      localStorage.removeItem(LOCAL_KEY);
    }
  },

  toggleOpen: () => set((s) => ({ open: !s.open })),
}));
