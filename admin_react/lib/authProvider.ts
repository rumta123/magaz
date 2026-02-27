"use client";

import type { AuthProvider } from "react-admin";
import { authStore } from "./authStore";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3333";
const ALLOWED_ROLES = new Set(["admin", "manager"]);

type LoginResponse = {
  access_token: string;
};

type ProfileResponse = {
  userId: number;
  email: string;
  name?: string;
  roles?: string[];
};

const parseJwt = (token: string): Partial<ProfileResponse> | null => {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;
    const decoded = JSON.parse(atob(payload));
    return {
      userId: decoded.sub,
      email: decoded.email,
      roles: decoded.roles,
    };
  } catch {
    return null;
  }
};

const fetchProfile = async (token: string): Promise<ProfileResponse | null> => {
  try {
    const response = await fetch(`${API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as ProfileResponse;
  } catch {
    return null;
  }
};

const hasAdminAccess = (roles?: string[]): boolean => {
  if (!roles || roles.length === 0) return false;
  return roles.some((role) => ALLOWED_ROLES.has(role.toLowerCase()));
};

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Неверный email или пароль");
    }

    const data = (await response.json()) as LoginResponse;
    const profile = await fetchProfile(data.access_token);
    const fallback = parseJwt(data.access_token);
    const roles = profile?.roles ?? fallback?.roles ?? [];

    if (!hasAdminAccess(roles)) {
      authStore.clearAuth();
      throw new Error("Доступ запрещен: нужна роль администратора или менеджера");
    }

    authStore.setAuth(data.access_token, {
      id: profile?.userId ?? fallback?.userId ?? 0,
      email: profile?.email ?? fallback?.email ?? "",
      name: profile?.name,
      roles,
    });
  },

  logout: async () => {
    authStore.clearAuth();
  },

  checkAuth: async () => {
    const token = authStore.getToken();
    if (!token) {
      throw new Error("Необходима авторизация");
    }

    const profile = await fetchProfile(token);
    if (!profile) {
      authStore.clearAuth();
      throw new Error("Сессия истекла");
    }

    const roles = profile.roles ?? authStore.getUser()?.roles ?? [];
    if (!hasAdminAccess(roles)) {
      authStore.clearAuth();
      throw new Error("Доступ запрещен");
    }

    const currentUser = authStore.getUser();
    if (!currentUser || currentUser.id !== profile.userId) {
      authStore.setAuth(token, {
        id: profile.userId,
        email: profile.email,
        name: profile.name,
        roles,
      });
    }
  },

  checkError: async (error) => {
    const status = error?.status ?? error?.response?.status;
    if (status === 401 || status === 403) {
      authStore.clearAuth();
      throw new Error("Сессия истекла");
    }
  },

  getIdentity: async () => {
    const user = authStore.getUser();
    if (!user) {
      throw new Error("Пользователь не найден");
    }

    return {
      id: user.id,
      fullName: user.name ?? user.email,
      avatar: undefined,
    };
  },

  getPermissions: async () => {
    return authStore.getUser()?.roles ?? [];
  },
};
