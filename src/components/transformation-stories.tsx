"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stories = [
  {
    name: "Roberto M.",
    role: "Fundador · Constructora",
    profile: "Fundador" as const,
    before: "Trabajaba 14 horas diarias, no podía delegar nada, su empresa se paralizaba si él no estaba.",
    after: "Su empresa funciona de forma autónoma, redujo su jornada a 8 horas y finalmente tomó vacaciones.",
    metric: "14h → 8h",
    metricLabel: "sin perder ingresos",
    quote: "Finalmente entendí que el problema no era mi equipo — era yo.",
  },
  {
    name: "Carolina S.",
    role: "Heredera · Restaurante familiar",
    profile: "Heredero" as const,
    before: "La comparaban con su padre, sentía que la empresa nunca sería suya, tenía miedo de cambiar las cosas.",
    after: "Encontró su propia voz, modernizó sin destruir y reposicionó la marca con confianza.",
    metric: "+35%",
    metricLabel: "incremento en ventas",
    quote: "Gnozin me ayudó a dejar de ser la hija del dueño y convertirme en la líder.",
  },
  {
    name: "Martín L.",
    role: "Fundador · Agencia de marketing",
    profile: "Fundador" as const,
    before: "Cobraba la mitad de lo que valía su trabajo, competía solo por precio, no sabía articular su valor.",
    after: "Duplicó su ticket promedio, sus clientes pagan lo justo y lo respetan más como profesional.",
    metric: "2x",
    metricLabel: "ticket promedio en 90 días",
    quote: "El ejercicio de singularidad me cambió la perspectiva para siempre.",
  },
  {
    name: "Eduardo R.",
    role: "Fundador · Distribuidora",
    profile: "Fundador" as const,
    before: "Tenía 12 empleados y sentía que ninguno hacía las cosas como él. No podía soltar el control.",
    after: "Formó 3 líderes internos que ahora operan de forma autónoma. Dejó de ser el cuello de botella.",
    metric: "3",
    metricLabel: "líderes internos formados",
    quote: "Aprendí que soltar no es perder control — es ganar libertad.",
  },
];

export function TransformationStories() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % stories.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + stories.length) % stories.length);

  const story = stories[current];

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {/* Before / After */}
          <div className="space-y-4">
            {/* Before */}
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-500">
                Antes
              </p>
              <p className="text-sm leading-relaxed text-gnozin-navy">
                {story.before}
              </p>
            </div>
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gnozin-blue">
                <ArrowRight className="h-4 w-4 rotate-90 text-white" />
              </div>
            </div>
            {/* After */}
            <div className="rounded-xl border border-gnozin-blue/20 bg-gnozin-ice p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gnozin-blue">
                Después
              </p>
              <p className="text-sm leading-relaxed text-gnozin-navy">
                {story.after}
              </p>
            </div>
          </div>

          {/* Quote + Metric */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={
                    story.profile === "Fundador"
                      ? "border-gnozin-blue text-gnozin-blue"
                      : "border-gnozin-sky text-gnozin-navy"
                  }
                >
                  {story.profile}
                </Badge>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -left-1 -top-2 h-8 w-8 text-gnozin-blue/10" />
                <blockquote className="pl-8 text-lg italic leading-relaxed text-gnozin-navy">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              <div>
                <p className="text-sm font-bold text-gnozin-navy">
                  {story.name}
                </p>
                <p className="text-xs text-gnozin-steel">{story.role}</p>
              </div>
            </div>

            {/* Result Card */}
            <div className="mt-6 rounded-xl bg-gnozin-navy p-5 text-white">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-gnozin-sky" />
                <div>
                  <p
                    className="text-3xl font-black"
                    style={{
                      fontFamily:
                        "var(--font-heading), Montserrat, sans-serif",
                    }}
                  >
                    {story.metric}
                  </p>
                  <p className="text-sm text-blue-200">{story.metricLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-gnozin-blue"
                  : "w-2 bg-gnozin-sky/30 hover:bg-gnozin-sky"
              }`}
              aria-label={`Story ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gnozin-sky/30 text-gnozin-steel transition-colors hover:border-gnozin-blue hover:text-gnozin-blue"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gnozin-sky/30 text-gnozin-steel transition-colors hover:border-gnozin-blue hover:text-gnozin-blue"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Button
          className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
          asChild
        >
          <Link href="/casos">
            Ver más casos de éxito
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
