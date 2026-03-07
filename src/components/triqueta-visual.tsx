"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Sphere = "ser" | "hacer" | "tener" | "liderazgo" | "efectividad" | "singularidad" | "bienestar" | null;

const sphereData: Record<string, { title: string; subtitle: string; description: string; color: string }> = {
  ser: {
    title: "SER",
    subtitle: "Identidad",
    description:
      "¿Quién eres como emprendedor? Tu historia, tus valores, tu visión del mundo. La autoestima empresarial comienza cuando dejas de copiar modelos ajenos y reconoces tu singularidad como ventaja competitiva real.",
    color: "#0B6ABF",
  },
  hacer: {
    title: "HACER",
    subtitle: "Capacidad operativa",
    description:
      "¿Cómo ejecutas? Tus sistemas, procesos, equipo y forma de producir valor. No se trata de trabajar más — se trata de diseñar una operación que funcione sin depender exclusivamente de ti.",
    color: "#0A3D6B",
  },
  tener: {
    title: "TENER",
    subtitle: "Resultados económicos",
    description:
      "¿Qué produces? Ingresos, utilidad, patrimonio. Los resultados económicos son consecuencia del SER y el HACER alineados — no al revés. Cuando persigues el TENER sin identidad, terminas compitiendo por precio.",
    color: "#3A4A5A",
  },
  liderazgo: {
    title: "Liderazgo",
    subtitle: "SER + HACER",
    description:
      "Cuando tu identidad guía tu operación. No imitas, lideras desde quién eres. Tu equipo te sigue porque hay coherencia entre lo que dices, lo que crees y lo que haces.",
    color: "#4A9FE5",
  },
  efectividad: {
    title: "Efectividad",
    subtitle: "HACER + TENER",
    description:
      "Cuando tu operación produce resultados reales. No solo actividad, sino impacto medible. Tu sistema de trabajo genera valor económico de forma predecible y sostenible.",
    color: "#4A9FE5",
  },
  singularidad: {
    title: "Singularidad / Valor Auténtico",
    subtitle: "SER + TENER",
    description:
      "Cuando lo que eres se convierte en lo que produces. Tu propuesta de valor es inimitable porque nace de tu identidad, no de una táctica. Dejas de competir por precio.",
    color: "#4A9FE5",
  },
  bienestar: {
    title: "BIENESTAR",
    subtitle: "SER + HACER + TENER",
    description:
      "El centro convergente de la Triqueta. Cuando las tres esferas se alinean, el emprendedor deja de sobrevivir y empieza a prosperar — con su empresa, su equipo y su vida en equilibrio. Esto es autoestima empresarial.",
    color: "#E22529",
  },
};

