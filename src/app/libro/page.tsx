import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Star,
  Quote,
  Calendar,
  CheckCircle2,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Libro — Autoestima Empresarial",
  description:
    "Descubre el libro de Gnozin Navarro sobre Autoestima Empresarial. Conceptos prácticos de liderazgo, identidad y dirección para líderes PyME.",
};

const chapters = [
  {
    num: "01",
    title: "La Ley del Sándwich",
    desc: "Por qué el líder PyME vive atrapado entre el mercado y su equipo — y por qué eso no es normal.",
  },
  {
    num: "02",
    title: "Autoestima Empresarial",
    desc: "La conexión entre lo que el líder siente de sí mismo y lo que su empresa proyecta al mercado.",
  },
  {
    num: "03",
    title: "La Singularidad",
    desc: "Cómo descubrir aquello que solo tú puedes ofrecer — y por qué es tu mayor ventaja competitiva.",
  },
  {
    num: "04",
    title: "Precio vs. Valor",
    desc: "Por qué cobras menos de lo que vales y cómo romper el ciclo de competir por precio.",
  },
  {
    num: "05",
    title: "El Equipo como Reflejo",
    desc: "Tu equipo es un espejo de tu liderazgo. Cambia tú, y tu equipo cambia.",
  },
  {
    num: "06",
    title: "El Plan de 90 Días",
    desc: "Un marco práctico para pasar de la reflexión a la acción con métricas claras.",
  },
];

export default function LibroPage() {
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
            El Libro
          </p>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Autoestima Empresarial
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-blue-100">
            +30 años de experiencia con líderes PyME, condensados en un libro
            práctico y directo. Sin teoría vacía — solo herramientas que puedes
            aplicar hoy.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
              asChild
            >
              <a
                href="https://wa.me/526677516464?text=Hola%20Gnozin%2C%20me%20interesa%20conseguir%20tu%20libro%20Autoestima%20Empresarial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Quiero el libro
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
              asChild
            >
              <a href="#contenido">Ver qué incluye</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why this book */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            className="mb-6 text-2xl font-bold uppercase text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Por qué este libro?
          </h2>
          <div className="space-y-4 text-gnozin-steel leading-relaxed">
            <p>
              La mayoría de los libros de negocios están escritos para
              corporativos, startups de Silicon Valley o MBA&apos;s. Pero la
              realidad del líder PyME mexicano es otra: trabajas con tu
              familia, compites contra gigantes, y cargas con todo el peso de
              la operación sobre tus hombros.
            </p>
            <p>
              Este libro nació de más de tres décadas trabajando con
              empresarios reales — restauranteros, constructores, médicos con
              clínica, comerciantes de segunda generación. Personas que no
              necesitan más teoría, sino herramientas prácticas que funcionen
              en su contexto.
            </p>
            <p>
              <strong className="text-gnozin-navy">
                Autoestima Empresarial
              </strong>{" "}
              no es un libro de motivación. Es un espejo donde vas a reconocer
              los patrones que te tienen atrapado — y un mapa para salir de
              ahí.
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
            &ldquo;No puedes cobrar lo que vale tu empresa si tú no sabes
            lo que vales como líder.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gnozin-blue">
            — Del Capítulo 4: Precio vs. Valor
          </p>
        </div>
      </section>

      {/* Chapters */}
      <section id="contenido" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            className="mb-4 text-center text-2xl font-bold uppercase text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Lo que vas a encontrar
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gnozin-steel">
            6 capítulos prácticos que van desde el diagnóstico hasta el plan
            de acción. Cada uno con ejercicios que puedes aplicar esa misma
            semana.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {chapters.map((ch) => (
              <div
                key={ch.num}
                className="rounded-xl border border-gnozin-blue/10 bg-gnozin-cloud p-5 transition-all hover:border-gnozin-blue/30 hover:shadow-sm"
              >
                <p
                  className="mb-1 text-2xl font-black text-gnozin-blue/20"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {ch.num}
                </p>
                <h3
                  className="mb-2 text-lg font-bold text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  {ch.title}
                </h3>
                <p className="text-sm leading-relaxed text-gnozin-steel">
                  {ch.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            className="mb-8 text-center text-2xl font-bold uppercase text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Para quién es este libro?
          </h2>
          <div className="space-y-3">
            {[
              "Fundadores de empresas PyME que sienten que su empresa depende 100% de ellos",
              "Líderes de segunda generación que heredaron una empresa y buscan hacerla propia",
              "Empresarios que trabajan más pero no ganan más",
              "Cualquier líder que quiere dejar de competir por precio y empezar a competir por valor",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gnozin-blue" aria-hidden="true" />
                <p className="text-gnozin-steel">{item}</p>
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
            Consigue tu ejemplar
          </h2>
          <p className="mb-6 text-blue-100">
            Escríbele directamente a Gnozin para conseguir tu copia — o
            agenda una sesión gratuita para platicar sobre tu empresa.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
              asChild
            >
              <a
                href="https://wa.me/526677516464?text=Hola%20Gnozin%2C%20quiero%20conseguir%20tu%20libro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Pedir por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/taller">
                <Calendar className="mr-2 h-4 w-4" />
                Conocer el Taller
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
            ¿Quieres saber más sobre la persona detrás del libro?
          </p>
          <Button
            className="mt-4 bg-gnozin-blue text-white hover:bg-gnozin-navy"
            asChild
          >
            <Link href="/quien-es-gnozin">
              Conocer a Gnozin Navarro
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
