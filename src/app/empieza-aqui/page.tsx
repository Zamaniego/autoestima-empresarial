import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TriquetaVisual } from "@/components/triqueta-visual";

export const metadata = {
  title: "Empieza Aquí — Autoestima Empresarial",
  description:
    "Conoce el modelo Triqueta: SER, HACER y TENER — el sistema que protege la singularidad del emprendedor dentro del sistema económico y social.",
};

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
            El Modelo
          </p>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Qué es la Autoestima Empresarial?
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-blue-100">
            Un modelo que protege la singularidad del emprendedor dentro del
            sistema económico y social. No es motivación. No es autoayuda. Es un
            sistema de regulación basado en tres esferas: SER, HACER y TENER.
          </p>
        </div>
      </section>

      {/* Triqueta Interactive Model */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p
            className="mb-2 text-center text-sm font-bold uppercase tracking-[3px] text-gnozin-blue"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            La Triqueta
          </p>
          <h2
            className="mb-4 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Tres esferas. Tres intersecciones. Un centro convergente.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gnozin-steel">
            El modelo Triqueta organiza la realidad del emprendedor en tres
            dimensiones fundamentales y sus relaciones. Cuando las tres esferas
            se alinean, emerge el Bienestar — no como aspiración, sino como
            consecuencia estructural.
          </p>
          <TriquetaVisual />
        </div>
      </section>

      {/* The Thesis */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            className="mb-6 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            La tesis central
          </h2>
          <div className="space-y-6 text-gnozin-steel leading-relaxed">
            <p>
              El emprendedor latinoamericano opera dentro de un sistema que lo
              presiona a copiar modelos ajenos, competir por precio y
              desconectarse de su identidad. El resultado: empresas frágiles que
              dependen exclusivamente del fundador.
            </p>
            <p>
              La Autoestima Empresarial es la capacidad del emprendedor para
              reconocer, articular y proteger lo que hace única a su empresa
              dentro del mercado. No se trata de sentirse bien — se trata de
              construir una operación que funcione desde quién eres, no desde lo
              que te dicen que deberías ser.
            </p>
            <p>
              Cuando el <strong className="text-gnozin-navy">SER</strong>{" "}
              (identidad) guía al{" "}
              <strong className="text-gnozin-navy">HACER</strong> (operación), y
              el HACER produce el{" "}
              <strong className="text-gnozin-navy">TENER</strong> (resultados),
              el emprendedor deja de sobrevivir y empieza a prosperar. Esto no
              es retórica motivacional — es un sistema observable y regulable.
            </p>
          </div>
        </div>
      </section>

      {/* Coherence callout */}
      <section className="bg-gnozin-navy py-12 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p
            className="text-xl font-bold leading-snug sm:text-2xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            &ldquo;Cuando persigues el TENER sin identidad, terminas compitiendo
            por precio. Cuando operas sin claridad, terminas siendo esclavo de
            tu propia empresa.&rdquo;
          </p>
          <p className="mt-4 text-sm text-gnozin-sky">
            — Gnozin Navarro · Autor del modelo de Autoestima Empresarial
          </p>
        </div>
      </section>

      {/* What this is NOT */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            className="mb-8 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Lo que NO es este modelo
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                no: "Motivación o autoayuda",
                si: "Un sistema de regulación basado en tres esferas medibles",
              },
              {
                no: "Coaching genérico",
                si: "Un marco antropológico específico para emprendedores",
              },
              {
                no: "Fórmulas importadas del extranjero",
                si: "Un modelo diseñado desde la realidad latinoamericana",
              },
              {
                no: "Recetas rápidas para vender más",
                si: "Una estructura para que tu negocio funcione desde tu identidad",
              },
            ].map((item) => (
              <div
                key={item.no}
                className="rounded-xl border border-gnozin-blue/15 bg-gnozin-ice/30 p-5"
              >
                <p className="mb-2 text-sm font-bold text-red-600">
                  ✕ No es: {item.no}
                </p>
                <p className="text-sm text-gnozin-steel">
                  ✓ Sí es: {item.si}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next step CTA */}
      <section className="bg-gnozin-ice py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <GraduationCap
            className="mx-auto mb-4 h-10 w-10 text-gnozin-blue"
            aria-hidden="true"
          />
          <h2
            className="mb-3 text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Siguiente paso: Lleva el modelo a la práctica
          </h2>
          <p className="mb-6 text-gnozin-steel">
            El 1er Taller de Autoestima Empresarial te guía en 6 sesiones para
            aplicar la Triqueta a tu empresa real. Vía Zoom. Con casos
            prácticos.
          </p>
          <Button
            size="lg"
            className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
            asChild
          >
            <Link href="/taller">
              Ver el Taller
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
