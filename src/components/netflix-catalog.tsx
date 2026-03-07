"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, BookOpen, Mic, Video } from "lucide-react";

/* ─── Visual patterns for cards ─── */
const patterns = [
  // Diagonal stripes
  `repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.03) 8px, rgba(255,255,255,0.03) 16px)`,
  // Concentric circles
  `radial-gradient(circle at 50% 50%, transparent 30%, rgba(255,255,255,0.04) 32%, transparent 34%, transparent 50%, rgba(255,255,255,0.03) 52%, transparent 54%)`,
  // Mesh dots
  `radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`,
  // Cross-hatch
  `repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(255,255,255,0.02) 12px, rgba(255,255,255,0.02) 13px), repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(255,255,255,0.02) 12px, rgba(255,255,255,0.02) 13px)`,
  // Wave arcs
  `radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)`,
  // Spotlight
  `radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
];

const patternSizes = ["auto", "auto", "20px 20px", "auto", "auto", "auto"];

/* ─── Catalog data ─── */
const catalogRows = [
  {
    title: "Temas Fundamentales",
    subtitle: "Las bases del modelo",
    items: [
      {
        title: "¿Qué es la Autoestima Empresarial?",
        subtitle: "Fundamento",
        color: "#0B6ABF",
        accent: "#3B82F6",
        icon: BookOpen,
        href: "/empieza-aqui",
        patternIdx: 0,
      },
      {
        title: "La Triqueta: SER, HACER, TENER",
        subtitle: "Modelo central",
        color: "#0A3D6B",
        accent: "#0EA5E9",
        icon: BookOpen,
        href: "/modelo",
        patternIdx: 1,
      },
      {
        title: "Las 3 Intersecciones",
        subtitle: "Liderazgo · Singularidad · Efectividad",
        color: "#1E3A5F",
        accent: "#38BDF8",
        icon: BookOpen,
        href: "/modelo",
        patternIdx: 2,
      },
      {
        title: "El Centro Convergente",
        subtitle: "Bienestar como indicador",
        color: "#0B6ABF",
        accent: "#60A5FA",
        icon: BookOpen,
        href: "/modelo",
        patternIdx: 3,
      },
      {
        title: "Identidad del Emprendedor",
        subtitle: "El SER como ventaja competitiva",
        color: "#0A3D6B",
        accent: "#7DD3FC",
        icon: BookOpen,
        href: "/empieza-aqui",
        patternIdx: 4,
      },
      {
        title: "Sistemas y Autonomía",
        subtitle: "El HACER sin dependencia",
        color: "#1E3A5F",
        accent: "#0EA5E9",
        icon: BookOpen,
        href: "/empieza-aqui",
        patternIdx: 5,
      },
    ],
  },
  {
    title: "Talleres y Masterclasses",
    subtitle: "Experiencias transformadoras",
    items: [
      {
        title: "Taller: Autoestima Empresarial",
        subtitle: "6 sesiones · 90 min c/u",
        color: "#7C3AED",
        accent: "#A78BFA",
        icon: Video,
        href: "/taller",
        patternIdx: 5,
      },
      {
        title: "Masterclass: Liderazgo PyME",
        subtitle: "Sesión intensiva",
        color: "#6D28D9",
        accent: "#C4B5FD",
        icon: Video,
        href: "/taller",
        patternIdx: 4,
      },
      {
        title: "Workshop: Define tu SER",
        subtitle: "Ejercicio práctico",
        color: "#4C1D95",
        accent: "#8B5CF6",
        icon: Play,
        href: "/taller",
        patternIdx: 3,
      },
      {
        title: "Taller: Sistemas que funcionan",
        subtitle: "El HACER en acción",
        color: "#7C3AED",
        accent: "#DDD6FE",
        icon: Video,
        href: "/taller",
        patternIdx: 2,
      },
      {
        title: "Conferencia: Singularidad",
        subtitle: "Evento abierto",
        color: "#6D28D9",
        accent: "#A78BFA",
        icon: Mic,
        href: "/calendario",
        patternIdx: 1,
      },
      {
        title: "Retiro Ejecutivo",
        subtitle: "Inmersión total · 2 días",
        color: "#4C1D95",
        accent: "#C4B5FD",
        icon: Play,
        href: "/calendario",
        patternIdx: 0,
      },
    ],
  },
  {
    title: "Biblioteca de Contenido",
    subtitle: "Artículos, videos y recursos",
    items: [
      {
        title: "El Libro: Autoestima Empresarial",
        subtitle: "+30 años de experiencia",
        color: "#0F766E",
        accent: "#2DD4BF",
        icon: BookOpen,
        href: "/libro",
        patternIdx: 2,
      },
      {
        title: "Guía: Diagnóstico Empresarial",
        subtitle: "Herramienta práctica",
        color: "#115E59",
        accent: "#5EEAD4",
        icon: BookOpen,
        href: "/biblioteca",
        patternIdx: 0,
      },
      {
        title: "Video: Historia de Gnozin",
        subtitle: "El origen del modelo",
        color: "#0B6ABF",
        accent: "#38BDF8",
        icon: Play,
        href: "/biblioteca",
        patternIdx: 5,
      },
      {
        title: "Artículo: PyME y Supervivencia",
        subtitle: "Análisis profundo",
        color: "#0F766E",
        accent: "#99F6E4",
        icon: BookOpen,
        href: "/biblioteca",
        patternIdx: 1,
      },
      {
        title: "Podcast: Conversaciones",
        subtitle: "Entrevistas con líderes",
        color: "#115E59",
        accent: "#2DD4BF",
        icon: Mic,
        href: "/biblioteca",
        patternIdx: 4,
      },
      {
        title: "Caso de Estudio",
        subtitle: "Transformación real",
        color: "#0B6ABF",
        accent: "#60A5FA",
        icon: BookOpen,
        href: "/biblioteca",
        patternIdx: 3,
      },
    ],
  },
];

/* ─── Scrollable Row ─── */
function CatalogRow({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: (typeof catalogRows)[0]["items"];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="catalog-row">
      {/* Row header */}
      <div className="mb-4 flex items-end justify-between px-5 sm:px-6">
        <div>
          <h3
            className="text-xl font-bold text-white sm:text-2xl"
            style={{
              fontFamily:
                "var(--font-garamond), 'EB Garamond', Garamond, serif",
            }}
          >
            {title}
          </h3>
          <p className="mt-0.5 text-xs tracking-wider text-blue-200/50">
            {subtitle}
          </p>
        </div>
        {/* Desktop scroll arrows */}
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={() => scroll("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-smooth px-5 pb-2 sm:gap-4 sm:px-6"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, idx) => {
          const Icon = item.icon;
          const pattern = patterns[item.patternIdx];
          const patternSize = patternSizes[item.patternIdx];
          return (
            <Link
              key={idx}
              href={item.href}
              className="catalog-card group"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Multi-layer card background */}
              {/* Base gradient */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(160deg, ${item.color} 0%, ${item.color}cc 40%, #071620 100%)`,
                }}
              />

              {/* Decorative accent orb */}
              <div
                className="absolute rounded-full blur-2xl"
                style={{
                  width: "120px",
                  height: "120px",
                  top: "-20px",
                  right: "-20px",
                  background: `radial-gradient(circle, ${item.accent}44, transparent 70%)`,
                }}
              />

              {/* Pattern overlay */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: pattern,
                  backgroundSize: patternSize,
                }}
              />

              {/* Bottom vignette for text readability */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 40%, transparent 60%)",
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-40"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${item.accent}, transparent 70%)`,
                }}
              />

              {/* Decorative corner accent */}
              <div
                className="absolute left-3 top-3 h-8 w-8 rounded-br-xl border-b border-r opacity-20"
                style={{ borderColor: item.accent }}
              />

              {/* Content */}
              <div className="catalog-card-overlay">
                {/* Play/icon badge */}
                <div className="mb-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/15 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <Icon className="h-4 w-4 text-white" />
                </div>

                {/* Title area */}
                <div>
                  <p className="catalog-card-subtitle">{item.subtitle}</p>
                  <h4 className="catalog-card-title">{item.title}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main Netflix Catalog Section ─── */
export function NetflixCatalog() {
  return (
    <section className="relative overflow-hidden bg-[#071620] py-16 sm:py-24">
      {/* Subtle mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-gnozin-blue/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-gnozin-sky/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-5xl px-5 sm:px-6">
          <p className="editorial-label mb-3 text-gnozin-sky">
            Explora el contenido
          </p>
          <h2
            className="text-3xl text-white sm:text-4xl"
            style={{
              fontFamily:
                "var(--font-garamond), 'EB Garamond', Garamond, serif",
              fontStyle: "italic",
            }}
          >
            Tu catálogo de{" "}
            <span className="text-gnozin-sky">transformación</span>
          </h2>
        </div>

        {/* Catalog rows */}
        <div className="mx-auto max-w-7xl space-y-10">
          {catalogRows.map((row) => (
            <CatalogRow
              key={row.title}
              title={row.title}
              subtitle={row.subtitle}
              items={row.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
