"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, BookOpen, Mic, Video } from "lucide-react";

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
        icon: BookOpen,
        href: "/empieza-aqui",
      },
      {
        title: "La Triqueta: SER, HACER, TENER",
        subtitle: "Modelo central",
        color: "#0A3D6B",
        icon: BookOpen,
        href: "/modelo",
      },
      {
        title: "Las 3 Intersecciones",
        subtitle: "Liderazgo · Singularidad · Efectividad",
        color: "#3A4A5A",
        icon: BookOpen,
        href: "/modelo",
      },
      {
        title: "El Centro Convergente",
        subtitle: "Bienestar como indicador",
        color: "#0B6ABF",
        icon: BookOpen,
        href: "/modelo",
      },
      {
        title: "Identidad del Emprendedor",
        subtitle: "El SER como ventaja competitiva",
        color: "#0A3D6B",
        icon: BookOpen,
        href: "/empieza-aqui",
      },
      {
        title: "Sistemas y Autonomía",
        subtitle: "El HACER sin dependencia",
        color: "#3A4A5A",
        icon: BookOpen,
        href: "/empieza-aqui",
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
        color: "#0B6ABF",
        icon: Video,
        href: "/taller",
      },
      {
        title: "Masterclass: Liderazgo PyME",
        subtitle: "Sesión intensiva",
        color: "#0A3D6B",
        icon: Video,
        href: "/taller",
      },
      {
        title: "Workshop: Define tu SER",
        subtitle: "Ejercicio práctico",
        color: "#3A4A5A",
        icon: Play,
        href: "/taller",
      },
      {
        title: "Taller: Sistemas que funcionan",
        subtitle: "El HACER en acción",
        color: "#0B6ABF",
        icon: Video,
        href: "/taller",
      },
      {
        title: "Conferencia: Singularidad",
        subtitle: "Evento abierto",
        color: "#0A3D6B",
        icon: Mic,
        href: "/calendario",
      },
      {
        title: "Retiro Ejecutivo",
        subtitle: "Inmersión total · 2 días",
        color: "#3A4A5A",
        icon: Play,
        href: "/calendario",
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
        color: "#0A3D6B",
        icon: BookOpen,
        href: "/libro",
      },
      {
        title: "Guía: Diagnóstico Empresarial",
        subtitle: "Herramienta práctica",
        color: "#3A4A5A",
        icon: BookOpen,
        href: "/biblioteca",
      },
      {
        title: "Video: Historia de Gnozin",
        subtitle: "El origen del modelo",
        color: "#0B6ABF",
        icon: Play,
        href: "/biblioteca",
      },
      {
        title: "Artículo: PyME y Supervivencia",
        subtitle: "Análisis profundo",
        color: "#0A3D6B",
        icon: BookOpen,
        href: "/biblioteca",
      },
      {
        title: "Podcast: Conversaciones",
        subtitle: "Entrevistas con líderes",
        color: "#3A4A5A",
        icon: Mic,
        href: "/biblioteca",
      },
      {
        title: "Caso de Estudio",
        subtitle: "Transformación real",
        color: "#0B6ABF",
        icon: BookOpen,
        href: "/biblioteca",
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
          return (
            <Link
              key={idx}
              href={item.href}
              className="catalog-card group"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Card background gradient */}
              <div
                className="absolute inset-0 rounded-xl opacity-90 transition-opacity group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${item.color}dd 0%, ${item.color}88 50%, #071620 100%)`,
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${item.color}, transparent 70%)`,
                }}
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
