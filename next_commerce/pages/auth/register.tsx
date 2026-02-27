"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const payload: any = { name, email, password };
      const normalizedPhone = phone.trim();
      if (normalizedPhone) payload.phone = normalizedPhone;

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        const msg =
          typeof data === "string"
            ? data
            : data?.message && typeof data.message === "string"
              ? data.message
              : data?.error && typeof data.error === "string"
                ? data.error
                : JSON.stringify(data);
        setError(msg);
        setLoading(false);
        return;
      }
      router.push("/auth/login");
    } catch (err: any) {
      setError(err?.message || JSON.stringify(err) || "Ошибка сети");
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-[#0c1d2c]/85 p-6 shadow-neon">
      <h1 className="text-3xl font-extrabold text-white">Создать аккаунт</h1>
      <p className="mt-1 text-sm text-slate-300">Зарегистрируйтесь и синхронизируйте корзину между сессиями.</p>

      <form onSubmit={submit} className="mt-6 space-y-3">
        <div>
          <label className="mb-1 block text-sm text-slate-200">Имя</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required className="field" />
        </div>
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
        <div>
          <label className="mb-1 block text-sm text-slate-200">Телефон</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="field" />
          <p className="mt-1 text-xs text-slate-400">Необязательно. Укажите международный формат при необходимости.</p>
        </div>

        {error && <div className="rounded-xl border border-red-400/40 bg-red-500/10 p-2 text-sm text-red-200">{error}</div>}
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? "Регистрируем..." : "Зарегистрироваться"}
        </button>
      </form>

      <div className="mt-4 text-sm text-slate-300">
        Уже есть аккаунт?{" "}
        <Link href="/auth/login" className="font-semibold text-mint underline-offset-4 hover:underline">
          Войти
        </Link>
      </div>
    </section>
  );
}