export function TriquetaVisual() {
  const [active, setActive] = useState<Sphere>(null);

  const info = active ? sphereData[active] : null;

  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
      {/* SVG Triqueta */}
      <div className="relative w-full max-w-md shrink-0">
        <svg viewBox="0 0 400 420" className="w-full h-auto" role="img" aria-label="Modelo Triqueta: SER, HACER, TENER y sus intersecciones">
          {/* SER circle (top-left) */}
          <circle
            cx="160" cy="155" r="110"
            fill={active === "ser" ? "#0B6ABF" : "#E8F1FA"}
            fillOpacity={active === "ser" ? 0.2 : 0.6}
            stroke="#0B6ABF"
            strokeWidth={active === "ser" ? 3 : 1.5}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setActive(active === "ser" ? null : "ser")}
          />
          <text x="115" y="110" textAnchor="middle" className="pointer-events-none select-none" fill="#0B6ABF" fontWeight="900" fontSize="22" fontFamily="Montserrat, sans-serif">SER</text>
          <text x="115" y="130" textAnchor="middle" className="pointer-events-none select-none" fill="#3A4A5A" fontSize="11" fontFamily="Source Sans 3, sans-serif">Identidad</text>

          {/* HACER circle (top-right) */}
          <circle
            cx="240" cy="155" r="110"
            fill={active === "hacer" ? "#0A3D6B" : "#E8F1FA"}
            fillOpacity={active === "hacer" ? 0.2 : 0.6}
            stroke="#0A3D6B"
            strokeWidth={active === "hacer" ? 3 : 1.5}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setActive(active === "hacer" ? null : "hacer")}
          />
          <text x="285" y="110" textAnchor="middle" className="pointer-events-none select-none" fill="#0A3D6B" fontWeight="900" fontSize="22" fontFamily="Montserrat, sans-serif">HACER</text>
          <text x="285" y="130" textAnchor="middle" className="pointer-events-none select-none" fill="#3A4A5A" fontSize="11" fontFamily="Source Sans 3, sans-serif">Capacidad</text>

          {/* TENER circle (bottom-center) */}
          <circle
            cx="200" cy="280" r="110"
            fill={active === "tener" ? "#3A4A5A" : "#E8F1FA"}
            fillOpacity={active === "tener" ? 0.2 : 0.6}
            stroke="#3A4A5A"
            strokeWidth={active === "tener" ? 3 : 1.5}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setActive(active === "tener" ? null : "tener")}
          />
          <text x="200" y="350" textAnchor="middle" className="pointer-events-none select-none" fill="#3A4A5A" fontWeight="900" fontSize="22" fontFamily="Montserrat, sans-serif">TENER</text>
          <text x="200" y="370" textAnchor="middle" className="pointer-events-none select-none" fill="#3A4A5A" fontSize="11" fontFamily="Source Sans 3, sans-serif">Resultados</text>

          {/* Intersection: Liderazgo (SER + HACER) */}
          <circle
            cx="200" cy="140" r="22"
            fill={active === "liderazgo" ? "#4A9FE5" : "transparent"}
            fillOpacity={active === "liderazgo" ? 0.4 : 0}
            stroke={active === "liderazgo" ? "#0B6ABF" : "#4A9FE5"}
            strokeWidth={active === "liderazgo" ? 2.5 : 1}
            strokeDasharray={active === "liderazgo" ? "0" : "4 3"}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setActive(active === "liderazgo" ? null : "liderazgo")}
          />
          <text x="200" y="144" textAnchor="middle" className="pointer-events-none select-none" fill="#0B6ABF" fontWeight="700" fontSize="9" fontFamily="Source Sans 3, sans-serif">Liderazgo</text>

          {/* Intersection: Singularidad (SER + TENER) */}
          <circle
            cx="155" cy="235" r="22"
            fill={active === "singularidad" ? "#4A9FE5" : "transparent"}
            fillOpacity={active === "singularidad" ? 0.4 : 0}
            stroke={active === "singularidad" ? "#0B6ABF" : "#4A9FE5"}
            strokeWidth={active === "singularidad" ? 2.5 : 1}
            strokeDasharray={active === "singularidad" ? "0" : "4 3"}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setActive(active === "singularidad" ? null : "singularidad")}
          />
          <text x="155" y="233" textAnchor="middle" className="pointer-events-none select-none" fill="#0B6ABF" fontWeight="700" fontSize="8" fontFamily="Source Sans 3, sans-serif">Singularidad</text>
          <text x="155" y="244" textAnchor="middle" className="pointer-events-none select-none" fill="#0B6ABF" fontWeight="700" fontSize="8" fontFamily="Source Sans 3, sans-serif">/Valor</text>

          {/* Intersection: Efectividad (HACER + TENER) */}
          <circle
            cx="245" cy="235" r="22"
            fill={active === "efectividad" ? "#4A9FE5" : "transparent"}
            fillOpacity={active === "efectividad" ? 0.4 : 0}
            stroke={active === "efectividad" ? "#0B6ABF" : "#4A9FE5"}
            strokeWidth={active === "efectividad" ? 2.5 : 1}
            strokeDasharray={active === "efectividad" ? "0" : "4 3"}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setActive(active === "efectividad" ? null : "efectividad")}
          />
          <text x="245" y="238" textAnchor="middle" className="pointer-events-none select-none" fill="#0B6ABF" fontWeight="700" fontSize="9" fontFamily="Source Sans 3, sans-serif">Efectividad</text>

          {/* Center: BIENESTAR */}
          <circle
            cx="200" cy="200" r="28"
            fill={active === "bienestar" ? "#E22529" : "#0B6ABF"}
            fillOpacity={active === "bienestar" ? 0.2 : 0.1}
            stroke={active === "bienestar" ? "#E22529" : "#0B6ABF"}
            strokeWidth={active === "bienestar" ? 3 : 2}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setActive(active === "bienestar" ? null : "bienestar")}
          />
          <text x="200" y="197" textAnchor="middle" className="pointer-events-none select-none" fill={active === "bienestar" ? "#E22529" : "#0B6ABF"} fontWeight="900" fontSize="10" fontFamily="Montserrat, sans-serif">BIEN-</text>
          <text x="200" y="209" textAnchor="middle" className="pointer-events-none select-none" fill={active === "bienestar" ? "#E22529" : "#0B6ABF"} fontWeight="900" fontSize="10" fontFamily="Montserrat, sans-serif">ESTAR</text>
        </svg>
        <p className="mt-2 text-center text-xs text-gnozin-steel">
          Haz clic en cada esfera o intersección para explorar
        </p>
      </div>

      {/* Info panel */}
      <div className="min-h-[200px] flex-1">
        <AnimatePresence mode="wait">
          {info ? (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-gnozin-blue/20 bg-white p-6 shadow-sm"
            >
              <p
                className="mb-1 text-xs font-bold uppercase tracking-[3px]"
                style={{ color: info.color, fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
              >
                {info.subtitle}
              </p>
              <h3
                className="mb-3 text-2xl font-black text-gnozin-navy"
                style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
              >
                {info.title}
              </h3>
              <p className="text-gnozin-steel leading-relaxed">
                {info.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-full min-h-[200px] items-center justify-center rounded-xl border border-dashed border-gnozin-blue/20 bg-gnozin-ice/30 p-6"
            >
              <p className="text-center text-gnozin-steel">
                Explora el modelo haciendo clic en cada parte del diagrama.
                Cada esfera y cada intersección tiene un significado preciso
                dentro del sistema de Autoestima Empresarial.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
