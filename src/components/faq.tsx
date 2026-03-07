"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── FAQ Data ─── */
const defaultFaqs = [
  {
    question: "¿Qué es la Autoestima Empresarial?",
    answer:
      "Es un modelo desarrollado por Gnozin Navarro que mide el equilibrio entre tres esferas fundamentales del emprendedor: SER (identidad y propósito), HACER (operación y sistemas) y TENER (resultados económicos). Cuando estas tres esferas se alinean, la empresa deja de sobrevivir y empieza a crecer desde su singularidad.",
  },
  {
    question: "¿A quién va dirigido este modelo?",
    answer:
      "Está diseñado para dueños y líderes de empresas PyME que sienten que su negocio depende exclusivamente de ellos, que trabajan más horas de las que deberían, o que han perdido claridad sobre su propósito como emprendedores. Si tu empresa no funciona sin ti, este modelo es para ti.",
  },
  {
    question: "¿Cómo funciona el taller?",
    answer:
      "El taller consta de 6 sesiones de 90 minutos cada una, donde trabajas directamente con el modelo de la Triqueta aplicado a tu empresa real. No es teoría: cada sesión tiene ejercicios prácticos, diagnósticos y planes de acción concretos que puedes implementar de inmediato.",
  },
  {
    question: "¿Necesito experiencia previa en negocios?",
    answer:
      "No. El modelo está diseñado para ser accesible tanto para emprendedores con décadas de experiencia como para quienes están comenzando. Lo que sí necesitas es disposición para cuestionar cómo has estado operando y apertura para construir algo diferente.",
  },
  {
    question: "¿En qué se diferencia de otros programas de coaching empresarial?",
    answer:
      "La mayoría de programas se enfocan solo en el HACER (procesos, ventas, marketing) o el TENER (metas financieras). Autoestima Empresarial parte del SER — tu identidad como emprendedor — porque sin esa base, los sistemas y resultados son insostenibles. Es un modelo de regulación, no de motivación.",
  },
  {
    question: "¿Puedo aplicar el modelo por mi cuenta?",
    answer:
      "Sí. El libro de Autoestima Empresarial contiene el modelo completo con ejercicios prácticos. Sin embargo, el taller y la mentoría personal aceleran el proceso significativamente porque recibes retroalimentación directa y un diagnóstico personalizado de tu empresa.",
  },
];

/* ─── Single FAQ Item ─── */
function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gnozin-navy/8 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-gnozin-blue"
      >
        <h3
          className="text-base font-semibold text-gnozin-navy sm:text-lg"
          style={{
            fontFamily:
              "var(--font-garamond), 'EB Garamond', Garamond, serif",
          }}
        >
          {question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-gnozin-blue/50 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm leading-relaxed text-gnozin-steel sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main FAQ Section ─── */
export function FAQ({
  faqs = defaultFaqs,
  title = "Preguntas frecuentes",
  subtitle = "Lo que más nos preguntan",
}: {
  faqs?: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-gnozin-cream py-20 sm:py-28">
      <div className="mesh-gradient-cream absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6">
        {/* Section header */}
        <p className="editorial-label mb-4 text-center text-gnozin-blue">
          {subtitle}
        </p>
        <h2
          className="mb-14 text-center text-3xl text-gnozin-navy sm:text-4xl"
          style={{
            fontFamily:
              "var(--font-garamond), 'EB Garamond', Garamond, serif",
            fontStyle: "italic",
          }}
        >
          {title}
        </h2>

        {/* FAQ items */}
        <div className="rounded-2xl border border-gnozin-navy/8 bg-white px-6 shadow-sm sm:px-10">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
