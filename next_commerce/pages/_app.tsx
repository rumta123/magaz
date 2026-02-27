"use client";
import type { AppProps } from "next/app";
import "../styles/global.css";
import CartDrawer from "../components/CartDrawer";
import Layout from "../components/Layout";

import { useEffect } from "react";
import { useAuthStore } from "../lib/authStore";
import { useCartStore } from "../lib/cartStore";
import { useFavoritesStore } from "../lib/favoritesStore";

function CartBootstrap() {
  const init = useCartStore((s) => s.init);
  const initFavorites = useFavoritesStore((s) => s.init);
  const syncWithServer = useCartStore((s) => s.syncWithServer);
  const backgroundSync = useCartStore((s) => s.backgroundSync);
  const items = useCartStore((s) => s.items);

  const user = useAuthStore((s) => s.user);
  const token = useAuthStore((s) => s.token);
  const initAuth = useAuthStore((s) => s.init);

  useEffect(() => {
    void initAuth();
  }, [initAuth]);

  // 1) load local cart once
  useEffect(() => {
    init();
  }, [init]);

  // 1.1) load local favorites once
  useEffect(() => {
    initFavorites();
  }, [initFavorites]);

  // 2) when user logs in/out: sync
  useEffect(() => {
    if (user) syncWithServer(user, token ?? null);
  }, [user, token, syncWithServer]);

  // 3) whenever items change: debounce sync (only if user exists)
  useEffect(() => {
    if (user) backgroundSync(user, token ?? null);
  }, [items, user, token, backgroundSync]);

  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartBootstrap />
      <Layout>
        <Component {...pageProps} />
        <CartDrawer />
      </Layout>
    </>
  );
}
