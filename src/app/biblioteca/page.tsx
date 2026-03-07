import Link from "next/link";
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Biblioteca — Autoestima Empresarial",
  description:
    "Lecturas recomendadas organizadas por las esferas del modelo Triqueta: SER, HACER, TENER y ESTAR. Con enlaces directos a Amazon MX.",
};

type Book = {
  title: string;
  author: string;
  why: string;
  amazonUrl: string;
};

const library: {
  sphere: string;
  subtitle: string;
  color: string;
  books: Book[];
}[] = [
  {
    sphere: "SER",
    subtitle: "Identidad y propósito",
    color: "#0B6ABF",
    books: [
      {
        title: "El hombre en busca de sentido",
        author: "Viktor Frankl",
        why: "La identidad se construye desde el sentido, no desde las circunstancias. Fundamental para entender el SER del emprendedor.",
        amazonUrl: "https://www.amazon.com.mx/dp/8425432022",
      },
      {
        title: "Empieza con el porqué",
        author: "Simon Sinek",
        why: "Por qué las empresas que operan desde su identidad generan lealtad. Conexión directa con la esfera SER.",
        amazonUrl: "https://www.amazon.com.mx/dp/8492921889",
      },
      {
        title: "Las 48 leyes del poder",
        author: "Robert Greene",
        why: "Comprende las dinámicas de poder en los sistemas sociales y económicos donde opera el emprendedor.",
        amazonUrl: "https://www.amazon.com.mx/dp/8467045035",
      },
    ],
  },
  {
    sphere: "HACER",
    subtitle: "Operación y sistemas",
    color: "#0A3D6B",
    books: [
      {
        title: "El mito del emprendedor",
        author: "Michael E. Gerber",
        why: "La operación debe funcionar sin depender del fundador. El libro que define la diferencia entre trabajar EN tu empresa vs. PARA tu empresa.",
        amazonUrl: "https://www.amazon.com.mx/dp/6077470228",
      },
      {
        title: "Traction",
        author: "Gino Wickman",
        why: "Un sistema operativo para empresas que quieren escalar con estructura. Metodología práctica para el HACER.",
        amazonUrl: "https://www.amazon.com.mx/dp/1936661837",
      },
      {
        title: "Clockwork",
        author: "Mike Michalowicz",
        why: "Diseña tu empresa para que funcione sola. La esencia de una operación que no depende de ti.",
        amazonUrl: "https://www.amazon.com.mx/dp/0525534016",
      },
    ],
  },
  {
    sphere: "TENER",
    subtitle: "Resultados económicos",
    color: "#3A4A5A",
    books: [
      {
        title: "Profit First",
        author: "Mike Michalowicz",
        why: "Gana dinero primero, gasta después. Un sistema que alinea los resultados económicos con la salud del negocio.",
        amazonUrl: "https://www.amazon.com.mx/dp/073521414X",
      },
      {
        title: "La psicología del dinero",
        author: "Morgan Housel",
        why: "El TENER no es solo números — es la relación emocional y cognitiva que tienes con el dinero y los resultados.",
        amazonUrl: "https://www.amazon.com.mx/dp/6073815433",
      },
      {
        title: "Built to Sell",
        author: "John Warrillow",
        why: "Una empresa con TENER sano es una empresa que podría venderse. No porque quieras, sino porque funciona.",
        amazonUrl: "https://www.amazon.com.mx/dp/1591845823",
      },
    ],
  },
  {
    sphere: "ESTAR",
    subtitle: "Bienestar y equilibrio",
    color: "#E22529",
    books: [
      {
        title: "Esencialismo",
        author: "Greg McKeown",
        why: "Menos pero mejor. El bienestar del emprendedor comienza cuando deja de hacer todo y se enfoca en lo esencial.",
        amazonUrl: "https://www.amazon.com.mx/dp/6073128886",
      },
      {
        title: "El monje que vendió su Ferrari",
        author: "Robin Sharma",
        why: "Un recordatorio de que el éxito sin bienestar no es éxito. El ESTAR como centro convergente de la Triqueta.",
        amazonUrl: "https://www.amazon.com.mx/dp/6073136153",
      },
      {
        title: "Ikigai",
        author: "Héctor García y Francesc Miralles",
        why: "El equilibrio entre lo que amas, lo que sabes hacer, lo que el mundo necesita y lo que te pagan — la versión japonesa del BIENESTAR.",
        amazonUrl: "https://www.amazon.com.mx/dp/8416720037",
      },
    ],
  },
];

export default function BibliotecaPage() {
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
            Lecturas
          </p>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Biblioteca
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-blue-100">
            Lecturas curadas organizadas por las esferas del modelo Triqueta.
            Cada libro fue seleccionado porque aporta un ángulo concreto a la
            Autoestima Empresarial.
          </p>
        </div>
      </section>

      {/* Book sections by sphere */}
      {library.map((section, sectionIdx) => (
        <section
          key={section.sphere}
          className={sectionIdx % 2 === 0 ? "bg-white py-16 sm:py-20" : "bg-gnozin-cloud py-16 sm:py-20"}
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-8">
              <p
                className="mb-1 text-sm font-bold uppercase tracking-[3px]"
                style={{
                  color: section.color,
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                {section.subtitle}
              </p>
              <h2
                className="text-2xl font-black text-gnozin-navy sm:text-3xl"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                {section.sphere}
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {section.books.map((book) => (
                <div
                  key={book.title}
                  className="flex flex-col rounded-xl border border-gnozin-blue/15 bg-white p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${section.color}15` }}>
                    <BookOpen className="h-5 w-5" style={{ color: section.color }} />
                  </div>
                  <h3
                    className="mb-1 text-base font-bold text-gnozin-navy"
                    style={{
                      fontFamily: "var(--font-heading), Montserrat, sans-serif",
                    }}
                  >
                    {book.title}
                  </h3>
                  <p className="mb-2 text-xs font-semibold text-gnozin-blue">
                    {book.author}
                  </p>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gnozin-steel">
                    {book.why}
                  </p>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-gnozin-blue transition-colors hover:text-gnozin-navy"
                  >
                    Ver en Amazon MX
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-gnozin-ice py-10">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gnozin-blue">
            ¿Quieres ir más allá de la lectura?
          </p>
          <p className="mt-2 text-gnozin-steel">
            El Taller de Autoestima Empresarial es la forma más directa de
            aplicar estos conceptos a tu empresa.
          </p>
          <Button
            className="mt-4 bg-gnozin-blue text-white hover:bg-gnozin-navy"
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
