"use client";
import React, { useMemo, useState } from "react";

type SliderImage = {
  src: string;
  alt?: string;
};

function normalizeImageUrl(raw: string, base: string): string {
  if (!raw) return "/placeholder.png";
  if (/^https?:\/\//i.test(raw)) return raw;
  if (raw.startsWith("/uploads/")) return `${base}${raw}`;
  if (raw.startsWith("uploads/")) return `${base}/${raw}`;
  if (raw.startsWith("products/")) return `${base}/uploads/${raw}`;
  return `${base}/uploads/products/${raw}`;
}

export default function ProductImageSlider({
  images,
  baseUrl,
  discountPercent = 0,
}: {
  images: Array<{ imageUrl?: string; altText?: string; image?: string; alt?: string }> | undefined;
  baseUrl: string;
  discountPercent?: number;
}) {
  const prepared = useMemo<SliderImage[]>(() => {
    const list = Array.isArray(images) ? images : [];
    const mapped = list
      .map((img) => ({
        src: normalizeImageUrl(String(img.imageUrl || img.image || ""), baseUrl),
        alt: img.altText || img.alt || "Изображение товара",
      }))
      .filter((img) => !!img.src);

    const uniq: SliderImage[] = [];
    const seen = new Set<string>();
    for (const img of mapped) {
      if (seen.has(img.src)) continue;
      seen.add(img.src);
      uniq.push(img);
    }
    return uniq.length ? uniq : [{ src: "/placeholder.png", alt: "Изображение товара" }];
  }, [images, baseUrl]);

  const [active, setActive] = useState(0);
  const current = prepared[active] || prepared[0];
  const canSlide = prepared.length > 1;

  const prev = () => setActive((p) => (p - 1 + prepared.length) % prepared.length);
  const next = () => setActive((p) => (p + 1) % prepared.length);

  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3">
      {discountPercent > 0 && (
        <span className="absolute left-5 top-5 z-10 rounded-xl bg-coral px-3 py-1 text-sm font-bold text-white">
          -{discountPercent}% СКИДКА
        </span>
      )}

      <img
        key={current.src}
        src={current.src}
        className="h-72 w-full rounded-2xl object-cover sm:h-96"
        alt={current.alt || "Изображение товара"}
      />

      {canSlide && (
        <>
          <button
            className="btn-soft absolute left-5 top-1/2 -translate-y-1/2 !rounded-full !px-2.5 !py-1.5"
            onClick={prev}
            type="button"
          >
            {"<"}
          </button>
          <button
            className="btn-soft absolute right-5 top-1/2 -translate-y-1/2 !rounded-full !px-2.5 !py-1.5"
            onClick={next}
            type="button"
          >
            {">"}
          </button>
          <div className="mt-3 flex items-center justify-center gap-2">
            {prepared.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActive(idx)}
                className={`h-1.5 rounded-full transition ${
                  idx === active ? "w-6 bg-mint" : "w-3 bg-white/35"
                }`}
              />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {prepared.map((img, idx) => (
              <button
                key={`${img.src}-thumb`}
                type="button"
                onClick={() => setActive(idx)}
                className={`overflow-hidden rounded-lg border ${
                  idx === active ? "border-mint" : "border-white/10"
                }`}
              >
                <img src={img.src} alt={img.alt || "Миниатюра"} className="h-14 w-full object-cover" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
