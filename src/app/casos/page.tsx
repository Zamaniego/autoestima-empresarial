import Link from "next/link";
import { ArrowRight, Quote, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Casos de Éxito — Autoestima Empresarial",
  description:
    "Historias reales de fundadores y herederos que transformaron su liderazgo con Autoestima Empresarial.",
};

const testimonials = [
  {
    name: "Roberto M.",
    role: "Fundador · Constructora",
    profile: "Fundador",
    quote:
      "Antes trabajaba 14 horas al día y no podía delegar nada. Después del Programa Encaje, mi empresa funciona sin que yo esté presente cada minuto. Finalmente pude tomar vacaciones.",
    result: "Redujo su jornada de 14h a 8h sin perder ingresos",
  },
  {
    name: "Carolina S.",
    role: "Heredera · Restaurante familiar",
    profile: "Heredero",
    quote:
      "Me comparaban constantemente con mi papá. Sentía que la empresa nunca iba a ser mía. Gnozin me ayudó a encontrar mi propia voz y modernizar sin destruir lo que funcionaba.",
    result: "Incrementó ventas 35% al reposicionar la marca",
  },
  {
    name: "Martín L.",
    role: "Fundador · Agencia de marketing",
    profile: "Fundador",
    quote:
      "Cobraba la mitad de lo que valía mi trabajo. El ejercicio de singularidad me cambió la perspectiva. Ahora mis clientes pagan lo justo y me respetan más como profesional.",
    result: "Duplicó su ticket promedio en 90 días",
  },
  {
    name: "Daniela V.",
    role: "Heredera · Clínica dental",
    profile: "Heredero",
    quote:
      "No sabía si quería seguir con la clínica de mi familia. Después de las 6 semanas, decidí quedarme pero hacerla completamente mía. Hoy siento orgullo de lo que estamos construyendo.",
    result: "Implementó modelo de atención propio con 95% de satisfacción",
  },
  {
    name: "Eduardo R.",
    role: "Fundador · Distribuidora",
    profile: "Fundador",
    quote:
      "Tenía 12 empleados y sentía que ninguno hacía las cosas como yo. Aprendí que el problema no era mi equipo — era yo. El programa me enseñó a soltar y confiar.",
    result: "Formó 3 líderes internos que ahora operan de forma autónoma",
  },
  {
    name: "Alejandra F.",
    role: "Heredera · Comercializadora",
    profile: "Heredero",
    quote:
      "La transición generacional estaba destruyendo la relación con mi familia. Gnozin nos ayudó a separar lo personal de lo empresarial y a definir roles claros.",
    result: "Logró transición generacional exitosa en 6 meses",
  },
];

export default function CasosPage() {
  return (
    <>
      {/* Hero */}
      <section className="gnozin-gradient py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge className="mb-4 bg-white/20 text-white">
            Historias reales
          </Badge>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Casos de Éxito
          </h1>
          <p className="mx-auto max-w-xl text-lg text-blue-100">
            Líderes reales que transformaron su empresa al transformarse a sí
            mismos.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-gnozin-sky/20 transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={
                        t.profile === "Fundador"
                          ? "border-gnozin-blue text-gnozin-blue"
                          : "border-gnozin-sky text-gnozin-navy"
                      }
                    >
                      {t.profile}
                    </Badge>
                    <Quote className="h-5 w-5 text-gnozin-blue/20" />
                  </div>
                  <blockquote className="mb-4 text-sm italic leading-relaxed text-gnozin-steel">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mb-3 rounded-lg bg-gnozin-ice p-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-gnozin-blue" />
                      <span className="text-xs font-semibold text-gnozin-navy">
                        {t.result}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gnozin-navy">
                      {t.name}
                    </p>
                    <p className="text-xs text-gnozin-steel">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gnozin-cloud py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-8 text-center sm:grid-cols-4">
            {[
              { stat: "+250", label: "Líderes transformados" },
              { stat: "93%", label: "Tasa de satisfacción" },
              { stat: "6", label: "Semanas promedio" },
              { stat: "2.3x", label: "ROI promedio año 1" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl font-black text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {s.stat}
                </p>
                <p className="mt-1 text-sm text-gnozin-steel">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gnozin-gradient py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2
            className="mb-4 text-2xl font-bold sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Tu historia puede ser la siguiente
          </h2>
          <p className="mb-6 text-blue-100">
            Agenda tu sesión diagnóstica gratuita y da el primer paso hacia un
            liderazgo con claridad.
          </p>
          <Button
            size="lg"
            className="bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
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
