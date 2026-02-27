"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import ProductGrid from "../components/ProductGrid";
import { useFavoritesStore } from "../lib/favoritesStore";

const PAGE_SIZE = 12;
const CATEGORY_PAGE_SIZE = 8;

function getProductPrice(product: any): number {
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

  if (original > 0 && discounted > 0 && discounted < original) {
    return discounted;
  }
  return original;
}

function normalizeCategoryImageUrl(raw: string, base: string): string {
  if (!raw) return "/placeholder.png";
  if (/^https?:\/\//i.test(raw)) return raw;
  if (raw.startsWith("/uploads/")) return `${base}${raw}`;
  if (raw.startsWith("uploads/")) return `${base}/${raw}`;
  if (raw.startsWith("categories/")) return `${base}/uploads/${raw}`;
  return `${base}/uploads/categories/${raw}`;
}

function buildCategoryKey(category: any): string {
  const id = Number(category?.id);
  const rawSlug = String(category?.slug || "")
    .trim()
    .toLowerCase();
  const normalizedSlug = rawSlug
    .replace(/[^a-z0-9-\s]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  if (Number.isFinite(id) && id > 0 && normalizedSlug) {
    return `${normalizedSlug}-${id}`;
  }
  if (Number.isFinite(id) && id > 0) {
    return String(id);
  }
  return normalizedSlug;
}

function categoryMatchesSelection(
  category: any,
  selectedCategory: string | null,
): boolean {
  if (!selectedCategory) return false;
  const id = Number(category?.id);
  const slug = String(category?.slug || "");
  const key = buildCategoryKey(category);
  return (
    selectedCategory === key ||
    selectedCategory === slug ||
    (Number.isFinite(id) && selectedCategory === String(id))
  );
}

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [priceBounds, setPriceBounds] = useState({ min: 0, max: 0 });
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPage, setCategoriesPage] = useState(1);

  const favorites = useFavoritesStore((s) => s.items);
  const router = useRouter();
  const selectedCategory =
    typeof router.query.category === "string" ? router.query.category : null;
  const selectedQuery =
    typeof router.query.q === "string" ? router.query.q : "";
  const isSearchMode = !!selectedQuery.trim();
  const base = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3333";

  useEffect(() => {
    setCurrentPage(1);

    if (!selectedCategory && !selectedQuery.trim()) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const endpoint = selectedCategory
      ? `/api/categories/${selectedCategory}`
      : "/api/products?page=1&limit=500";

    fetch(endpoint)
      .then((r) => r.json())
      .then((d) =>
        setProducts(
          selectedCategory
            ? Array.isArray(d?.products)
              ? d.products
              : []
            : Array.isArray(d)
              ? d
              : Array.isArray(d?.products)
                ? d.products
                : [],
        ),
      )
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [selectedCategory, selectedQuery]);

  useEffect(() => {
    setCurrentPage(1);
    setCategoriesPage(1);
  }, [selectedQuery]);

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then((d) => {
        setCategories(Array.isArray(d) ? d : []);
        setCategoriesPage(1);
      })
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    if (!products.length) {
      setPriceBounds({ min: 0, max: 0 });
      setRangeMin(0);
      setRangeMax(0);
      return;
    }

    const prices = products
      .map((p) => getProductPrice(p))
      .filter((v) => Number.isFinite(v) && v >= 0);

    if (!prices.length) {
      setPriceBounds({ min: 0, max: 0 });
      setRangeMin(0);
      setRangeMax(0);
      return;
    }

    const min = Math.floor(Math.min(...prices));
    const max = Math.ceil(Math.max(...prices));

    setPriceBounds({ min, max });
    setRangeMin(min);
    setRangeMax(max);
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = selectedQuery.trim().toLowerCase();
    return products.filter((p) => {
      const price = getProductPrice(p);
      const title = String(p?.title || p?.name || "").toLowerCase();
      const description = String(p?.description || "").toLowerCase();
      const matchesQuery =
        !normalizedQuery ||
        title.includes(normalizedQuery) ||
        description.includes(normalizedQuery);
      return price >= rangeMin && price <= rangeMax && matchesQuery;
    });
  }, [products, rangeMin, rangeMax, selectedQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, currentPage]);

  const totalCategoryPages = Math.max(
    1,
    Math.ceil(categories.length / CATEGORY_PAGE_SIZE),
  );

  useEffect(() => {
    if (categoriesPage > totalCategoryPages) {
      setCategoriesPage(totalCategoryPages);
    }
  }, [categoriesPage, totalCategoryPages]);

  const paginatedCategories = useMemo(() => {
    const start = (categoriesPage - 1) * CATEGORY_PAGE_SIZE;
    return categories.slice(start, start + CATEGORY_PAGE_SIZE);
  }, [categories, categoriesPage]);

  const hasPriceRange = priceBounds.max > priceBounds.min;
  const sliderSpan = Math.max(priceBounds.max - priceBounds.min, 1);
  const minPercent = ((rangeMin - priceBounds.min) / sliderSpan) * 100;
  const maxPercent = ((rangeMax - priceBounds.min) / sliderSpan) * 100;
  const startItem = filteredProducts.length
    ? (currentPage - 1) * PAGE_SIZE + 1
    : 0;
  const endItem = Math.min(currentPage * PAGE_SIZE, filteredProducts.length);

  const activeCategoryObj = categories.find((c) =>
    categoryMatchesSelection(c, selectedCategory),
  );

  return (
    <div className="space-y-5">
      {!isSearchMode && (
        <section className="glass-card p-5">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h2 className="text-xl font-extrabold text-white">Избранное</h2>
            <span className="text-sm text-slate-300">
              {favorites.length} товаров
            </span>
          </div>
          {favorites.length > 0 ? (
            <ProductGrid items={favorites} />
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-slate-300">
              В избранном пока нет товаров. Нажмите на сердечко на карточке.
            </div>
          )}
        </section>
      )}

      {!isSearchMode && !selectedCategory && (
        <section className="glass-card p-5">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
              Категории
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedCategories.map((c) => {
              const key = buildCategoryKey(c);
              const active = categoryMatchesSelection(c, selectedCategory);
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => router.push(`/?category=${key}`)}
                  className={`group relative overflow-hidden rounded-2xl border text-left transition hover:-translate-y-1 ${
                    active
                      ? "border-mint/70 bg-mint/10"
                      : "border-white/10 bg-white/5 hover:border-coral/50"
                  }`}
                >
                  <img
                    src={normalizeCategoryImageUrl(String(c.image || ""), base)}
                    alt={c.title || "Категория"}
                    className="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <div className="text-sm font-semibold text-white">
                      {c.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          {categories.length === 0 && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-slate-300">
              Категории не найдены.
            </div>
          )}

          {totalCategoryPages > 1 && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <button
                className="btn-soft"
                type="button"
                onClick={() => setCategoriesPage((p) => Math.max(1, p - 1))}
                disabled={categoriesPage === 1}
              >
                Назад
              </button>

              {Array.from({ length: totalCategoryPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`btn-soft ${categoriesPage === page ? "border-mint/70 bg-mint/10" : ""}`}
                    type="button"
                    onClick={() => setCategoriesPage(page)}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                className="btn-soft"
                type="button"
                onClick={() =>
                  setCategoriesPage((p) => Math.min(totalCategoryPages, p + 1))
                }
                disabled={categoriesPage === totalCategoryPages}
              >
                Вперед
              </button>
            </div>
          )}
        </section>
      )}

      {(selectedCategory || selectedQuery.trim()) && (
        <section className="glass-card p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              {selectedCategory
                ? activeCategoryObj?.title || "Товары категории"
                : `Результаты поиска: ${selectedQuery}`}
            </h2>
            {loading && (
              <span className="text-sm text-slate-300">Загрузка...</span>
            )}
          </div>

          {!isSearchMode && (
            <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  Фильтр по цене
                </h3>
                <div className="text-sm text-slate-300">
                  ₽{rangeMin} - ₽{rangeMax}
                </div>
              </div>

              <div className="relative h-9">
                <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/15" />
                <div
                  className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-mint to-coral"
                  style={{
                    left: `${minPercent}%`,
                    width: `${Math.max(maxPercent - minPercent, 0)}%`,
                  }}
                />

                <input
                  type="range"
                  min={priceBounds.min}
                  max={priceBounds.max}
                  value={rangeMin}
                  disabled={!hasPriceRange}
                  onChange={(e) => {
                    const next = Number(e.target.value);
                    setRangeMin(next <= rangeMax ? next : rangeMax);
                  }}
                  className="range-thumb"
                />

                <input
                  type="range"
                  min={priceBounds.min}
                  max={priceBounds.max}
                  value={rangeMax}
                  disabled={!hasPriceRange}
                  onChange={(e) => {
                    const next = Number(e.target.value);
                    setRangeMax(next >= rangeMin ? next : rangeMin);
                  }}
                  className="range-thumb"
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>От ₽ {rangeMin}</span>
                <span>До ₽ {rangeMax}</span>
              </div>

              <div className="mt-2 text-xs text-slate-400">
                Показано {startItem}-{endItem} из {filteredProducts.length}{" "}
                (всего {products.length})
              </div>
            </div>
          )}

          <ProductGrid items={paginatedProducts} />

          {totalPages > 1 && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <button
                className="btn-soft"
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Назад
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`btn-soft ${currentPage === page ? "border-mint/70 bg-mint/10" : ""}`}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                className="btn-soft"
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
              >
                Вперед
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
