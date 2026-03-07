import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Monitor,
  Users,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "1er Taller Autoestima Empresarial — SER, HACER, TENER",
  description:
    "6 sesiones de 90 minutos vía Zoom. Aplica el modelo Triqueta a tu empresa real. Modalidad en vivo o autoaprendizaje.",
};

const sessions = [
  {
    num: 1,
    title: "La Triqueta: SER, HACER, TENER",
    desc: "Diagnóstico inicial. Identifica dónde estás en cada esfera y cuál es tu mayor desalineación.",
  },
  {
    num: 2,
    title: "SER — Tu identidad como emprendedor",
    desc: "¿Quién eres sin tu empresa? Tu historia, valores y visión del mundo como ventaja competitiva real.",
  },
  {
    num: 3,
    title: "HACER — Tu capacidad operativa",
    desc: "Diseña una operación que funcione sin depender exclusivamente de ti. Sistemas, procesos y equipo.",
  },
  {
    num: 4,
    title: "TENER — Tus resultados económicos",
    desc: "Ingresos, utilidad, patrimonio. Aprende a producir resultados como consecuencia del SER y el HACER alineados.",
  },
  {
    num: 5,
    title: "Las intersecciones: Liderazgo, Efectividad, Singularidad",
    desc: "Explora las tres zonas donde las esferas se potencian. Identifica cuál es tu mayor oportunidad.",
  },
  {
    num: 6,
    title: "BIENESTAR — El centro convergente",
    desc: "Integración final. Plan de acción personalizado para mantener las tres esferas en equilibrio.",
  },
];

export default function TallerPage() {
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
            Formación
          </p>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            1er Taller de Autoestima Empresarial
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-blue-100">
            6 sesiones de 90 minutos para aplicar el modelo Triqueta a tu
            empresa real. No es teoría — es un proceso guiado con casos
            prácticos, herramientas y acompañamiento.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> 6 sesiones
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> 90 min cada una
            </span>
            <span className="flex items-center gap-1.5">
              <Monitor className="h-4 w-4" /> Vía Zoom
            </span>
          </div>
        </div>
      </section>

      {/* Session breakdown */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            className="mb-10 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Programa del Taller
          </h2>
          <div className="space-y-0">
            {sessions.map((s, i) => (
              <div key={s.num} className="relative pb-10 last:pb-0">
                {i < sessions.length - 1 && (
                  <div
                    className="absolute left-6 top-14 h-full w-0.5 bg-gnozin-blue/15"
                    aria-hidden="true"
                  />
                )}
                <div className="flex gap-4 sm:gap-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gnozin-blue text-lg font-black text-white"
                    style={{
                      fontFamily: "var(--font-heading), Montserrat, sans-serif",
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className="mb-1 text-lg font-bold text-gnozin-navy"
                      style={{
                        fontFamily:
                          "var(--font-heading), Montserrat, sans-serif",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-gnozin-steel leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-gnozin-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            className="mb-8 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            ¿Qué incluye?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "6 sesiones en vivo de 90 minutos con Gnozin Navarro",
              "Material de trabajo descargable por sesión",
              "Herramientas de diagnóstico para cada esfera",
              "Acceso a la grabación de cada sesión",
              "Espacio de preguntas en cada sesión",
              "Plan de acción personalizado al finalizar",
              "Acceso a la comunidad privada del taller",
              "Certificado de participación",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-gnozin-blue"
                  aria-hidden="true"
                />
                <p className="text-gnozin-steel">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            className="mb-10 text-center text-2xl font-bold text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Modalidades e Inversión
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Live */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-gnozin-blue bg-white p-8 shadow-lg">
              <div className="absolute right-0 top-0 rounded-bl-lg bg-gnozin-blue px-3 py-1 text-xs font-bold text-white">
                Recomendado
              </div>
              <div className="mb-6">
                <Users className="mb-3 h-8 w-8 text-gnozin-blue" />
                <h3
                  className="text-xl font-bold text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  En Vivo
                </h3>
                <p className="mt-1 text-sm text-gnozin-steel">
                  6 sesiones en tiempo real vía Zoom con interacción directa
                </p>
              </div>
              <p
                className="mb-1 text-4xl font-black text-gnozin-navy"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                $6,000{" "}
                <span className="text-base font-semibold text-gnozin-steel">
                  MXN
                </span>
              </p>
              <p className="mb-6 text-xs text-gnozin-steel">
                Becas condicionales disponibles — escríbenos para más
                información
              </p>
              <Button
                className="w-full bg-gnozin-blue text-white hover:bg-gnozin-navy"
                size="lg"
                asChild
              >
                <a
                  href="https://wa.me/526677516464?text=Hola%2C%20quiero%20inscribirme%20al%20Taller%20de%20Autoestima%20Empresarial%20en%20vivo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirme
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Self-study */}
            <div className="rounded-2xl border border-gnozin-blue/20 bg-white p-8">
              <div className="mb-6">
                <BookOpen className="mb-3 h-8 w-8 text-gnozin-steel" />
                <h3
                  className="text-xl font-bold text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  Autoaprendizaje
                </h3>
                <p className="mt-1 text-sm text-gnozin-steel">
                  Grabaciones + material de trabajo a tu propio ritmo
                </p>
              </div>
              <p
                className="mb-1 text-4xl font-black text-gnozin-navy"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                $900{" "}
                <span className="text-base font-semibold text-gnozin-steel">
                  MXN
                </span>
              </p>
              <p className="mb-6 text-xs text-gnozin-steel">
                Acceso inmediato a las grabaciones y materiales
              </p>
              <Button
                className="w-full"
                variant="outline"
                size="lg"
                asChild
              >
                <a
                  href="https://wa.me/526677516464?text=Hola%2C%20quiero%20acceso%20al%20Taller%20de%20Autoestima%20Empresarial%20en%20autoaprendizaje"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acceder
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="bg-gnozin-navy py-12 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p
            className="text-xl font-bold leading-snug sm:text-2xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            &ldquo;Este taller es para emprendedores que quieren entender por
            qué su empresa funciona como funciona — y qué pueden hacer al
            respecto desde su propia identidad.&rdquo;
          </p>
          <p className="mt-4 text-sm text-gnozin-sky">
            — Gnozin Navarro · Autor del modelo
          </p>
        </div>
      </section>

      {/* Poka-yoke: Next step */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gnozin-blue">
            ¿Quieres entender primero el modelo?
          </p>
          <p className="mt-2 text-gnozin-steel">
            Explora la Triqueta y sus fundamentos antes de inscribirte.
          </p>
          <Button
            className="mt-4 bg-gnozin-blue text-white hover:bg-gnozin-navy"
            asChild
          >
            <Link href="/empieza-aqui">
              Ir a Empieza Aquí
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
