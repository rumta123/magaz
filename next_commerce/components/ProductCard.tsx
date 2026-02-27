"use client";
import React from "react";
import Link from "next/link";
import { useCartStore } from "../lib/cartStore";
import { useFavoritesStore } from "../lib/favoritesStore";

function getPrices(product: any) {
  const original = Number(product?.price ?? product?.price_with_tax ?? 0) || 0;
  const discounted =
    Number(
      product?.discontPrice ??
        product?.discountPrice ??
        product?.discount_price ??
        product?.price_with_tax ??
        product?.price ??
        0,
    ) || 0;
  const hasDiscount = original > 0 && discounted > 0 && discounted < original;
  const finalPrice = hasDiscount ? discounted : original;
  const discountPercent = hasDiscount
    ? Math.round(((original - discounted) / original) * 100)
    : 0;
  return { original, finalPrice, hasDiscount, discountPercent };
}

function buildProductPath(product: any): string {
  const id = Number(product?.id);
  const rawSlug = String(product?.slug || "").trim().toLowerCase();
  const normalizedSlug = rawSlug
    .replace(/[^a-z0-9-\s]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  if (Number.isFinite(id) && id > 0 && normalizedSlug) {
    return `/products/${normalizedSlug}-${id}`;
  }
  if (Number.isFinite(id) && id > 0) {
    return `/products/${id}`;
  }
  return `/products/${product?.slug || ""}`;
}

export default function ProductCard({ product }: { product: any }) {
  const add = useCartStore((s) => s.add);
  const toggleFavorite = useFavoritesStore((s) => s.toggle);
  const isFavorite = useFavoritesStore((s) => s.isFavorite(product?.id));
  const { original, finalPrice, hasDiscount, discountPercent } = getPrices(product);
  const base = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3333";
  const imgPath = product.image
    ? product.image.startsWith("products/")
      ? product.image
      : `products/${product.image}`
    : null;
  const imgUrl = imgPath
    ? `${base}/uploads/${imgPath}`
    : product.thumbnail
      ? `${base}/uploads/${product.thumbnail}`
      : "/placeholder.png";

  return (
    <article className="glass-card group relative overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:border-coral/60">
      <button
        type="button"
        aria-label={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
        className={`absolute right-5 top-5 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border text-lg transition ${
          isFavorite
            ? "border-coral/70 bg-coral/20 text-coral"
            : "border-white/20 bg-black/30 text-white/80 hover:border-coral/60 hover:text-coral"
        }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(product);
        }}
      >
        {isFavorite ? "\u2665" : "\u2661"}
      </button>

      <Link href={buildProductPath(product)} className="relative block">
        {hasDiscount && (
          <span className="absolute left-2 top-2 z-10 rounded-lg bg-coral px-2 py-1 text-xs font-bold text-white">
            -{discountPercent}%
          </span>
        )}
        <img
          src={imgUrl}
          alt={product.title || product.name}
          className="h-44 w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="mt-3 space-y-3">
        <h3 className="truncate text-base font-semibold text-white">
          {product.title || product.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-xs text-slate-400 line-through">₽{original.toFixed(2)}</span>
            )}
            <span className="text-lg font-bold text-mint">₽{finalPrice.toFixed(2)}</span>
          </div>
          <button className="btn-primary" onClick={() => add(product)}>
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}
