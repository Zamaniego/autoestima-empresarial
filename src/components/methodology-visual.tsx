"use client";

import { motion } from "framer-motion";
import { Search, Heart, Compass } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Autoconocimiento",
    subtitle: "Semanas 1–2",
    desc: "Entiende dónde estás realmente. Mapeamos tu situación como líder e identificamos los patrones que te tienen atrapado.",
    color: "bg-gnozin-sky/20 text-gnozin-sky",
  },
  {
    icon: Heart,
    number: "02",
    title: "Autoestima",
    subtitle: "Semanas 3–4",
    desc: "Descubre qué hace única a tu empresa. El ejercicio de singularidad te da claridad sobre tu valor real en el mercado.",
    color: "bg-gnozin-blue/20 text-gnozin-blue",
  },
  {
    icon: Compass,
    number: "03",
    title: "Dirección",
    subtitle: "Semanas 5–6",
    desc: "Diseña tu plan a 90 días. Con claridad y autoestima, ahora sí puedes delegar, crecer y liderar sin agotarte.",
    color: "bg-gnozin-navy/20 text-gnozin-navy",
  },
];

export function MethodologyVisual() {
  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gnozin-sky/20 lg:block" />

      <div className="space-y-8 lg:space-y-0">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`rounded-xl border border-gnozin-sky/20 bg-white p-6 shadow-sm ${
                  i % 2 === 1 ? "lg:col-start-2" : "lg:col-start-1"
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${step.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gnozin-steel">
                      {step.subtitle}
                    </p>
                    <h3
                      className="text-lg font-bold text-gnozin-navy"
                      style={{
                        fontFamily:
                          "var(--font-heading), Montserrat, sans-serif",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gnozin-steel">
                  {step.desc}
                </p>
              </div>

              {/* Number badge on timeline */}
              <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 lg:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gnozin-blue text-sm font-bold text-white shadow-lg">
                  {step.number}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
