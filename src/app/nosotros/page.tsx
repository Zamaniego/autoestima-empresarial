import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Nosotros — Autoestima Empresarial",
  description:
    "Conoce a Gnozin Navarro y la metodología detrás de Autoestima Empresarial. +30 años transformando líderes de empresas PyME.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="gnozin-gradient py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge className="mb-4 bg-white/20 text-white">
            +30 años de experiencia
          </Badge>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Gnozin Navarro
          </h1>
          <p className="mx-auto max-w-xl text-lg text-blue-100">
            Consultor de liderazgo empresarial, mentor de fundadores y líderes de segunda generación
            de empresas PyME en México.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose prose-lg mx-auto text-gnozin-steel">
            <h2
              className="text-2xl font-bold uppercase text-gnozin-navy"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
            >
              La Historia
            </h2>
            <p>
              Durante más de tres décadas, Gnozin Navarro ha trabajado codo a
              codo con líderes de empresas PyME en México — desde restauranteros
              y constructores hasta médicos con clínica propia y comerciantes de
              segunda generación.
            </p>
            <p>
              Su experiencia le permitió identificar un patrón: la mayoría de los
              problemas de una empresa PyME no son técnicos ni financieros —
              <strong> son de identidad</strong>. El líder no sabe quién es
              como empresario, no conoce el valor real de lo que ofrece, y
              termina compitiendo por precio en lugar de por singularidad.
            </p>
            <p>
              De esa observación nació el concepto de{" "}
              <strong>Autoestima Empresarial</strong>: la idea de que una empresa
              sana refleja a un líder que se conoce a sí mismo, que sabe lo que
              vale, y que puede articular su valor con claridad.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gnozin-ice py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Quote className="mx-auto mb-4 h-10 w-10 text-gnozin-blue/30" />
          <blockquote
            className="text-xl font-bold italic leading-relaxed text-gnozin-navy sm:text-2xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            &ldquo;Tu empresa es un reflejo de ti. Si tú no sabes lo que vales,
            tu empresa tampoco lo sabrá.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gnozin-blue">
            — Gnozin Navarro
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            className="mb-10 text-center text-2xl font-bold uppercase tracking-wide text-gnozin-navy"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            La Metodología
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                num: "01",
                title: "Autoconocimiento",
                desc: "El líder descubre su singularidad — eso que sólo él o ella puede ofrecer al mercado.",
              },
              {
                num: "02",
                title: "Autoestima",
                desc: "Traduce esa singularidad en precio, posicionamiento y comunicación con el equipo.",
              },
              {
                num: "03",
                title: "Dirección",
                desc: "Diseña un plan de acción concreto para los próximos 90 días, con métricas y compromisos.",
              },
            ].map((m) => (
              <div key={m.num} className="text-center">
                <p
                  className="mb-2 text-4xl font-black text-gnozin-blue/20"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {m.num}
                </p>
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
            ))}
          </div>
        </div>
      </section>

      {/* The Ley del Sándwich */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            className="mb-6 text-center text-2xl font-bold uppercase text-gnozin-navy"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            La Ley del Sándwich
          </h2>
          <p className="mb-4 text-center text-gnozin-steel">
            El concepto que define al líder PyME: estás en medio de todo.
            Atrapado entre las demandas de tus clientes, las necesidades de tu
            equipo, y tus propias aspiraciones.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Arriba", desc: "Las exigencias del mercado y los clientes" },
              { label: "Tú", desc: "El líder: aplastado, sobrecargado, sin espacio" },
              { label: "Abajo", desc: "Tu equipo, proveedores y operación diaria" },
            ].map((layer, i) => (
              <div
                key={i}
                className={`rounded-lg p-5 text-center ${
                  i === 1
                    ? "bg-gnozin-blue text-white"
                    : "bg-white text-gnozin-navy shadow-sm"
                }`}
              >
                <p
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {layer.label}
                </p>
                <p className={`mt-1 text-sm ${i === 1 ? "text-blue-100" : "text-gnozin-steel"}`}>
                  {layer.desc}
                </p>
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
            ¿Quieres conocer tu perfil de líder?
          </h2>
          <p className="mb-6 text-blue-100">
            Haz el diagnóstico gratuito y descubre si eres un Fundador o un
            Segunda Generación — y qué camino te conviene seguir.
          </p>
          <Button
            size="lg"
            className="bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
            asChild
          >
            <Link href="/#diagnostico">
              Ir al diagnóstico
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
