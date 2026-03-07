"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Layers, BookOpen, GraduationCap, Search } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "Inicio" },
  { href: "/modelo", icon: Layers, label: "Modelo" },
  { href: "/biblioteca", icon: BookOpen, label: "Biblioteca" },
  { href: "/taller", icon: GraduationCap, label: "Taller" },
  { href: "/empieza-aqui", icon: Search, label: "Explorar" },
];

export function MobileNavbar() {
  const pathname = usePathname();

  return (
    <nav className="mobile-navbar" aria-label="Navegación móvil">
      <div className="mobile-navbar-inner">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-navbar-item ${isActive ? "active" : ""}`}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2.2 : 1.5} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
