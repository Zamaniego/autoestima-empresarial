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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/hero-carousel";
export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* ── La Triqueta: SER, HACER, TENER ── */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p
            className="mb-2 text-center text-sm font-bold uppercase tracking-[3px] text-gnozin-blue"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            El modelo Triqueta
          </p>
          <h2
            className="mb-4 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Tres esferas que definen tu empresa
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gnozin-steel">
            Toda empresa es un reflejo de quien la dirige. La Autoestima
            Empresarial mide el equilibrio entre tres dimensiones
            fundamentales.
          </p>
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
            ].map((s) => (
              <div
                key={s.sphere}
                className="rounded-xl border border-gnozin-blue/15 bg-white p-6 text-center shadow-sm"
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${s.color}15` }}
                >
                  <s.icon className="h-7 w-7" style={{ color: s.color }} />
                </div>
                <p
                  className="mb-1 text-xs font-bold uppercase tracking-[2px]"
                  style={{
                    color: s.color,
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {s.subtitle}
                </p>
                <h3
                  className="mb-3 text-2xl font-black text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {s.sphere}
                </h3>
                <p className="text-sm leading-relaxed text-gnozin-steel">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tesis central callout ── */}
      <section className="bg-gnozin-navy py-12 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p
            className="text-xl font-bold leading-snug sm:text-2xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            &ldquo;La autoestima empresarial no es motivación — es un
            sistema de regulación. Cuando las tres esferas se alinean, el
            emprendedor deja de sobrevivir y empieza a construir desde su
            singularidad.&rdquo;
          </p>
          <p className="mt-4 text-sm text-gnozin-sky">
            — Gnozin Navarro · Autor del modelo
          </p>
        </div>
      </section>

      {/* ── Las Intersecciones ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p
            className="mb-2 text-center text-sm font-bold uppercase tracking-[3px] text-gnozin-blue"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Las intersecciones
          </p>
          <h2
            className="mb-4 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Donde las esferas se potencian
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gnozin-steel">
            Cuando dos esferas se alinean, emergen capacidades superiores.
            Cuando las tres convergen, nace el bienestar.
          </p>
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
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gnozin-blue/15 bg-gnozin-cloud p-6"
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-[2px] text-gnozin-blue">
                  {item.between}
                </p>
                <h3
                  className="mb-3 text-xl font-bold text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gnozin-steel">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center convergent */}
          <div className="mt-8 rounded-2xl border-2 border-gnozin-blue/20 bg-gnozin-ice/30 p-8 text-center">
            <CircleDot className="mx-auto mb-3 h-10 w-10 text-gnozin-blue" />
            <p className="mb-1 text-xs font-bold uppercase tracking-[2px] text-gnozin-blue">
              Centro convergente
            </p>
            <h3
              className="mb-3 text-2xl font-black text-gnozin-navy"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
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
      </section>

      {/* ── Gnozin Navarro – preview card ── */}
      <section className="gnozin-gradient py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p
                className="mb-2 text-sm font-bold uppercase tracking-[3px] text-gnozin-sky"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                El autor del modelo
              </p>
              <h2
                className="mb-4 text-2xl font-black uppercase sm:text-3xl"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                ¿Quién es Gnozin Navarro?
              </h2>
              <p className="mb-3 leading-relaxed text-blue-100">
                Gnozin no llegó al mundo de la consultoría desde un corporativo.
                Creció rodeado de empresas PyME — viendo de cerca cómo el dueño
                del taller, el médico con consultorio o el restaurantero se
                desgastaban, convencidos de que así debían ser las cosas.
              </p>
              <p className="mb-6 leading-relaxed text-blue-100">
                +30 años acompañando a más de 250 líderes de empresas PyME a
                redescubrir su identidad y construir empresas que funcionen
                sin depender exclusivamente de ellos.
              </p>
              <Button
                className="bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
                asChild
              >
                <Link href="/quien-es-gnozin">
                  Conoce su historia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:col-span-2 lg:flex lg:justify-center">
              <div className="relative">
                <Image
                  src="/images/gnozin-hero.png"
                  alt="Gnozin Navarro — Mentor de líderes PyME"
                  width={280}
                  height={520}
                  className="h-auto max-h-[400px] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ── */}
      <section className="bg-gnozin-navy py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { stat: "+30", label: "Años de experiencia con emprendedores" },
              { stat: "+250", label: "Emprendedores acompañados" },
              { stat: "3+3+1", label: "Esferas, intersecciones y centro" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-4xl font-black"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {s.stat}
                </p>
                <p className="mt-1 text-sm text-blue-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rutas de entrada ── */}
      <section className="bg-gnozin-ice py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2
            className="mb-10 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Por dónde empezar?
          </h2>
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
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-gnozin-blue/15 bg-white p-6 shadow-sm"
              >
                <item.icon className="mb-4 h-8 w-8 text-gnozin-blue" />
                <h3
                  className="mb-2 text-lg font-bold text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gnozin-steel">
                  {item.desc}
                </p>
                <Button
                  className="w-full bg-gnozin-blue text-white hover:bg-gnozin-navy"
                  asChild
                >
                  <Link href={item.href}>
                    {item.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
