"use client";
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }: { items: any[] }) {
  if (!items.length) {
    return (
      <div className="glass-card p-8 text-center text-slate-300">
        Товары для этой категории не найдены.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
