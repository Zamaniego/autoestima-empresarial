import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Zap,
  Shield,
  AlertTriangle,
  TrendingDown,
  UserX,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TriageQuiz } from "@/components/triage-quiz";

export default function Home() {
  return (
    <>
      {/* ── Hero — Pain-first ── */}
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
              SI TU EMPRESA NO FUNCIONA SIN TI, NO TIENES UNA EMPRESA.
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-blue-100">
              Trabajas 12 horas diarias, tu equipo no toma decisiones sin
              preguntarte, y llevas meses sin poder tomar vacaciones. Eso no es
              liderazgo — es una trampa. Y tiene solución.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
                asChild
              >
                <a href="#diagnostico">
                  Descubre qué te tiene atrapado
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/programa">Ver el Programa Encaje</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain Agitation Section (NEW) ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            className="mb-4 text-center text-2xl font-bold uppercase tracking-wide text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Te suena familiar?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gnozin-steel">
            La mayoría de los líderes PyME viven atrapados en lo que llamamos la
            &ldquo;Ley del Sándwich&rdquo;: presionados por el mercado desde arriba
            y por su equipo desde abajo — sin espacio para pensar, crecer o respirar.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Lock,
                title: "Dependencia total",
                pain: "Tu empresa se paraliza cuando no estás. Cada decisión pasa por ti. No puedes faltar ni un día.",
              },
              {
                icon: TrendingDown,
                title: "Estancamiento",
                pain: "Facturas lo mismo que hace 3 años. Trabajas más pero no ganas más. Compites solo por precio.",
              },
              {
                icon: UserX,
                title: "Equipo sin rumbo",
                pain: "Contratas, capacitas, y se van. O peor: se quedan pero no rinden. No sabes cómo motivarlos.",
              },
              {
                icon: AlertTriangle,
                title: "Identidad perdida",
                pain: "No sabes qué hace especial a tu empresa. Cobras menos de lo que vales. No puedes articular tu valor.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border-2 border-transparent bg-gnozin-cloud p-6 transition-all hover:border-gnozin-blue/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gnozin-navy/10">
                  <item.icon className="h-6 w-6 text-gnozin-navy" />
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
                  {item.pain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agitation Callout ── */}
      <section className="bg-gnozin-navy py-12 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p
            className="text-xl font-bold leading-snug sm:text-2xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            &ldquo;Cada día que pasa sin resolver esto, tu empresa se vuelve
            más frágil, tu equipo más dependiente y tú más agotado.&rdquo;
          </p>
          <p className="mt-4 text-sm text-gnozin-sky">
            — Gnozin Navarro · +30 años transformando líderes PyME
          </p>
        </div>
      </section>

      {/* ── Solution — Value Props ── */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            className="mb-4 text-center text-2xl font-bold uppercase tracking-wide text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Existe otra forma de liderar
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gnozin-steel">
            El Programa Encaje te da las herramientas para romper el ciclo de
            dependencia en 6 semanas — no teoría, sino un plan concreto para
            tu empresa real.
          </p>
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
              Diagnóstico en 2 minutos
            </p>
            <h2
              className="text-2xl font-bold text-gnozin-navy sm:text-3xl"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
            >
              ¿Qué tipo de líder atrapado eres?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gnozin-steel">
              Responde 5 preguntas rápidas y descubre si tu mayor reto es de
              identidad, de equipo o de dirección.
            </p>
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
              { stat: "+250", label: "Líderes que rompieron el ciclo" },
              { stat: "6", label: "Semanas para ver resultados" },
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

      {/* ── Final CTA — Urgency ── */}
      <section className="bg-gnozin-ice py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2
            className="mb-4 text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            No esperes a que la crisis te obligue a cambiar
          </h2>
          <p className="mb-8 text-gnozin-steel">
            Cada semana que pospones esta decisión es otra semana de
            estancamiento. Agenda una sesión diagnóstica gratuita de 30 minutos
            con Gnozin Navarro — sin compromiso, sin presión, solo claridad.
          </p>
          <Button
            size="lg"
            className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
            asChild
          >
            <Link href="/contacto">
              Quiero mi sesión gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
