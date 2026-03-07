"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/empieza-aqui", label: "Empieza Aquí" },
  { href: "/taller", label: "Taller" },
  { href: "/calendario", label: "Calendario" },
  { href: "/biblioteca", label: "Biblioteca" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "nav-scrolled shadow-lg shadow-black/10"
          : "nav-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`text-base font-black uppercase tracking-tight transition-colors duration-500 sm:text-lg ${
              scrolled ? "text-white" : "text-white"
            }`}
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            Autoestima<span className="text-gnozin-sky"> Empresarial</span>
          </span>
        </Link>

        {/* Desktop nav — Peterson-style minimal links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-blue-200/80 hover:text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="editorial-cta ml-4 text-gnozin-sky"
          >
            Iniciar Sesión
          </Link>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex shrink-0 items-center justify-center rounded-lg p-2 transition-all outline-none select-none md:hidden hover:bg-white/10">
            <Menu className="h-6 w-6 text-white" />
            <span className="sr-only">Menú</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-white/10 bg-gnozin-dark p-0">
            {/* Mobile header */}
            <div className="border-b border-white/10 px-5 py-5">
              <p
                className="text-base font-black uppercase tracking-tight text-white"
                style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
              >
                Autoestima<span className="text-gnozin-sky"> Empresarial</span>
              </p>
              <p className="mt-1 text-xs text-blue-200/60">
                Un modelo de Gnozin Navarro
              </p>
            </div>

            {/* Mobile links */}
            <nav className="flex flex-col px-3 py-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-4 text-[17px] font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white active:bg-white/10"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-gnozin-sky/40 transition-transform group-hover:translate-x-1 group-hover:text-gnozin-sky" />
                </Link>
              ))}

              <div className="mx-4 my-3 border-t border-white/10" />

              <Link
                href="/quien-es-gnozin"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-4 text-[17px] font-medium text-blue-200/70 transition-colors hover:bg-white/5 hover:text-white active:bg-white/10"
              >
                Gnozin Navarro
                <ArrowRight className="h-4 w-4 text-gnozin-sky/40 transition-transform group-hover:translate-x-1 group-hover:text-gnozin-sky" />
              </Link>
              <Link
                href="/libro"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-4 text-[17px] font-medium text-blue-200/70 transition-colors hover:bg-white/5 hover:text-white active:bg-white/10"
              >
                Libro
                <ArrowRight className="h-4 w-4 text-gnozin-sky/40 transition-transform group-hover:translate-x-1 group-hover:text-gnozin-sky" />
              </Link>

              <div className="mx-4 my-3 border-t border-white/10" />

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="editorial-cta mx-4 mt-2 inline-block py-4 text-gnozin-sky"
              >
                Iniciar Sesión
              </Link>
            </nav>

            {/* Mobile footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-gnozin-navy px-5 py-3">
              <p className="text-center text-[11px] text-blue-200/40">
                &copy; {new Date().getFullYear()} Gnozin Navarro &middot; Todos los derechos reservados
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
