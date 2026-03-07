"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  TrendingDown,
  UserX,
  AlertTriangle,
} from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    pain: "Trabajas 12 horas diarias y tu empresa no funciona sin ti",
    desc: "Si no estás, todo se detiene. Eso no es dirigir — es sobrevivir.",
  },
  {
    icon: TrendingDown,
    pain: "Compites solo por precio porque no sabes comunicar tu valor",
    desc: "Sabes que tu producto vale más, pero el mercado te obliga a bajar.",
  },
  {
    icon: UserX,
    pain: "Perdiste tu identidad dentro del negocio que creaste",
    desc: "Ya no sabes dónde terminas tú y dónde empieza tu empresa.",
  },
  {
    icon: AlertTriangle,
    pain: "Tu equipo no funciona si tú no estás encima",
    desc: "Delegas, pero nada funciona como cuando tú lo haces.",
  },
];

/* ─── Floating particles ─── */
function FloatingParticles() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 4,
    x: 5 + Math.random() * 90,
    y: 5 + Math.random() * 90,
    duration: 14 + Math.random() * 20,
    delay: Math.random() * 8,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/8"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Progress bar ─── */
function ProgressBar({
  active,
  duration,
}: {
  active: boolean;
  duration: number;
}) {
  return (
    <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/15">
      {active && (
        <motion.div
          className="h-full rounded-full bg-gnozin-sky"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          key={Date.now()}
        />
      )}
    </div>
  );
}

/* ─── Main Hero — Peterson-inspired cinematic editorial ─── */
export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const INTERVAL = 5500;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % painPoints.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next, current]);

  const CurrentIcon = painPoints[current].icon;

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gnozin-dark text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-gnozin-dark via-gnozin-navy/80 to-gnozin-dark" />
      <FloatingParticles />

      {/* Subtle grain overlay */}
      <div className="grain-overlay absolute inset-0" />

      {/* Subtle Triqueta watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <motion.svg
          viewBox="0 0 400 400"
          className="h-[800px] w-[800px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="200" cy="140" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="145" cy="240" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="255" cy="240" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
        </motion.svg>
      </div>

      {/* Content — vertically centered with nav offset */}
      <div className="relative flex min-h-screen items-center pt-[72px]">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left side — Carousel + editorial CTA */}
            <div className="lg:col-span-7">
              {/* Top label — Peterson uppercase tracked style */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="editorial-label mb-5 text-gnozin-sky"
              >
                ¿Te suena familiar?
              </motion.p>

              {/* Pain point — large serif italic headline */}
              <div className="relative min-h-[220px] sm:min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Icon + label */}
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <CurrentIcon className="h-5 w-5 text-gnozin-sky" />
                      </div>
                      <span className="editorial-label text-red-300/80" style={{ fontSize: "0.65rem" }}>
                        Dolor #{current + 1}
                      </span>
                    </div>

                    {/* Serif italic headline — Peterson signature */}
                    <h2 className="editorial-headline text-3xl text-white sm:text-4xl lg:text-[3rem]">
                      {painPoints[current].pain}
                    </h2>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-blue-200/80 sm:text-lg">
                      {painPoints[current].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress dots — minimal */}
              <div className="mt-8 flex items-center gap-3">
                {painPoints.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Ver dolor ${i + 1}`}
                    className="group flex flex-col items-center gap-1.5"
                  >
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === current
                          ? "w-10 bg-gnozin-sky"
                          : "w-1.5 bg-white/25 group-hover:bg-white/50"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Divider + solution — editorial style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 border-t border-white/10 pt-10"
              >
                <p className="editorial-label mb-2 text-gnozin-sky">
                  La solución
                </p>
                <h1 className="editorial-headline mb-4 text-3xl text-white sm:text-4xl lg:text-5xl">
                  Autoestima{" "}
                  <span className="text-gnozin-sky">Empresarial</span>
                </h1>
                <p className="mb-8 max-w-lg text-blue-200/80">
                  Un modelo de regulación que protege la singularidad del
                  emprendedor. Tres esferas, tres intersecciones, un centro
                  convergente — de Gnozin Navarro.
                </p>

                {/* Peterson-style underlined CTAs */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                  <Link
                    href="/empieza-aqui"
                    className="editorial-cta text-white"
                  >
                    Descubre el Modelo
                  </Link>
                  <Link
                    href="/taller"
                    className="editorial-cta text-gnozin-sky"
                  >
                    Ver el Taller
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right side — Gnozin image */}
            <div className="hidden lg:col-span-5 lg:flex lg:justify-center">
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                {/* Soft glow */}
                <div className="absolute -inset-12 rounded-full bg-gnozin-sky/8 blur-[80px]" />

                {/* Image */}
                <div className="relative">
                  <Image
                    src="/images/gnozin-hero.png"
                    alt="Gnozin Navarro — Mentor de líderes PyME"
                    width={420}
                    height={780}
                    className="relative z-10 h-auto max-h-[580px] w-auto object-contain drop-shadow-2xl"
                    priority
                  />
                  {/* Decorative ring */}
                  <div className="absolute -bottom-8 -right-8 h-72 w-72 rounded-full border border-white/5" />
                </div>

                {/* Floating stat badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -right-2 bottom-20 z-20 rounded-lg border border-white/10 bg-gnozin-dark/80 px-5 py-3 backdrop-blur-md"
                >
                  <p
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                  >
                    +30
                  </p>
                  <p className="text-xs text-blue-200/70">años con PyMEs</p>
                </motion.div>

                {/* Floating stat badge 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="absolute -left-4 top-24 z-20 rounded-lg border border-white/10 bg-gnozin-dark/80 px-5 py-3 backdrop-blur-md"
                >
                  <p
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                  >
                    +250
                  </p>
                  <p className="text-xs text-blue-200/70">líderes transformados</p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Mobile: Mini stats — dark glass style */}
          <div className="mt-12 grid grid-cols-3 gap-3 text-center lg:hidden">
            {[
              { stat: "+30", label: "Años" },
              { stat: "+250", label: "Líderes" },
              { stat: "3+3+1", label: "Modelo" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-white/8 bg-white/5 px-3 py-3 backdrop-blur-sm"
              >
                <p
                  className="text-xl font-black"
                  style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                >
                  {s.stat}
                </p>
                <p className="text-xs text-blue-200/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave — transitions to cream (Peterson warm tone) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="#F5F0EB"
          />
        </svg>
      </div>
    </section>
  );
}
