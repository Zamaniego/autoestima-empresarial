"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  TrendingDown,
  UserX,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    icon: Clock,
    pain: "Trabajas 12 horas diarias y tu empresa no funciona sin ti",
    short: "Trabajas 12 horas diarias",
    desc: "Si no estás, todo se detiene. Eso no es dirigir — es sobrevivir.",
  },
  {
    icon: TrendingDown,
    pain: "Compites solo por precio porque no sabes comunicar tu valor",
    short: "Compites solo por precio",
    desc: "Sabes que tu producto vale más, pero el mercado te obliga a bajar.",
  },
  {
    icon: UserX,
    pain: "Perdiste tu identidad dentro del negocio que creaste",
    short: "Perdiste tu identidad",
    desc: "Ya no sabes dónde terminas tú y dónde empieza tu empresa.",
  },
  {
    icon: AlertTriangle,
    pain: "Tu equipo no funciona si tú no estás encima",
    short: "Tu equipo depende de ti",
    desc: "Delegas, pero nada funciona como cuando tú lo haces.",
  },
];

/* ─── Floating particles ─── */
function FloatingParticles() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 3 + Math.random() * 6,
    x: 5 + Math.random() * 90,
    y: 5 + Math.random() * 90,
    duration: 12 + Math.random() * 18,
    delay: Math.random() * 8,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/10"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2],
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
    <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
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

/* ─── Main Hero Carousel ─── */
export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const INTERVAL = 5000;

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
      className="gnozin-gradient relative overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background effects */}
      <div className="gnozin-diagonal absolute inset-0 bg-gnozin-navy/20" />
      <FloatingParticles />

      {/* Subtle Triqueta watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <motion.svg
          viewBox="0 0 400 400"
          className="h-[700px] w-[700px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="200"
            cy="140"
            r="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="145"
            cy="240"
            r="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="255"
            cy="240"
            r="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </motion.svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left side — Carousel + CTA */}
          <div className="lg:col-span-7">
            {/* Top label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-sm font-bold uppercase tracking-[4px] text-gnozin-sky"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
            >
              ¿Te suena familiar?
            </motion.p>

            {/* Pain point — large animated text */}
            <div className="relative min-h-[180px] sm:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Icon + pain */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                      <CurrentIcon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[3px] text-red-300/90">
                      Dolor #{current + 1}
                    </span>
                  </div>
                  <h2
                    className="text-2xl font-black uppercase leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
                    style={{
                      fontFamily:
                        "var(--font-heading), Montserrat, sans-serif",
                    }}
                  >
                    {painPoints[current].pain}
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-blue-100 sm:text-lg">
                    {painPoints[current].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="mt-8 flex items-center gap-3">
              {painPoints.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ver dolor ${i + 1}`}
                  className="group flex flex-col items-center gap-1.5"
                >
                  <div
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-10 bg-gnozin-sky"
                        : "w-2.5 bg-white/30 group-hover:bg-white/50"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-xs text-blue-200/60">
                {current + 1}/{painPoints.length}
              </span>
            </div>

            {/* Divider + solution teaser */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 border-t border-white/15 pt-8"
            >
              <p
                className="mb-1 text-xs font-bold uppercase tracking-[3px] text-gnozin-sky"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                La solución
              </p>
              <h1
                className="mb-3 text-2xl font-black uppercase sm:text-3xl"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                Autoestima Empresarial
              </h1>
              <p className="max-w-lg text-blue-100">
                Un modelo de regulación que protege la singularidad del
                emprendedor. Tres esferas, tres intersecciones, un centro
                convergente — de Gnozin Navarro.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
                  asChild
                >
                  <Link href="/empieza-aqui">
                    Descubre el Modelo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/taller">Ver el Taller</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right side — Gnozin image */}
          <div className="hidden lg:col-span-5 lg:flex lg:justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Glow effect behind image */}
              <div className="absolute -inset-8 rounded-full bg-gnozin-sky/10 blur-3xl" />

              {/* Image container */}
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
                <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full border-2 border-white/10" />
                <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full border border-gnozin-sky/20" />
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-2 bottom-20 z-20 rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md"
              >
                <p
                  className="text-2xl font-black text-white"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  +30
                </p>
                <p className="text-xs text-blue-200">años con PyMEs</p>
              </motion.div>

              {/* Floating stat badge 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-4 top-24 z-20 rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md"
              >
                <p
                  className="text-2xl font-black text-white"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  +250
                </p>
                <p className="text-xs text-blue-200">líderes transformados</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile: Mini stats below hero content */}
        <div className="mt-10 grid grid-cols-3 gap-4 text-center lg:hidden">
          {[
            { stat: "+30", label: "Años" },
            { stat: "+250", label: "Líderes" },
            { stat: "3+3+1", label: "Modelo" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg bg-white/10 px-3 py-3 backdrop-blur-sm"
            >
              <p
                className="text-xl font-black"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                {s.stat}
              </p>
              <p className="text-xs text-blue-200">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
