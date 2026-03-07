import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Target,
  Compass,
  CircleDot,
  BookOpen,
  GraduationCap,
  Calendar,
  ChevronRight,
  Play,
} from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { NetflixCatalog } from "@/components/netflix-catalog";
import { FAQ } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* ── Netflix-style Catalog (second section) ── */}
      <NetflixCatalog />

      {/* ── La Triqueta: SER, HACER, TENER ── */}
      <section className="relative overflow-hidden bg-gnozin-cream py-20 sm:py-28">
        {/* Subtle mesh gradient */}
        <div className="mesh-gradient-cream absolute inset-0" />
        <div className="dot-pattern absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
          <ScrollReveal direction="up">
            <p className="editorial-label mb-4 text-center text-gnozin-blue">
              El modelo Triqueta
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="editorial-headline mb-5 text-center text-3xl text-gnozin-navy sm:text-4xl lg:text-5xl">
              Tres esferas que definen{" "}
              <span className="text-gnozin-blue">tu empresa</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gnozin-steel">
              Toda empresa es un reflejo de quien la dirige. La Autoestima
              Empresarial mide el equilibrio entre tres dimensiones
              fundamentales.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Compass,
                sphere: "SER",
                subtitle: "Identidad y propósito",
                desc: "¿Quién eres sin tu empresa? Tu historia, valores y visión del mundo como ventaja competitiva real.",
                color: "#0B6ABF",
              },
              {
                icon: Target,
                sphere: "HACER",
                subtitle: "Operación y sistemas",
                desc: "¿Tu empresa funciona sin ti? Sistemas, procesos y equipo que operan con autonomía.",
                color: "#0A3D6B",
              },
              {
                icon: Shield,
                sphere: "TENER",
                subtitle: "Resultados económicos",
                desc: "Ingresos, utilidad, patrimonio. Resultados como consecuencia del SER y el HACER alineados.",
                color: "#3A4A5A",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.sphere} direction="up" delay={0.15 + i * 0.12}>
                <div className="card-hover group relative overflow-hidden rounded-2xl border border-gnozin-navy/8 bg-white p-8 text-center shadow-sm">
                  <div className="relative z-10">
                    <div
                      className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${s.color}10` }}
                    >
                      <s.icon className="h-7 w-7" style={{ color: s.color }} />
                    </div>
                    <p
                      className="editorial-label mb-2"
                      style={{ color: s.color, fontSize: "0.65rem" }}
                    >
                      {s.subtitle}
                    </p>
                    <h3 className="editorial-headline mb-4 text-3xl text-gnozin-navy">
                      {s.sphere}
                    </h3>
                    <p className="text-sm leading-relaxed text-gnozin-steel">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tesis central callout — Peterson dark editorial ── */}
      <section className="grain-overlay relative overflow-hidden bg-gnozin-dark py-20 text-white sm:py-28">
        {/* Subtle gradient mesh */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gnozin-blue/10 blur-[140px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-gnozin-sky/8 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6">
          <ScrollReveal direction="none">
            <div className="relative text-center">
              {/* Large decorative quote mark */}
              <div
                className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 text-[140px] font-black leading-none text-white/[0.04] sm:text-[200px]"
                style={{ fontFamily: "var(--font-serif), Playfair Display, serif" }}
              >
                &ldquo;
              </div>

              <p className="editorial-label mb-6 text-gnozin-sky">
                Tesis central
              </p>

              <p className="editorial-headline relative text-2xl text-white text-glow sm:text-3xl lg:text-4xl">
                La autoestima empresarial no es motivación — es un
                sistema de regulación. Cuando las tres esferas se alinean, el
                emprendedor deja de sobrevivir y empieza a construir desde su
                singularidad.
              </p>

              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gnozin-sky/40" />
                <p className="editorial-label text-gnozin-sky/70" style={{ fontSize: "0.65rem" }}>
                  Gnozin Navarro
                </p>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gnozin-sky/40" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Las Intersecciones — warm cream ── */}
      <section className="relative overflow-hidden bg-gnozin-cream py-20 sm:py-28">
        <div className="mesh-gradient-cream absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
          <ScrollReveal direction="up">
            <p className="editorial-label mb-4 text-center text-gnozin-blue">
              Las intersecciones
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="editorial-headline mb-5 text-center text-3xl text-gnozin-navy sm:text-4xl">
              Donde las esferas se potencian
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gnozin-steel">
              Cuando dos esferas se alinean, emergen capacidades superiores.
              Cuando las tres convergen, nace el bienestar.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Liderazgo",
                between: "SER × HACER",
                desc: "Un líder con identidad clara y operación funcional genera equipos autónomos que ejecutan con propósito.",
              },
              {
                title: "Singularidad",
                between: "SER × TENER",
                desc: "Cuando tu identidad se traduce en valor económico, dejas de competir por precio y construyes una posición única.",
              },
              {
                title: "Efectividad",
                between: "HACER × TENER",
                desc: "Una operación que produce resultados predecibles y escalables. Sistemas que convierten esfuerzo en patrimonio.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={0.1 + i * 0.12}>
                <div className="card-hover group relative overflow-hidden rounded-2xl border border-gnozin-navy/8 bg-white p-8">
                  {/* Top accent line */}
                  <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-gnozin-blue via-gnozin-sky to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <p className="editorial-label mb-2 text-gnozin-blue" style={{ fontSize: "0.65rem" }}>
                    {item.between}
                  </p>
                  <h3 className="editorial-headline mb-4 text-2xl text-gnozin-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gnozin-steel">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Center convergent — elevated */}
          <ScrollReveal direction="none" delay={0.3}>
            <div className="relative mt-12 overflow-hidden rounded-2xl border border-gnozin-navy/10 bg-white p-10 text-center shadow-sm sm:p-14">
              <div className="relative z-10">
                <div className="pulse-ring relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gnozin-blue/8">
                  <CircleDot className="h-7 w-7 text-gnozin-blue" />
                </div>
                <p className="editorial-label mb-3 text-gnozin-blue" style={{ fontSize: "0.65rem" }}>
                  Centro convergente
                </p>
                <h3 className="editorial-headline mb-5 text-4xl text-gnozin-navy sm:text-5xl">
                  Bienestar
                </h3>
                <p className="mx-auto max-w-lg text-gnozin-steel">
                  Cuando SER, HACER y TENER se alinean, el emprendedor opera
                  desde un estado de equilibrio — no de supervivencia. El
                  bienestar no es un lujo; es el indicador de que el sistema
                  funciona.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Gnozin Navarro – Peterson-style dark section ── */}
      <section className="grain-overlay relative overflow-hidden bg-gnozin-dark py-20 text-white sm:py-28">
        {/* Subtle glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-gnozin-sky/8 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <p className="editorial-label mb-4 text-gnozin-sky">
                  El autor del modelo
                </p>
                <h2 className="editorial-headline mb-6 text-3xl text-white sm:text-4xl lg:text-5xl">
                  ¿Quién es{" "}
                  <span className="text-glow text-gnozin-sky">Gnozin Navarro?</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.15}>
                <p className="mb-4 text-lg leading-relaxed text-blue-200/80">
                  Gnozin no llegó al mundo de la consultoría desde un corporativo.
                  Creció rodeado de empresas PyME — viendo de cerca cómo el dueño
                  del taller, el médico con consultorio o el restaurantero se
                  desgastaban, convencidos de que así debían ser las cosas.
                </p>
                <p className="mb-10 text-lg leading-relaxed text-blue-200/80">
                  +30 años acompañando a más de 250 líderes de empresas PyME a
                  redescubrir su identidad y construir empresas que funcionen
                  sin depender exclusivamente de ellos.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.25}>
                <Link
                  href="/quien-es-gnozin"
                  className="editorial-cta text-gnozin-sky"
                >
                  Conoce su historia
                </Link>
              </ScrollReveal>
            </div>

            <div className="hidden lg:col-span-5 lg:flex lg:justify-center">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  {/* Glow behind */}
                  <div className="absolute -inset-12 rounded-full bg-gnozin-sky/8 blur-[80px]" />
                  <Image
                    src="/images/gnozin-hero.png"
                    alt="Gnozin Navarro — Mentor de líderes PyME"
                    width={320}
                    height={600}
                    className="relative z-10 h-auto max-h-[460px] w-auto object-contain drop-shadow-2xl"
                  />
                  {/* Decorative ring */}
                  <div className="absolute -bottom-6 -right-6 h-52 w-52 rounded-full border border-white/5" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip — Peterson stat dividers ── */}
      <section className="relative overflow-hidden bg-gnozin-navy py-16 text-white sm:py-20">
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6">
          <div className="grid grid-cols-3">
            {[
              { stat: "+30", label: "Años de experiencia" },
              { stat: "+250", label: "Líderes acompañados" },
              { stat: "3+3+1", label: "El modelo" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 0.15}>
                <div className={`stat-divider text-center px-4 py-2`}>
                  <p
                    className="text-4xl font-black text-white sm:text-5xl lg:text-6xl"
                    style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                  >
                    {s.stat}
                  </p>
                  <p className="mt-2 text-xs tracking-wider text-blue-200/60 sm:text-sm">
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rutas de entrada — warm cream, editorial CTAs ── */}
      <section className="relative overflow-hidden bg-gnozin-cream py-20 sm:py-28">
        <div className="mesh-gradient-cream absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
          <ScrollReveal direction="up">
            <p className="editorial-label mb-4 text-center text-gnozin-blue">
              Tu siguiente paso
            </p>
            <h2 className="editorial-headline mb-16 text-center text-3xl text-gnozin-navy sm:text-4xl">
              ¿Por dónde empezar?
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: "Entiende el modelo",
                desc: "Explora la Triqueta, las esferas y cómo se aplica a tu empresa.",
                href: "/empieza-aqui",
                cta: "Empieza Aquí",
              },
              {
                icon: GraduationCap,
                title: "Toma el taller",
                desc: "6 sesiones de 90 min para aplicar el modelo a tu empresa real.",
                href: "/taller",
                cta: "Ver el Taller",
              },
              {
                icon: BookOpen,
                title: "Lee el libro",
                desc: "+30 años de experiencia condensados en un libro práctico y directo.",
                href: "/libro",
                cta: "Conoce el Libro",
              },
              {
                icon: Calendar,
                title: "Asiste a un evento",
                desc: "Conferencias, talleres y masterclasses abiertas al público.",
                href: "/calendario",
                cta: "Ver Calendario",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={0.08 + i * 0.1}>
                <div className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-gnozin-navy/8 bg-white p-7 shadow-sm">
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gnozin-blue/8 transition-transform duration-500 group-hover:scale-110">
                    <item.icon className="h-6 w-6 text-gnozin-blue" />
                  </div>
                  <h3
                    className="mb-2 text-lg font-bold text-gnozin-navy"
                    style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mb-8 flex-1 text-sm leading-relaxed text-gnozin-steel">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="editorial-cta text-gnozin-blue"
                  >
                    {item.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Newsletter ── */}
      <Newsletter />
    </>
  );
}
