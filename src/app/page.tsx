import Link from "next/link";
import { ArrowRight, Target, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TriageQuiz } from "@/components/triage-quiz";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="gnozin-gradient relative overflow-hidden text-white">
        <div className="gnozin-diagonal absolute inset-0 bg-gnozin-navy/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p
              className="mb-4 text-sm font-bold uppercase tracking-[4px] text-gnozin-sky"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
            >
              Autoestima Empresarial
            </p>
            <h1
              className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
            >
              TU EMPRESA ES UN REFLEJO DE TI.
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-blue-100">
              Claridad, identidad y dirección para líderes que sienten que su
              empresa depende demasiado de ellos. +30 años transformando
              PyMEs reales.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
                asChild
              >
                <a href="#diagnostico">
                  Haz tu diagnóstico gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/programa">Conoce el Programa Encaje</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Propositions ── */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            className="mb-12 text-center text-2xl font-bold uppercase tracking-wide text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Por qué Autoestima Empresarial?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Claridad",
                desc: "Descubre qué hace única a tu empresa y deja de competir por precio.",
              },
              {
                icon: Users,
                title: "Delegación",
                desc: "Aprende a soltar el control sin que tu empresa se desmorone.",
              },
              {
                icon: Zap,
                title: "Dirección",
                desc: "Un plan de acción concreto a 90 días — no más incertidumbre.",
              },
              {
                icon: Shield,
                title: "Identidad",
                desc: "Encuentra tu voz como líder, ya seas fundador o heredero.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gnozin-blue/10">
                  <item.icon className="h-6 w-6 text-gnozin-blue" />
                </div>
                <h3
                  className="mb-2 text-lg font-bold text-gnozin-navy"
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
        </div>
      </section>

      {/* ── Triage Quiz ── */}
      <section id="diagnostico" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p
              className="mb-2 text-sm font-bold uppercase tracking-[3px] text-gnozin-blue"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
            >
              Diagnóstico Personalizado
            </p>
            <h2
              className="text-2xl font-bold text-gnozin-navy sm:text-3xl"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
            >
              Descubre tu perfil de líder
            </h2>
          </div>
          <TriageQuiz />
        </div>
      </section>

      {/* ── Social Proof Strip ── */}
      <section className="gnozin-gradient py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { stat: "+30", label: "Años de experiencia" },
              { stat: "+250", label: "Líderes transformados" },
              { stat: "6", label: "Semanas del programa" },
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

      {/* ── Final CTA ── */}
      <section className="bg-gnozin-ice py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2
            className="mb-4 text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Listo para transformar tu liderazgo?
          </h2>
          <p className="mb-8 text-gnozin-steel">
            Agenda una sesión diagnóstica gratuita de 30 minutos con Gnozin
            Navarro y descubre cómo el Programa Encaje puede ayudarte.
          </p>
          <Button
            size="lg"
            className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
            asChild
          >
            <Link href="/contacto">
              Agendar sesión gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
