"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/empieza-aqui", label: "Empieza Aquí" },
  { href: "/programa", label: "Programa" },
  { href: "/libro", label: "Libro" },
  { href: "/quien-es-gnozin", label: "Gnozin" },
  { href: "/casos", label: "Casos" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/gnozin-logo-dark.png"
            alt="Autoestima Empresarial — Gnozin Navarro"
            width={180}
            height={37}
            className="h-8 w-auto"
            priority
          />
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
            <Link href="/contacto">Agendar Sesión</Link>
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
                <Link href="/contacto" onClick={() => setOpen(false)}>
                  Agendar Sesión
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
