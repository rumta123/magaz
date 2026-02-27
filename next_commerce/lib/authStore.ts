"use client";

import { create } from "zustand";

type User = { id?: number; name?: string; email?: string } | null;

type LoginCredentials = { email: string; password: string };

type AuthState = {
  user: User;
  token: string | null;
  loading: boolean;
  isInitialized: boolean;
  fetchProfile: () => Promise<User>;
  login: (credentials: LoginCredentials) => Promise<any>;
  logout: () => Promise<void>;
  init: () => Promise<void>;
};

function extractUser(data: any): User {
  const raw = !data ? null : data.user || data.data?.user || data;
  if (!raw) return null;

  const id = raw.id ?? raw.userId;
  if (raw.email || raw.name || id) {
    return {
      ...raw,
      id,
    };
  }
  return null;
}

function extractToken(data: any): string | null {
  if (!data) return null;
  return data.accessToken || data.token || data.access_token || null;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: null,
  loading: false,
  isInitialized: false,

  fetchProfile: async () => {
    try {
      set({ loading: true });
      const res = await fetch("/api/auth/profile", { credentials: "same-origin" });
      const data = await res.json();
      if (!res.ok) {
        set({ user: null });
        return null;
      }
      const user = extractUser(data);
      set({ user });
      return user;
    } catch {
      set({ user: null });
      return null;
    } finally {
      set({ loading: false });
    }
  },

  login: async (credentials) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "same-origin",
    });
    const data = await res.json();
    if (!res.ok) throw data;

    const token = extractToken(data);
    if (token) set({ token });

    let profile = await get().fetchProfile();
    if (!profile) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      profile = await get().fetchProfile();
    }

    return data;
  },

  logout: async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "same-origin",
    }).catch(() => {});
    set({ user: null, token: null });
  },

  init: async () => {
    if (get().isInitialized) return;
    await get().fetchProfile();
    set({ isInitialized: true });
  },
}));
