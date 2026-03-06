"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Crown, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const personas = {
  fundador: {
    icon: Building2,
    label: "Soy Fundador",
    tagline: "Creé mi empresa desde cero",
    pains: [
      "Tu empresa se paraliza si no estás",
      "Trabajas más que todos pero no ganas más",
      "No puedes delegar — nadie hace las cosas como tú",
      "Llevas años sin vacaciones reales",
    ],
    solution:
      "El Programa Encaje te ayuda a descubrir qué hace única a tu empresa, cobrar lo que realmente vales y construir un equipo que funcione sin que estés encima.",
    cta: "Diagnóstico para Fundadores",
  },
  heredero: {
    icon: Crown,
    label: "Soy Heredero",
    tagline: "Tomé las riendas de un negocio familiar",
    pains: [
      "Te comparan constantemente con quien fundó la empresa",
      "Sientes que la empresa nunca será realmente tuya",
      "No sabes si modernizar sin destruir lo que funciona",
      "La familia y el negocio se mezclan y generan conflicto",
    ],
    solution:
      "El Programa Encaje te da las herramientas para encontrar tu propia voz como líder, separar lo personal de lo empresarial y hacer la transición generacional sin destruir relaciones.",
    cta: "Diagnóstico para Herederos",
  },
};

export function PersonaSelector() {
  const [selected, setSelected] = useState<"fundador" | "heredero" | null>(
    null
  );

  return (
    <div>
      {/* Selector Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {(Object.entries(personas) as [keyof typeof personas, (typeof personas)[keyof typeof personas]][]).map(
          ([key, p]) => {
            const Icon = p.icon;
            const isActive = selected === key;
            return (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all duration-300 ${
                  isActive
                    ? "border-gnozin-blue bg-gnozin-blue text-white shadow-lg"
                    : "border-gnozin-sky/30 bg-white text-gnozin-navy hover:border-gnozin-blue/50 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive ? "bg-white/20" : "bg-gnozin-blue/10"
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 ${
                        isActive ? "text-white" : "text-gnozin-blue"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{
                        fontFamily:
                          "var(--font-heading), Montserrat, sans-serif",
                      }}
                    >
                      {p.label}
                    </h3>
                    <p
                      className={`text-sm ${
                        isActive ? "text-blue-100" : "text-gnozin-steel"
                      }`}
                    >
                      {p.tagline}
                    </p>
                  </div>
                </div>
                {isActive && (
                  <div className="absolute right-4 top-4">
                    <CheckCircle2 className="h-5 w-5 text-white/80" />
                  </div>
                )}
              </button>
            );
          }
        )}
      </div>

      {/* Expanded Content */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 rounded-xl bg-gnozin-cloud p-6 sm:p-8">
              <h4
                className="mb-4 text-sm font-bold uppercase tracking-widest text-gnozin-blue"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                ¿Te identificas con esto?
              </h4>
              <ul className="mb-6 space-y-3">
                {personas[selected].pains.map((pain, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gnozin-steel"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gnozin-blue/10 text-xs font-bold text-gnozin-blue">
                      {i + 1}
                    </span>
                    <span className="text-sm">{pain}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mb-6 text-sm leading-relaxed text-gnozin-navy">
                {personas[selected].solution}
              </p>
              <Button
                className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
                asChild
              >
                <Link href="/contacto">
                  {personas[selected].cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
