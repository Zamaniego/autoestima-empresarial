"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Integrate with email provider
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#071620] py-20 sm:py-28">
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-gnozin-blue/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gnozin-sky/6 blur-[120px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-6">
        {/* Label */}
        <p className="editorial-label mb-4 text-gnozin-sky">
          Mantente conectado
        </p>

        {/* Headline */}
        <h2
          className="mb-5 text-3xl text-white sm:text-4xl"
          style={{
            fontFamily:
              "var(--font-garamond), 'EB Garamond', Garamond, serif",
            fontStyle: "italic",
          }}
        >
          Ideas que{" "}
          <span className="text-gnozin-sky">transforman empresas</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-blue-200/60">
          Cada semana, una reflexión breve sobre identidad, sistemas y
          resultados para líderes PyME que quieren construir diferente. Sin
          spam, sin relleno.
        </p>

        {/* Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-blue-200/30 outline-none backdrop-blur-sm transition-colors focus:border-gnozin-sky/50 focus:bg-white/8"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-gnozin-blue px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gnozin-blue/90 hover:shadow-lg hover:shadow-gnozin-blue/20 active:scale-[0.98]"
            >
              <Send className="h-4 w-4" />
              Suscribirme
            </button>
          </form>
        ) : (
          <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-6 py-4">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <p className="text-sm text-green-300">
              ¡Listo! Te llegará la próxima edición.
            </p>
          </div>
        )}

        {/* Trust line */}
        <p className="mt-6 text-xs text-blue-200/30">
          +2,000 líderes PyME ya la reciben · Cancela cuando quieras
        </p>
      </div>
    </section>
  );
}
