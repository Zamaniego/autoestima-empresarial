"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headlines = [
  "SI TU EMPRESA NO FUNCIONA SIN TI, NO TIENES UNA EMPRESA.",
  "TRABAJAS 12 HORAS Y TU EMPRESA NO CRECE. ESO NO ES LIDERAZGO.",
  "TU EQUIPO NO DECIDE SIN TI. ESO SE LLAMA DEPENDENCIA.",
  "COBRAS MENOS DE LO QUE VALES. ESO SE LLAMA MIEDO.",
  "LLEVAS AÑOS SIN VACACIONES. ESO NO ES COMPROMISO — ES UNA TRAMPA.",
];

export function AnimatedHeadlines() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[4.5rem] sm:min-h-[6rem] lg:min-h-[7.5rem]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
          style={{
            fontFamily: "var(--font-heading), Montserrat, sans-serif",
          }}
        >
          {headlines[index]}
        </motion.h1>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="mt-6 flex gap-2">
        {headlines.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Headline ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
