import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Programa Encaje — Autoestima Empresarial",
  description:
    "6 semanas para descubrir tu singularidad como líder, definir el valor de tu empresa y diseñar un plan de acción concreto.",
};

const weeks = [
  {
    phase: "Diagnóstico",
    weeks: "Semanas 1–2",
    title: "Entender dónde estás",
    items: [
      "Mapeo de tu situación actual como líder",
      "Identificación de patrones que te frenan",
      "Diagnóstico de tu empresa vs tu identidad",
      "Sesiones 1-a-1 con Gnozin",
    ],
  },
  {
    phase: "Claridad",
    weeks: "Semanas 3–4",
    title: "Descubrir quién eres",
    items: [
      "Descubrimiento de tu singularidad (ADN)",
      "Ejercicio de Autoestima Empresarial",
      "Definición de precio justo por tu valor real",
      "Claridad sobre tu cliente ideal",
    ],
  },
  {
    phase: "Plan de Acción",
    weeks: "Semanas 5–6",
    title: "Diseñar hacia dónde vas",
    items: [
      "Plan de acción a 90 días",
      "Estrategia de delegación personalizada",
      "Modelo de comunicación con tu equipo",
      "Sesión de cierre y compromiso",
    ],
  },
];

export default function ProgramaPage() {
  return (
    <>
      {/* Hero */}
      <section className="gnozin-gradient py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge className="mb-4 bg-white/20 text-white">
            <Clock className="mr-1 h-3 w-3" /> 6 semanas
          </Badge>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Programa Encaje
          </h1>
          <p className="mx-auto max-w-xl text-lg text-blue-100">
            El programa insignia de Autoestima Empresarial. 6 semanas para
            descubrir tu singularidad, definir el valor real de tu empresa y
            diseñar un plan de acción concreto.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2
            className="mb-12 text-center text-2xl font-bold uppercase tracking-wide text-gnozin-navy"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Las 3 Fases del Programa
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {weeks.map((w, i) => (
              <Card key={i} className="border-gnozin-sky/20">
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="mb-2 w-fit border-gnozin-blue text-gnozin-blue"
                  >
                    {w.weeks}
                  </Badge>
                  <p className="text-xs font-bold uppercase tracking-widest text-gnozin-sky">
                    Fase {i + 1}: {w.phase}
                  </p>
                  <CardTitle
                    className="text-xl text-gnozin-navy"
                    style={{
                      fontFamily:
                        "var(--font-heading), Montserrat, sans-serif",
                    }}
                  >
                    {w.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {w.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gnozin-steel"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gnozin-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            className="mb-8 text-center text-2xl font-bold uppercase tracking-wide text-gnozin-navy"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Qué incluye?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "6 sesiones 1-a-1 con Gnozin Navarro",
              "Diagnóstico de Autoestima Empresarial",
              "Ejercicio de singularidad (ADN empresarial)",
              "Plan de acción personalizado a 90 días",
              "Guía de delegación efectiva",
              "Acceso a comunidad privada de líderes",
              "Recursos y plantillas descargables",
              "Sesión de seguimiento post-programa",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <Star className="h-5 w-5 shrink-0 text-gnozin-blue" />
                <span className="text-sm text-gnozin-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <h2
            className="mb-2 text-2xl font-bold uppercase text-gnozin-navy"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Inversión
          </h2>
          <p className="mb-6 text-gnozin-steel">
            Un precio accesible diseñado para líderes PyME que buscan resultados
            reales.
          </p>
          <Card className="border-2 border-gnozin-blue shadow-lg">
            <CardContent className="py-8">
              <p
                className="text-5xl font-black text-gnozin-navy"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                $6,000
                <span className="text-lg font-normal text-gnozin-steel">
                  {" "}
                  MXN
                </span>
              </p>
              <p className="mt-2 text-sm text-gnozin-steel">
                Pago único · Opciones de pago a 2 o 3 mensualidades
              </p>
              <Button
                size="lg"
                className="mt-6 w-full bg-gnozin-blue text-white hover:bg-gnozin-navy"
                asChild
              >
                <Link href="/contacto">
                  Agenda tu sesión diagnóstica gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-3 text-xs text-gnozin-steel">
                Sin compromiso. La sesión diagnóstica es 100% gratuita.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
