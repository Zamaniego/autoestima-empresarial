import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Target,
  Compass,
  CircleDot,
  BookOpen,
  GraduationCap,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/hero-carousel";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* ── La Triqueta: SER, HACER, TENER ── */}
      <section className="dot-pattern relative overflow-hidden bg-gnozin-cloud py-20 sm:py-28">
        {/* Decorative floating accent */}
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-gnozin-blue/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-20 h-48 w-48 rounded-full bg-gnozin-sky/8 blur-2xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal direction="up">
            <p
              className="mb-2 text-center text-sm font-bold uppercase tracking-[4px] text-gnozin-blue"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
              El modelo Triqueta
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2
              className="mb-4 text-center text-3xl font-black text-gnozin-navy sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
              Tres esferas que definen
              <br />
              <span className="text-gnozin-blue">tu empresa</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed text-gnozin-steel">
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
                accent: "from-blue-500/10 to-transparent",
              },
              {
                icon: Target,
                sphere: "HACER",
                subtitle: "Operación y sistemas",
                desc: "¿Tu empresa funciona sin ti? Sistemas, procesos y equipo que operan con autonomía.",
                color: "#0A3D6B",
                accent: "from-indigo-500/10 to-transparent",
              },
              {
                icon: Shield,
                sphere: "TENER",
                subtitle: "Resultados económicos",
                desc: "Ingresos, utilidad, patrimonio. Resultados como consecuencia del SER y el HACER alineados.",
                color: "#3A4A5A",
                accent: "from-slate-500/10 to-transparent",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.sphere} direction="up" delay={0.15 + i * 0.12}>
                <div className="card-hover group relative overflow-hidden rounded-2xl border border-gnozin-blue/10 bg-white p-7 text-center shadow-sm">
                  {/* Hover gradient reveal */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${s.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="relative z-10">
                    <div
                      className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${s.color}12` }}
                    >
                      <s.icon className="h-8 w-8 transition-colors duration-300" style={{ color: s.color }} />
                    </div>
                    <p
                      className="mb-1 text-xs font-bold uppercase tracking-[3px]"
                      style={{
                        color: s.color,
                        fontFamily: "var(--font-heading), Montserrat, sans-serif",
                      }}
                    >
                      {s.subtitle}
                    </p>
                    <h3
                      className="mb-3 text-3xl font-black text-gnozin-navy"
                      style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                    >
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

      {/* ── Tesis central callout ── */}
      <section className="grain-overlay relative overflow-hidden bg-gnozin-navy py-16 text-white sm:py-24">
        {/* Gradient mesh effect */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gnozin-blue/15 blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-gnozin-sky/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
          <ScrollReveal direction="none">
            <div className="relative">
              {/* Large decorative quote mark */}
              <div
                className="pointer-events-none absolute -left-4 -top-10 text-[120px] font-black leading-none text-white/5 sm:-left-8 sm:-top-14 sm:text-[180px]"
                style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
              >
                &ldquo;
              </div>
              <p
                className="relative text-xl font-bold leading-snug text-glow sm:text-2xl lg:text-3xl lg:leading-snug"
                style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
              >
                La autoestima empresarial no es motivación — es un
                sistema de regulación. Cuando las tres esferas se alinean, el
                emprendedor deja de sobrevivir y empieza a construir desde su
                singularidad.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-gnozin-sky/40 to-transparent" />
                <p className="text-sm font-bold tracking-wider text-gnozin-sky">
                  — Gnozin Navarro
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Las Intersecciones ── */}
      <section className="mesh-gradient-blue relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal direction="up">
            <p
              className="mb-2 text-center text-sm font-bold uppercase tracking-[4px] text-gnozin-blue"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
              Las intersecciones
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2
              className="mb-4 text-center text-3xl font-black text-gnozin-navy sm:text-4xl"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
              Donde las esferas se potencian
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed text-gnozin-steel">
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
                <div className="card-hover group relative overflow-hidden rounded-2xl border border-gnozin-blue/10 bg-gnozin-cloud p-7">
                  {/* Top accent line */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-gnozin-blue via-gnozin-sky to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <p className="mb-1 text-xs font-bold uppercase tracking-[3px] text-gnozin-blue">
                    {item.between}
                  </p>
                  <h3
                    className="mb-3 text-xl font-bold text-gnozin-navy transition-colors duration-300 group-hover:text-gnozin-blue"
                    style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gnozin-steel">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Center convergent — elevated design */}
          <ScrollReveal direction="none" delay={0.3}>
            <div className="relative mt-10 overflow-hidden rounded-3xl border-2 border-gnozin-blue/15 p-10 text-center sm:p-12">
              {/* Background mesh */}
              <div className="absolute inset-0 bg-gradient-to-br from-gnozin-ice via-white to-gnozin-ice" />
              <div className="pointer-events-none absolute inset-0 dot-pattern" />

              <div className="relative z-10">
                <div className="pulse-ring relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gnozin-blue/10">
                  <CircleDot className="h-8 w-8 text-gnozin-blue" />
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[4px] text-gnozin-blue">
                  Centro convergente
                </p>
                <h3
                  className="mb-4 text-4xl font-black text-gnozin-navy sm:text-5xl"
                  style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                >
                  BIENESTAR
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

      {/* ── Gnozin Navarro – preview card ── */}
      <section className="gnozin-gradient grain-overlay relative overflow-hidden py-20 text-white sm:py-28">
        {/* Mesh glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-gnozin-sky/12 blur-[140px]" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <p
                  className="mb-3 text-sm font-bold uppercase tracking-[4px] text-gnozin-sky"
                  style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                >
                  El autor del modelo
                </p>
                <h2
                  className="mb-5 text-3xl font-black uppercase sm:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                >
                  ¿Quién es
                  <br />
                  <span className="text-glow">Gnozin Navarro?</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.15}>
                <p className="mb-3 text-lg leading-relaxed text-blue-100">
                  Gnozin no llegó al mundo de la consultoría desde un corporativo.
                  Creció rodeado de empresas PyME — viendo de cerca cómo el dueño
                  del taller, el médico con consultorio o el restaurantero se
                  desgastaban, convencidos de que así debían ser las cosas.
                </p>
                <p className="mb-8 text-lg leading-relaxed text-blue-100">
                  +30 años acompañando a más de 250 líderes de empresas PyME a
                  redescubrir su identidad y construir empresas que funcionen
                  sin depender exclusivamente de ellos.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.25}>
                <Button
                  size="lg"
                  className="bg-white font-bold text-gnozin-navy shadow-lg shadow-black/20 transition-all duration-300 hover:bg-gnozin-ice hover:shadow-xl hover:shadow-black/30"
                  asChild
                >
                  <Link href="/quien-es-gnozin">
                    Conoce su historia
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>

            <div className="hidden lg:col-span-5 lg:flex lg:justify-center">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  {/* Glow behind */}
                  <div className="absolute -inset-12 rounded-full bg-gnozin-sky/10 blur-3xl" />
                  <Image
                    src="/images/gnozin-hero.png"
                    alt="Gnozin Navarro — Mentor de líderes PyME"
                    width={320}
                    height={600}
                    className="relative z-10 h-auto max-h-[460px] w-auto object-contain drop-shadow-2xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 h-52 w-52 rounded-full border-2 border-white/8" />
                  <div className="absolute -top-4 -left-4 h-28 w-28 rounded-full border border-gnozin-sky/15" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ── */}
      <section className="relative overflow-hidden bg-gnozin-navy py-16 text-white sm:py-20">
        {/* Stripe texture */}
        <div className="stripe-accent absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { stat: "+30", label: "Años de experiencia con emprendedores" },
              { stat: "+250", label: "Emprendedores acompañados" },
              { stat: "3+3+1", label: "Esferas, intersecciones y centro" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 0.15}>
                <div className="group">
                  <p
                    className="text-5xl font-black text-glow transition-transform duration-500 group-hover:scale-110 sm:text-6xl"
                    style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                  >
                    {s.stat}
                  </p>
                  <p className="mt-2 text-sm text-blue-200">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rutas de entrada ── */}
      <section className="mesh-gradient-ice relative overflow-hidden py-20 sm:py-28">
        {/* Decorative floating sphere */}
        <div className="pointer-events-none absolute right-10 top-20 h-40 w-40 rounded-full bg-gnozin-blue/5 blur-2xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="mb-3 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-gnozin-sky" />
              <p
                className="text-sm font-bold uppercase tracking-[4px] text-gnozin-blue"
                style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
              >
                Tu siguiente paso
              </p>
            </div>
            <h2
              className="mb-14 text-center text-3xl font-black text-gnozin-navy sm:text-4xl"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
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
                <div className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-gnozin-blue/10 bg-white p-7 shadow-sm">
                  {/* Icon with hover rotation */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gnozin-blue/8 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-gnozin-blue/15">
                    <item.icon className="h-7 w-7 text-gnozin-blue" />
                  </div>
                  <h3
                    className="mb-2 text-lg font-bold text-gnozin-navy"
                    style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mb-7 flex-1 text-sm leading-relaxed text-gnozin-steel">
                    {item.desc}
                  </p>
                  <Button
                    className="w-full bg-gnozin-blue text-white shadow-sm transition-all duration-300 hover:bg-gnozin-navy hover:shadow-md"
                    asChild
                  >
                    <Link href={item.href}>
                      {item.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
