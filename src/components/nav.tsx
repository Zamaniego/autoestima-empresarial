"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogIn } from "lucide-react";
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo — Text-based "Autoestima Empresarial" */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-lg font-black uppercase tracking-tight text-gnozin-navy sm:text-xl"
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
          <Button asChild className="ml-2 bg-gnozin-blue hover:bg-gnozin-navy text-white" size="sm">
            <Link href="/login">
              <LogIn className="mr-1.5 h-4 w-4" />
              Iniciar Sesión
            </Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden inline-flex shrink-0 items-center justify-center rounded-lg size-8 hover:bg-muted hover:text-foreground transition-all outline-none select-none">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menú</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="mt-8 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-gnozin-steel transition-colors hover:bg-gnozin-ice hover:text-gnozin-blue"
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-gnozin-blue hover:bg-gnozin-navy text-white">
                <Link href="/login" onClick={() => setOpen(false)}>
                  <LogIn className="mr-1.5 h-4 w-4" />
                  Iniciar Sesión
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
