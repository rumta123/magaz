"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuthStore } from "../../lib/authStore";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((s) => s.login);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login({ email, password });
      router.push("/");
    } catch (err: any) {
      setError(err?.message || JSON.stringify(err) || "Ошибка сети");
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-lg rounded-3xl border border-white/10 bg-[#0c1d2c]/85 p-6 shadow-neon">
      <h1 className="text-3xl font-extrabold text-white">С возвращением</h1>
      <p className="mt-1 text-sm text-slate-300">Войдите, чтобы синхронизировать корзину и заказы.</p>

      <form onSubmit={submit} className="mt-6 space-y-3">
        <div>
          <label className="mb-1 block text-sm text-slate-200">Почта</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="field"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-slate-200">Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="field"
          />
        </div>
        {error && <div className="rounded-xl border border-red-400/40 bg-red-500/10 p-2 text-sm text-red-200">{error}</div>}
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? "Входим..." : "Войти"}
        </button>
      </form>

      <div className="mt-4 text-sm text-slate-300">
        Нет аккаунта?{" "}
        <Link href="/auth/register" className="font-semibold text-mint underline-offset-4 hover:underline">
          Регистрация
        </Link>
      </div>
    </section>
  );
}
