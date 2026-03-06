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
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TriageQuiz } from "@/components/triage-quiz";
import { AnimatedHeadlines } from "@/components/animated-headlines";
import { PersonaSelector } from "@/components/persona-selector";
import { LeadMagnet } from "@/components/lead-magnet";
import { TransformationStories } from "@/components/transformation-stories";
import { MethodologyVisual } from "@/components/methodology-visual";

export default function Home() {
  return (
    <>
      {/* ── Hero — Animated Headlines ── */}
      <section className="gnozin-gradient relative overflow-hidden text-white">
        <div className="gnozin-diagonal absolute inset-0 bg-gnozin-navy/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-sm font-bold uppercase tracking-[4px] text-gnozin-sky"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
            >
              Autoestima Empresarial
            </p>

            <AnimatedHeadlines />

            <p className="mt-8 mb-10 max-w-lg text-lg leading-relaxed text-blue-100">
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

      {/* ── Persona Selector — ¿Quién eres? ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p
            className="mb-2 text-center text-sm font-bold uppercase tracking-[3px] text-gnozin-blue"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Cuál es tu situación?
          </p>
          <h2
            className="mb-4 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            No todos los líderes están atrapados por las mismas razones
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gnozin-steel">
            Selecciona tu perfil y descubre los retos específicos que el
            Programa Encaje resuelve para ti.
          </p>
          <PersonaSelector />
        </div>
      </section>

      {/* ── Pain Agitation — ¿Te suena familiar? ── */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            className="mb-4 text-center text-2xl font-bold uppercase tracking-wide text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            La Ley del Sándwich
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gnozin-steel">
            La mayoría de los líderes PyME viven atrapados: presionados por el
            mercado desde arriba y por su equipo desde abajo — sin espacio para
            pensar, crecer o respirar.
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
                className="group rounded-xl border-2 border-transparent bg-white p-6 transition-all hover:border-gnozin-blue/30 hover:shadow-md"
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

      {/* ── Methodology Visual — Programa Encaje ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p
            className="mb-2 text-center text-sm font-bold uppercase tracking-[3px] text-gnozin-blue"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Programa Encaje
          </p>
          <h2
            className="mb-4 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            3 fases. 6 semanas. Resultados reales.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gnozin-steel">
            No es teoría. Es un plan concreto para tu empresa real — diseñado
            con +30 años de experiencia con líderes PyME.
          </p>
          <MethodologyVisual />
          <div className="mt-10 text-center">
            <Button
              className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
              asChild
            >
              <Link href="/programa">
                Ver detalles del programa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Transformation Stories ── */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p
            className="mb-2 text-center text-sm font-bold uppercase tracking-[3px] text-gnozin-blue"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Historias de Transformación
          </p>
          <h2
            className="mb-4 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Líderes que rompieron el ciclo
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gnozin-steel">
            Estos empresarios estaban exactamente donde tú estás ahora.
            Así fue su transformación.
          </p>
          <TransformationStories />
        </div>
      </section>

      {/* ── Lead Magnet ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <LeadMagnet />
        </div>
      </section>

      {/* ── Triage Quiz ── */}
      <section id="diagnostico" className="bg-gnozin-cloud py-16 sm:py-20">
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
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
              asChild
            >
              <Link href="/contacto">
                <Calendar className="mr-2 h-4 w-4" />
                Quiero mi sesión gratuita
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gnozin-navy/30 text-gnozin-navy hover:bg-gnozin-navy hover:text-white"
              asChild
            >
              <a
                href="https://wa.me/526677516464?text=Hola%20Gnozin%2C%20quiero%20agendar%20mi%20sesi%C3%B3n%20diagn%C3%B3stica"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
