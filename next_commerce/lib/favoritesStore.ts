"use client";

import { create } from "zustand";

const LOCAL_KEY = "next_commerce_favorites_v1";

type FavoritesState = {
  items: any[];
  isInitialized: boolean;
  init: () => void;
  isFavorite: (id: any) => boolean;
  toggle: (product: any) => void;
  remove: (id: any) => void;
  clear: () => void;
};

function persistLocalFavorites(items: any[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("Failed to persist favorites to localStorage", e);
  }
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  items: [],
  isInitialized: false,

  init: () => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (!raw) {
        set({ isInitialized: true });
        return;
      }
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        set({ items: parsed, isInitialized: true });
      } else {
        set({ isInitialized: true });
      }
    } catch (e) {
      console.error("Failed to parse favorites from localStorage", e);
      set({ isInitialized: true });
    }
  },

  isFavorite: (id: any) => {
    return get().items.some((p: any) => String(p.id) === String(id));
  },

  toggle: (product: any) =>
    set((prev) => {
      const exists = prev.items.some((p: any) => String(p.id) === String(product?.id));
      const next = exists
        ? prev.items.filter((p: any) => String(p.id) !== String(product?.id))
        : [...prev.items, product];
      persistLocalFavorites(next);
      return { items: next };
    }),

  remove: (id: any) =>
    set((prev) => {
      const next = prev.items.filter((p: any) => String(p.id) !== String(id));
      persistLocalFavorites(next);
      return { items: next };
    }),

  clear: () => {
    set({ items: [] });
    if (typeof window !== "undefined") {
      localStorage.removeItem(LOCAL_KEY);
    }
  },
}));

