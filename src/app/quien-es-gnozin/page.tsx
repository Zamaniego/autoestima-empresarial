import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Briefcase,
  Heart,
  MapPin,
  Quote,
  Calendar,
  BookOpen,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "¿Quién es Gnozin? — Autoestima Empresarial",
  description:
    "Conoce a Gnozin Navarro: mentor de líderes PyME con +30 años de experiencia. Su historia, su misión y por qué dedica su vida a transformar empresas familiares.",
};

const milestones = [
  {
    period: "Primeros Años",
    title: "La semilla del liderazgo",
    desc: "Creció en el ecosistema PyME de Culiacán, observando de cerca los retos que enfrentan las empresas familiares. Esa cercanía le dio algo que no se aprende en ninguna universidad: empatía real por el empresario.",
  },
  {
    period: "+30 Años",
    title: "Consultoría y mentoría",
    desc: "Ha trabajado con más de 250 líderes de empresas PyME — restauranteros, constructores, médicos con clínica, comerciantes, y especialmente líderes de segunda generación que heredaron un negocio y necesitan hacerlo suyo.",
  },
  {
    period: "Hoy",
    title: "Autoestima Empresarial",
    desc: "Creó el Taller de Autoestima Empresarial y el modelo de la Triqueta — un marco antropológico que ayuda al líder a reconocer su singularidad, cobrar lo que vale y dirigir con claridad.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Empatía real",
    desc: "No da consejos desde una torre de marfil. Conoce el taller, la cocina, el consultorio. Habla el idioma del empresario.",
  },
  {
    icon: Award,
    title: "Resultados, no teoría",
    desc: "Cada herramienta que enseña fue probada con empresas reales. Si no funciona en la práctica, no la recomienda.",
  },
  {
    icon: Briefcase,
    title: "Compromiso con la PyME",
    desc: "Su misión es clara: que el líder PyME mexicano deje de sobrevivir y empiece a dirigir con confianza.",
  },
];

export default function QuienEsGnozinPage() {
  return (
    <>
      {/* Hero with photo */}
      <section className="gnozin-gradient relative overflow-hidden py-20 text-white sm:py-28">
        <div className="gnozin-diagonal absolute inset-0 bg-gnozin-navy/20" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Badge className="mb-4 bg-white/20 text-white">
                <MapPin className="mr-1 h-3 w-3" />
                Culiacán, Sinaloa
              </Badge>
              <h1
                className="mb-4 text-3xl font-black uppercase sm:text-5xl"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                ¿Quién es Gnozin Navarro?
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-blue-100">
                Mentor de líderes PyME, autor de Autoestima Empresarial, y la
                persona que lleva +30 años ayudando a empresarios a dejar de
                sobrevivir y empezar a dirigir.
              </p>
            </div>
            <div className="hidden lg:col-span-2 lg:flex lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/gnozin-hero.png"
                  alt="Gnozin Navarro — Mentor de líderes PyME"
                  width={420}
                  height={780}
                  className="relative z-10 h-auto max-h-[520px] w-auto object-contain drop-shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            className="mb-6 text-2xl font-bold uppercase text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Su Historia
          </h2>
          <div className="space-y-4 text-gnozin-steel leading-relaxed">
            <p>
              Gnozin no llegó al mundo de la consultoría desde un corporativo o
              una escuela de negocios. Creció rodeado de empresas PyME — viendo
              de cerca cómo el dueño del taller, el médico con consultorio o el
              restaurantero se desgastaban trabajando hasta las 10 de la noche,
              convencidos de que así debían ser las cosas.
            </p>
            <p>
              Con el tiempo, Gnozin identificó un patrón que se repetía en
              cada empresa que visitaba: el problema no era de dinero, ni de
              mercado, ni de competencia.{" "}
              <strong className="text-gnozin-navy">
                El problema era que el líder no sabía lo que valía.
              </strong>
            </p>
            <p>
              Esa observación se convirtió en su misión de vida. Hoy,
              Gnozin ha acompañado a más de 250 líderes de empresas PyME a
              redescubrir su identidad, dejar de competir por precio y
              construir empresas que funcionen sin depender exclusivamente de
              ellos.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gnozin-ice py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Quote className="mx-auto mb-4 h-10 w-10 text-gnozin-blue/30" aria-hidden="true" />
          <blockquote
            className="text-xl font-bold italic leading-relaxed text-gnozin-navy sm:text-2xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            &ldquo;Yo no le digo a nadie qué hacer. Le ayudo a descubrir lo
            que ya sabe pero no puede ver.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gnozin-blue">
            — Gnozin Navarro
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            className="mb-10 text-center text-2xl font-bold uppercase text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Su Trayectoria
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.period} className="relative pb-10 last:pb-0">
                {i < milestones.length - 1 && (
                  <div
                    className="absolute left-4 top-12 h-full w-0.5 bg-gnozin-blue/15 sm:left-[72px]"
                    aria-hidden="true"
                  />
                )}
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                  <div className="shrink-0 sm:w-[120px]">
                    <p
                      className="text-sm font-bold uppercase tracking-widest text-gnozin-blue"
                      style={{
                        fontFamily: "var(--font-heading), Montserrat, sans-serif",
                      }}
                    >
                      {m.period}
                    </p>
                  </div>
                  <div className="flex-1 rounded-lg bg-gnozin-cloud p-5">
                    <h3
                      className="mb-2 text-lg font-bold text-gnozin-navy"
                      style={{
                        fontFamily: "var(--font-heading), Montserrat, sans-serif",
                      }}
                    >
                      {m.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gnozin-steel">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            className="mb-10 text-center text-2xl font-bold uppercase text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Lo que lo distingue
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gnozin-blue/10">
                  <v.icon className="h-6 w-6 text-gnozin-blue" aria-hidden="true" />
                </div>
                <h3
                  className="mb-2 text-lg font-bold text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-gnozin-steel">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gnozin-gradient py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { stat: "+30", label: "Años de experiencia" },
              { stat: "+250", label: "Líderes transformados" },
              { stat: "1", label: "Misión: la PyME mexicana" },
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

      {/* CTA */}
      <section className="bg-gnozin-ice py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2
            className="mb-4 text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Listo para platicar con Gnozin?
          </h2>
          <p className="mb-8 text-gnozin-steel">
            Conoce el Taller de Autoestima Empresarial — una experiencia
            presencial donde el modelo cobra vida. O explora el libro que
            condensa +30 años de acompañamiento PyME.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
              asChild
            >
              <Link href="/taller">
                <Calendar className="mr-2 h-4 w-4" />
                Conocer el Taller
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gnozin-navy/30 text-gnozin-navy hover:bg-gnozin-navy hover:text-white"
              asChild
            >
              <Link href="/libro">
                <BookOpen className="mr-2 h-4 w-4" />
                Conocer el libro
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Poka-yoke: Next step */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gnozin-blue">
            Siguiente paso recomendado
          </p>
          <p className="mt-2 text-gnozin-steel">
            Si aún no sabes por dónde empezar, tenemos una ruta paso a paso
            diseñada para ti.
          </p>
          <Button
            className="mt-4 bg-gnozin-blue text-white hover:bg-gnozin-navy"
            asChild
          >
            <Link href="/empieza-aqui">
              Ver la guía &quot;Empieza Aquí&quot;
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
