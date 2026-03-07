import Link from "next/link";
import { ArrowRight, BookOpen, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Iniciar Sesión — Autoestima Empresarial",
  description:
    "Accede a la plataforma de experiencia transmedia del libro de Autoestima Empresarial.",
};

export default function LoginPage() {
  return (
    <>
      <section className="flex min-h-[70vh] items-center justify-center bg-gnozin-cloud py-20">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gnozin-blue/10">
            <Lock className="h-8 w-8 text-gnozin-blue" />
          </div>
          <h1
            className="mb-3 text-2xl font-black text-gnozin-navy sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Plataforma en Construcción
          </h1>
          <p className="mb-6 text-gnozin-steel leading-relaxed">
            La plataforma de experiencia transmedia del libro de Autoestima
            Empresarial estará disponible próximamente. Aquí podrás acceder a
            contenido interactivo, herramientas de diagnóstico y tu progreso
            personalizado.
          </p>
          <div className="rounded-xl border border-gnozin-blue/15 bg-white p-6">
            <BookOpen className="mx-auto mb-3 h-8 w-8 text-gnozin-blue" />
            <p className="mb-1 text-sm font-bold text-gnozin-navy">
              ¿Qué incluirá?
            </p>
            <ul className="mt-3 space-y-2 text-left text-sm text-gnozin-steel">
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-gnozin-blue" />
                Experiencia transmedia del libro
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-gnozin-blue" />
                Herramientas de diagnóstico interactivas
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-gnozin-blue" />
                Tu mapa personal de la Triqueta
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-gnozin-blue" />
                Grabaciones y material del taller
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <p className="mb-3 text-xs text-gnozin-steel">
              Mientras tanto, explora el modelo:
            </p>
            <Button
              className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
              asChild
            >
              <Link href="/empieza-aqui">
                Ir a Empieza Aquí
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
