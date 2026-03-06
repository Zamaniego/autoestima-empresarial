"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const routeLabels: Record<string, string> = {
  "/": "Inicio",
  "/empieza-aqui": "Empieza Aquí",
  "/programa": "Programa Encaje",
  "/libro": "Libro",
  "/quien-es-gnozin": "¿Quién es Gnozin?",
  "/nosotros": "Nosotros",
  "/casos": "Casos de Éxito",
  "/contacto": "Contacto",
};

export function BreadcrumbNav() {
  const pathname = usePathname();

  // Don't render on home page
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((_, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    return { href, label: routeLabels[href] || segments[i] };
  });

  return (
    <nav
      aria-label="Navegación de página"
      className="bg-gnozin-ice/60 border-b border-gnozin-blue/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ol className="flex items-center gap-1 py-3 text-sm">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 rounded px-2 py-1 font-medium text-gnozin-blue transition-colors hover:bg-gnozin-blue/10 hover:text-gnozin-navy"
              aria-label="Ir a Inicio"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Inicio</span>
            </Link>
          </li>
          {crumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1">
              <ChevronRight
                className="h-4 w-4 text-gnozin-steel"
                aria-hidden="true"
              />
              {i === crumbs.length - 1 ? (
                <span
                  className="rounded px-2 py-1 font-semibold text-gnozin-navy"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="rounded px-2 py-1 font-medium text-gnozin-blue transition-colors hover:bg-gnozin-blue/10 hover:text-gnozin-navy"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
