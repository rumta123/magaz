"use client";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useCartStore } from "../../lib/cartStore";
import ProductImageSlider from "../../components/ProductImageSlider";
import { useAuthStore } from "../../lib/authStore";

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

function Stars({ value, size = "text-base" }: { value: number; size?: string }) {
  const rounded = Math.round(value);
  return (
    <div className={`flex items-center gap-0.5 ${size}`}>
      {Array.from({ length: 5 }).map((_, idx) => {
        const active = idx < rounded;
        return (
          <span key={idx} className={active ? "text-amber-300" : "text-slate-600"}>
            {active ? "\u2605" : "\u2606"}
          </span>
        );
      })}
    </div>
  );
}

function StarInput({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Оценка">
      {Array.from({ length: 5 }).map((_, idx) => {
        const starValue = idx + 1;
        const active = starValue <= value;
        return (
          <button
            key={starValue}
            type="button"
            aria-label={`Оценка ${starValue}`}
            aria-pressed={active}
            className={`text-2xl leading-none transition ${active ? "text-amber-300" : "text-slate-500 hover:text-slate-300"}`}
            onClick={() => onChange(starValue)}
          >
            {active ? "\u2605" : "\u2606"}
          </button>
        );
      })}
    </div>
  );
}

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const routeKey = Array.isArray(id) ? id[0] : id;

  const add = useCartStore((s) => s.add);
  const user = useAuthStore((s) => s.user);

  const [product, setProduct] = useState<any>(null);
  const [resolvedProductId, setResolvedProductId] = useState<number | null>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [canReview, setCanReview] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [reviewLoading, setReviewLoading] = useState(false);

  const [editingReviewId, setEditingReviewId] = useState<number | null>(null);
  const [editRating, setEditRating] = useState(5);
  const [editComment, setEditComment] = useState("");
  const [editLoading, setEditLoading] = useState(false);

  const ratingSummary = useMemo(() => {
    if (!reviews.length) return { average: 0, count: 0 };
    const sum = reviews.reduce((acc, item) => acc + Number(item?.rating || 0), 0);
    return {
      average: Math.round((sum / reviews.length) * 10) / 10,
      count: reviews.length,
    };
  }, [reviews]);

  async function loadReviews(targetProductId: string | number) {
    const data = await fetch(`/api/reviews/product/${targetProductId}`).then((r) => r.json());
    setReviews(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    if (!routeKey) return;
    fetch(`/api/products/${routeKey}`)
      .then((r) => r.json())
      .then((d) => {
        setProduct(d);
        setResolvedProductId(Number(d?.id || 0) || null);
      })
      .catch(() => {
        setProduct(null);
        setResolvedProductId(null);
      });
  }, [routeKey]);

  useEffect(() => {
    if (!resolvedProductId) return;
    loadReviews(resolvedProductId).catch(() => setReviews([]));
  }, [resolvedProductId]);

  useEffect(() => {
    if (!resolvedProductId || !user) {
      setCanReview(false);
      return;
    }
    fetch(`/api/reviews/can-review/${resolvedProductId}`, { credentials: "include" })
      .then((r) => r.json())
      .then((d) => setCanReview(!!d?.canReview))
      .catch(() => setCanReview(false));
  }, [resolvedProductId, user]);

  async function submitReview(e: React.FormEvent) {
    e.preventDefault();
    if (!resolvedProductId) return;
    try {
      setReviewLoading(true);
      setReviewError(null);
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          productId: Number(resolvedProductId),
          rating: Number(rating),
          comment: comment.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error?.message || data?.error || data?.message || "Ошибка");
      }
      setComment("");
      setRating(5);
      await loadReviews(resolvedProductId);
      setCanReview(false);
    } catch (err: any) {
      setReviewError(err?.message || "Не удалось отправить отзыв");
    } finally {
      setReviewLoading(false);
    }
  }

  function startEdit(review: any) {
    setEditingReviewId(Number(review.id));
    setEditRating(Number(review.rating || 5));
    setEditComment(String(review.comment || ""));
    setReviewError(null);
  }

  async function saveEdit() {
    if (!editingReviewId) return;
    try {
      setEditLoading(true);
      setReviewError(null);
      const res = await fetch(`/api/reviews/${editingReviewId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          rating: Number(editRating),
          comment: editComment.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error?.message || data?.error || data?.message || "Ошибка");
      }
      if (resolvedProductId) await loadReviews(resolvedProductId);
      setEditingReviewId(null);
    } catch (err: any) {
      setReviewError(err?.message || "Не удалось обновить отзыв");
    } finally {
      setEditLoading(false);
    }
  }

  if (!product) {
    return (
      <div className="glass-card p-8 text-center text-slate-300">
        Загрузка карточки товара...
      </div>
    );
  }

  const base = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3333";
  const { original, finalPrice, hasDiscount, discountPercent } = getPrices(product);
  const sliderImages = Array.isArray(product.images) ? [...product.images] : [];
  if (product.image) {
    sliderImages.unshift({
      imageUrl: product.image,
      altText: product.title || product.name || "Изображение товара",
    });
  }

  return (
    <section className="glass-card space-y-6 p-5 sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <ProductImageSlider images={sliderImages} baseUrl={base} discountPercent={discountPercent} />

        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-white">
            {product.title || product.name}
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">{product.description || "Описание отсутствует"}</p>

          <div className="mt-4 flex items-center gap-3">
            <Stars value={ratingSummary.average} size="text-lg" />
            <span className="text-sm text-slate-200">
              {ratingSummary.count > 0
                ? `${ratingSummary.average.toFixed(1)} / 5 (${ratingSummary.count})`
                : "Оценок пока нет"}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex flex-col">
              {hasDiscount && (
                <span className="text-sm text-slate-400 line-through">₽{original.toFixed(2)}</span>
              )}
              <span className="text-3xl font-black text-mint">₽{finalPrice.toFixed(2)}</span>
            </div>
            <button className="btn-primary" onClick={() => add(product)}>
              В корзину
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xl font-bold text-white">Отзывы покупателей</h2>
          {ratingSummary.count > 0 && (
            <div className="flex items-center gap-2">
              <Stars value={ratingSummary.average} />
              <span className="text-xs text-slate-300">{ratingSummary.average.toFixed(1)} ({ratingSummary.count})</span>
            </div>
          )}
        </div>

        {reviews.length === 0 && <p className="mt-2 text-sm text-slate-300">Пока нет отзывов</p>}
        <div className="mt-3 space-y-3">
          {reviews.map((r) => {
            const isOwn = !!user && Number(r.user?.id) === Number((user as any).id);
            const isEditing = editingReviewId === Number(r.id);
            return (
              <div key={r.id} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-white">{r.user?.name || "Покупатель"}</div>
                  {!isEditing && <Stars value={Number(r.rating || 0)} />}
                </div>

                {isEditing ? (
                  <div className="mt-2 space-y-2">
                    <StarInput value={editRating} onChange={setEditRating} />
                    <textarea
                      className="field min-h-[80px]"
                      value={editComment}
                      onChange={(e) => setEditComment(e.target.value)}
                    />
                    <div className="flex items-center gap-2">
                      <button className="btn-primary" disabled={editLoading} onClick={saveEdit} type="button">
                        {editLoading ? "Сохраняем..." : "Сохранить"}
                      </button>
                      <button className="btn-soft" type="button" onClick={() => setEditingReviewId(null)}>
                        Отмена
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {r.comment && <p className="mt-1 text-sm text-slate-300">{r.comment}</p>}
                    {isOwn && (
                      <button className="btn-soft mt-2" type="button" onClick={() => startEdit(r)}>
                        Редактировать мой отзыв
                      </button>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {user && canReview && (
        <form onSubmit={submitReview} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-lg font-bold text-white">Оставить отзыв</h3>
          <StarInput value={rating} onChange={setRating} />
          <textarea
            className="field min-h-[90px]"
            placeholder="Ваш комментарий"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {reviewError && <div className="text-sm text-red-300">{reviewError}</div>}
          <button className="btn-primary" disabled={reviewLoading}>
            {reviewLoading ? "Отправляем..." : "Отправить отзыв"}
          </button>
        </form>
      )}
    </section>
  );
}
