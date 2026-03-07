"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogIn, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/empieza-aqui", label: "Empieza Aquí" },
  { href: "/taller", label: "Taller" },
  { href: "/calendario", label: "Calendario" },
  { href: "/biblioteca", label: "Biblioteca" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-base font-black uppercase tracking-tight text-gnozin-navy sm:text-lg md:text-xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Autoestima<span className="text-gnozin-blue"> Empresarial</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gnozin-steel transition-colors hover:bg-gnozin-ice hover:text-gnozin-blue"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="ml-2 bg-gnozin-blue text-white hover:bg-gnozin-navy" size="sm">
            <Link href="/login">
              <LogIn className="mr-1.5 h-4 w-4" />
              Iniciar Sesión
            </Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex shrink-0 items-center justify-center rounded-lg p-2 hover:bg-gnozin-ice transition-all outline-none select-none md:hidden">
            <Menu className="h-6 w-6 text-gnozin-navy" />
            <span className="sr-only">Menú</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-gnozin-blue/10 p-0">
            {/* Mobile header */}
            <div className="border-b border-gnozin-blue/10 px-5 py-4">
              <p
                className="text-base font-black uppercase tracking-tight text-gnozin-navy"
                style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
              >
                Autoestima<span className="text-gnozin-blue"> Empresarial</span>
              </p>
              <p className="mt-0.5 text-xs text-gnozin-steel">
                Un modelo de Gnozin Navarro
              </p>
            </div>

            {/* Mobile links */}
            <nav className="flex flex-col px-3 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[17px] font-medium text-gnozin-navy transition-colors hover:bg-gnozin-ice active:bg-gnozin-ice"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-gnozin-blue/40 transition-transform group-hover:translate-x-1 group-hover:text-gnozin-blue" />
                </Link>
              ))}

              <div className="mx-4 my-3 border-t border-gnozin-blue/10" />

              <Link
                href="/quien-es-gnozin"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[17px] font-medium text-gnozin-steel transition-colors hover:bg-gnozin-ice active:bg-gnozin-ice"
              >
                Gnozin Navarro
                <ArrowRight className="h-4 w-4 text-gnozin-blue/40 transition-transform group-hover:translate-x-1 group-hover:text-gnozin-blue" />
              </Link>
              <Link
                href="/libro"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[17px] font-medium text-gnozin-steel transition-colors hover:bg-gnozin-ice active:bg-gnozin-ice"
              >
                Libro
                <ArrowRight className="h-4 w-4 text-gnozin-blue/40 transition-transform group-hover:translate-x-1 group-hover:text-gnozin-blue" />
              </Link>

              <div className="mx-4 my-3 border-t border-gnozin-blue/10" />

              <Button
                asChild
                className="mx-3 mt-1 bg-gnozin-blue py-6 text-base font-bold text-white hover:bg-gnozin-navy"
              >
                <Link href="/login" onClick={() => setOpen(false)}>
                  <LogIn className="mr-2 h-5 w-5" />
                  Iniciar Sesión
                </Link>
              </Button>
            </nav>

            {/* Mobile footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-gnozin-blue/10 bg-gnozin-cloud px-5 py-3">
              <p className="text-center text-[11px] text-gnozin-steel/60">
                &copy; {new Date().getFullYear()} Gnozin Navarro &middot; Todos los derechos reservados
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
