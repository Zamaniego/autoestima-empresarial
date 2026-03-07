"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Mail,
  Lock,
  Sparkles,
  BookOpen,
  Users,
  BarChart3,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Animated Triqueta background ─── */
function TriquetaBg() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.06]">
      <motion.svg
        viewBox="0 0 400 400"
        className="h-[600px] w-[600px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        {/* SER circle */}
        <circle
          cx="200"
          cy="140"
          r="100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gnozin-blue"
        />
        {/* HACER circle */}
        <circle
          cx="145"
          cy="240"
          r="100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gnozin-blue"
        />
        {/* TENER circle */}
        <circle
          cx="255"
          cy="240"
          r="100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gnozin-blue"
        />
      </motion.svg>
    </div>
  );
}

/* ─── Floating particles ─── */
function FloatingParticles() {
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 8,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    duration: 10 + Math.random() * 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gnozin-blue/10"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
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

/* ─── Feature card ─── */
function FeatureCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-3 rounded-xl bg-white/60 p-4 backdrop-blur-sm"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gnozin-blue/10">
        <Icon className="h-5 w-5 text-gnozin-blue" />
      </div>
      <div>
        <p className="text-sm font-bold text-gnozin-navy">{title}</p>
        <p className="text-xs leading-relaxed text-gnozin-steel">{desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── Main Login Page ─── */
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const features = [
    {
      icon: BookOpen,
      title: "Experiencia transmedia",
      desc: "El libro cobra vida con ejercicios interactivos y contenido multimedia.",
    },
    {
      icon: Target,
      title: "Diagnóstico de la Triqueta",
      desc: "Mapea tu SER, HACER y TENER con herramientas de autoevaluación.",
    },
    {
      icon: Users,
      title: "Comunidad de líderes",
      desc: "Conecta con otros empresarios en el mismo camino de transformación.",
    },
    {
      icon: BarChart3,
      title: "Tu progreso personalizado",
      desc: "Sigue tu evolución a lo largo del programa con métricas claras.",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-gnozin-ice via-white to-gnozin-cloud">
      <TriquetaBg />
      <FloatingParticles />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-0">
        {/* Left — Value proposition */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block"
        >
          <p
            className="mb-2 text-sm font-bold uppercase tracking-[4px] text-gnozin-blue"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Plataforma de Experiencia
          </p>
          <h1
            className="mb-4 text-3xl font-black uppercase text-gnozin-navy xl:text-4xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Tu camino hacia el
            <span className="text-gnozin-blue"> Bienestar Empresarial</span>
          </h1>
          <p className="mb-8 max-w-md text-gnozin-steel leading-relaxed">
            Accede a la experiencia transmedia del libro, herramientas de
            diagnóstico y tu mapa personal de la Triqueta — todo en un solo
            lugar.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={0.3 + i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Right — Login form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
        >
          <div className="relative rounded-2xl border border-gnozin-blue/10 bg-white/80 p-8 shadow-xl shadow-gnozin-blue/5 backdrop-blur-md sm:p-10">
            {/* Decorative top bar */}
            <div className="absolute -top-px left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-gnozin-blue via-gnozin-sky to-gnozin-blue" />

            {/* Header */}
            <div className="mb-8 text-center">
              <motion.div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gnozin-blue to-gnozin-navy"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="h-7 w-7 text-white" />
              </motion.div>
              <h2
                className="text-xl font-black uppercase text-gnozin-navy sm:text-2xl"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                Iniciar Sesión
              </h2>
              <p className="mt-1 text-sm text-gnozin-steel">
                Accede a tu experiencia personalizada
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gnozin-navy"
                >
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail
                    className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors ${
                      focusedField === "email"
                        ? "text-gnozin-blue"
                        : "text-gnozin-steel/40"
                    }`}
                  />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="tu@empresa.com"
                    className="w-full rounded-xl border border-gnozin-blue/15 bg-gnozin-ice/30 py-3 pl-10 pr-4 text-sm text-gnozin-navy placeholder:text-gnozin-steel/40 transition-all focus:border-gnozin-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-gnozin-blue/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gnozin-navy"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <Lock
                    className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors ${
                      focusedField === "password"
                        ? "text-gnozin-blue"
                        : "text-gnozin-steel/40"
                    }`}
                  />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-gnozin-blue/15 bg-gnozin-ice/30 py-3 pl-10 pr-12 text-sm text-gnozin-navy placeholder:text-gnozin-steel/40 transition-all focus:border-gnozin-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-gnozin-blue/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gnozin-steel/40 transition-colors hover:text-gnozin-blue"
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot password */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-xs font-medium text-gnozin-blue transition-colors hover:text-gnozin-navy"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* Submit */}
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-gnozin-blue to-gnozin-navy py-6 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-gnozin-blue/25 transition-all hover:shadow-xl hover:shadow-gnozin-blue/30"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  Acceder a la Plataforma
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </form>

            {/* Coming soon badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 rounded-xl border border-amber-200 bg-amber-50/80 p-4 text-center"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Próximamente
              </p>
              <p className="mt-1 text-xs leading-relaxed text-amber-600">
                La plataforma está en desarrollo. Regístrate en el taller para
                ser de los primeros en acceder.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="mt-3 border-amber-300 text-amber-700 hover:bg-amber-100"
                asChild
              >
                <Link href="/taller">
                  Conocer el Taller
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </motion.div>

            {/* Footer link */}
            <p className="mt-6 text-center text-xs text-gnozin-steel">
              ¿Aún no tienes cuenta?{" "}
              <Link
                href="/empieza-aqui"
                className="font-semibold text-gnozin-blue transition-colors hover:text-gnozin-navy"
              >
                Empieza aquí
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mobile features — shown below form on smaller screens */}
      <div className="relative mx-auto max-w-md px-4 pb-12 lg:hidden">
        <p
          className="mb-4 text-center text-sm font-bold uppercase tracking-[3px] text-gnozin-blue"
          style={{
            fontFamily: "var(--font-heading), Montserrat, sans-serif",
          }}
        >
          ¿Qué incluirá la plataforma?
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: BookOpen,
              title: "Experiencia transmedia",
              desc: "Ejercicios interactivos y contenido multimedia.",
            },
            {
              icon: Target,
              title: "Diagnóstico Triqueta",
              desc: "Mapea tu SER, HACER y TENER.",
            },
            {
              icon: Users,
              title: "Comunidad de líderes",
              desc: "Conecta con otros empresarios.",
            },
            {
              icon: BarChart3,
              title: "Progreso personalizado",
              desc: "Métricas claras de tu evolución.",
            },
          ].map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}
