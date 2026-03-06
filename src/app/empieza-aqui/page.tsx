import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Users,
  Target,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Empieza Aquí — Autoestima Empresarial",
  description:
    "¿No sabes por dónde empezar? Sigue esta ruta paso a paso para descubrir qué necesita tu empresa y cómo el Programa Encaje puede ayudarte.",
};

const steps = [
  {
    num: 1,
    icon: Target,
    title: "Haz tu diagnóstico gratuito",
    desc: "Responde 5 preguntas y descubre si tu mayor reto es de identidad, equipo o dirección. Solo toma 2 minutos.",
    cta: "Ir al diagnóstico",
    href: "/#diagnostico",
  },
  {
    num: 2,
    icon: BookOpen,
    title: "Lee sobre la metodología",
    desc: "Conoce las 3 fases del Programa Encaje y la Ley del Sándwich — el concepto que explica por qué te sientes atrapado.",
    cta: "Ver el Programa Encaje",
    href: "/programa",
  },
  {
    num: 3,
    icon: Users,
    title: "Conoce casos reales",
    desc: "Otros líderes PyME estaban en tu misma situación. Mira cómo rompieron el ciclo y transformaron su empresa.",
    cta: "Ver casos de éxito",
    href: "/casos",
  },
  {
    num: 4,
    icon: Calendar,
    title: "Agenda tu sesión diagnóstica",
    desc: "30 minutos con Gnozin Navarro — sin costo, sin compromiso. Solo claridad sobre qué hacer primero.",
    cta: "Agendar sesión gratuita",
    href: "/contacto",
  },
];

export default function EmpiezaAquiPage() {
  return (
    <>
      {/* Hero */}
      <section className="gnozin-gradient py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-[4px] text-gnozin-sky"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Tu Primer Paso
          </p>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿No sabes por dónde empezar?
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-blue-100">
            Normal. La mayoría de los líderes PyME llegan aquí sintiéndose
            abrumados. Por eso creamos esta ruta clara: 4 pasos simples para
            entender tu situación y tomar acción.
          </p>
        </div>
      </section>

      {/* Step-by-step path */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative pb-12 last:pb-0">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-6 top-14 h-full w-0.5 bg-gnozin-blue/15 sm:left-8"
                    aria-hidden="true"
                  />
                )}
                <div className="flex gap-4 sm:gap-6">
                  {/* Step number circle */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gnozin-blue text-lg font-black text-white sm:h-16 sm:w-16 sm:text-xl"
                    style={{
                      fontFamily: "var(--font-heading), Montserrat, sans-serif",
                    }}
                  >
                    {step.num}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="h-5 w-5 text-gnozin-blue" aria-hidden="true" />
                      <h2
                        className="text-xl font-bold text-gnozin-navy sm:text-2xl"
                        style={{
                          fontFamily: "var(--font-heading), Montserrat, sans-serif",
                        }}
                      >
                        {step.title}
                      </h2>
                    </div>
                    <p className="mb-4 text-gnozin-steel leading-relaxed">
                      {step.desc}
                    </p>
                    <Button
                      variant="outline"
                      className="border-gnozin-blue/30 text-gnozin-blue hover:bg-gnozin-blue hover:text-white"
                      asChild
                    >
                      <Link href={step.href}>
                        {step.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick wins section */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            className="mb-4 text-center text-2xl font-bold uppercase text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Señales de que llegaste al lugar correcto
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gnozin-steel">
            Si alguna de estas frases te suena familiar, el Programa Encaje
            fue diseñado para ti.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Sientes que tu empresa depende 100% de ti",
              "Trabajas más horas pero no ganas más",
              "Tu equipo no toma decisiones sin preguntarte",
              "Compites por precio porque no sabes articular tu valor",
              "Llevas meses (o años) sin poder tomar vacaciones",
              "Heredaste la empresa y no sabes si es tuya o de tu familia",
            ].map((signal) => (
              <div
                key={signal}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gnozin-blue" aria-hidden="true" />
                <p className="text-gnozin-steel">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp shortcut */}
      <section className="bg-gnozin-ice py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <MessageCircle className="mx-auto mb-4 h-10 w-10 text-gnozin-blue" aria-hidden="true" />
          <h2
            className="mb-3 text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Prefieres hablar directamente?
          </h2>
          <p className="mb-6 text-gnozin-steel">
            Escríbele a Gnozin por WhatsApp. Sin formularios, sin esperas —
            una conversación real con un mentor real.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
              asChild
            >
              <a
                href="https://wa.me/526677516464?text=Hola%20Gnozin%2C%20acabo%20de%20ver%20tu%20sitio%20y%20me%20gustar%C3%ADa%20platicar%20sobre%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gnozin-navy/30 text-gnozin-navy hover:bg-gnozin-navy hover:text-white"
              asChild
            >
              <Link href="/contacto">
                <Calendar className="mr-2 h-4 w-4" />
                Agendar sesión formal
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
            Si aún no has hecho el diagnóstico, es el mejor lugar para comenzar.
          </p>
          <Button
            className="mt-4 bg-gnozin-blue text-white hover:bg-gnozin-navy"
            asChild
          >
            <a href="/#diagnostico">
              Hacer mi diagnóstico gratuito
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
