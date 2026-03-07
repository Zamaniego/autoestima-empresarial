import Link from "next/link";
import { ArrowRight, Calendar, Video, Mic, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Calendario — Autoestima Empresarial",
  description:
    "Conferencias, talleres, masterclasses y sesiones en vivo sobre Autoestima Empresarial. Consulta el calendario público.",
};

const eventTypes = [
  {
    icon: Video,
    title: "Talleres",
    desc: "Sesiones grupales de 90 minutos vía Zoom para aplicar el modelo Triqueta.",
  },
  {
    icon: Mic,
    title: "Conferencias",
    desc: "Charlas abiertas sobre autoestima empresarial, singularidad y liderazgo.",
  },
  {
    icon: Users,
    title: "Masterclasses",
    desc: "Sesiones de profundización en temas específicos del modelo.",
  },
];

export default function CalendarioPage() {
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
            Eventos
          </p>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Calendario
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-blue-100">
            Consulta las próximas conferencias, talleres y masterclasses sobre
            Autoestima Empresarial. Todos los eventos son públicos y abiertos.
          </p>
        </div>
      </section>

      {/* Event types */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {eventTypes.map((e) => (
              <div
                key={e.title}
                className="rounded-xl border border-gnozin-blue/15 bg-gnozin-ice/30 p-5 text-center"
              >
                <e.icon className="mx-auto mb-3 h-8 w-8 text-gnozin-blue" />
                <h3
                  className="mb-1 text-lg font-bold text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {e.title}
                </h3>
                <p className="text-sm text-gnozin-steel">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Calendar Embed */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2
            className="mb-8 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Próximos Eventos
          </h2>
          <div className="overflow-hidden rounded-xl border border-gnozin-blue/15 bg-white shadow-sm">
            {/* Placeholder for Google Calendar embed */}
            <div className="flex min-h-[500px] items-center justify-center bg-gnozin-ice/50 p-8 text-center">
              <div>
                <Calendar className="mx-auto mb-4 h-12 w-12 text-gnozin-blue/40" />
                <p
                  className="mb-2 text-lg font-bold text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  Calendario de eventos
                </p>
                <p className="mx-auto max-w-md text-sm text-gnozin-steel">
                  Aquí se integrará el calendario público de Google Calendar con
                  todas las conferencias, talleres y masterclasses programadas.
                </p>
                <p className="mt-4 rounded-lg bg-gnozin-blue/10 px-4 py-2 text-xs text-gnozin-blue">
                  El calendario se conectará próximamente con Google Calendar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gnozin-blue">
            ¿Listo para tu primer taller?
          </p>
          <p className="mt-2 text-gnozin-steel">
            El 1er Taller de Autoestima Empresarial es el mejor punto de
            partida.
          </p>
          <Button
            className="mt-4 bg-gnozin-blue text-white hover:bg-gnozin-navy"
            asChild
          >
            <Link href="/taller">
              Ver detalles del Taller
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
