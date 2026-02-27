"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthUser = {
  id: number;
  email: string;
  name?: string;
  roles?: string[];
};

type AuthState = {
  token: string | null;
  user: AuthUser | null;
  setAuth: (token: string, user: AuthUser | null) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      clearAuth: () => set({ token: null, user: null }),
    }),
    {
      name: "admin-auth",
    },
  ),
);

export const authStore = {
  getToken: () => useAuthStore.getState().token,
  getUser: () => useAuthStore.getState().user,
  setAuth: (token: string, user: AuthUser | null) =>
    useAuthStore.getState().setAuth(token, user),
  clearAuth: () => useAuthStore.getState().clearAuth(),
};

