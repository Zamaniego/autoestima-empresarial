import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gnozin-navy text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p
              className="mb-3 text-base font-black uppercase tracking-wide sm:text-lg"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
              <span className="text-white">Autoestima</span>{" "}
              <span className="text-gnozin-sky">Empresarial</span>
            </p>
            <p className="text-sm leading-relaxed text-blue-200/80 sm:text-[15px]">
              Un marco antropológico para proteger la singularidad del
              emprendedor dentro del sistema económico y social.
            </p>
            <p className="mt-2 text-sm font-semibold text-gnozin-sky">
              Por Gnozin Navarro
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gnozin-sky sm:text-sm"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
              Navegación
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[15px] sm:grid-cols-1 sm:gap-y-2 sm:text-sm">
              {[
                { href: "/empieza-aqui", label: "Empieza Aquí" },
                { href: "/taller", label: "Taller" },
                { href: "/libro", label: "Libro" },
                { href: "/quien-es-gnozin", label: "Gnozin Navarro" },
                { href: "/calendario", label: "Calendario" },
                { href: "/biblioteca", label: "Biblioteca" },
                { href: "/login", label: "Iniciar Sesión" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-blue-200/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gnozin-sky sm:text-sm"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
              Contacto
            </h4>
            <ul className="space-y-3 text-[15px] text-blue-200/80 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gnozin-sky" />
                <a href="mailto:yosoy@gnozin.com" className="hover:text-white">
                  yosoy@gnozin.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gnozin-sky" />
                <a href="tel:+526677516464" className="hover:text-white">
                  +52 667 751 6464
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gnozin-sky" />
                <span>Culiacán, Sinaloa, México</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gnozin-sky sm:text-sm"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
              Síguenos
            </h4>
            <div className="flex gap-3">
              {[
                { href: "https://www.instagram.com/gnozin", label: "IG" },
                { href: "https://www.facebook.com/gnozin", label: "FB" },
                { href: "https://www.tiktok.com/@gnozin.com", label: "TK" },
                { href: "https://www.youtube.com/@gnozin", label: "YT" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gnozin-sky transition-all hover:border-gnozin-sky/50 hover:bg-gnozin-blue hover:text-white sm:h-9 sm:w-9"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Watermark */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <p
            className="text-xs font-bold uppercase tracking-[3px] text-gnozin-sky/70 sm:text-sm sm:tracking-[4px]"
            style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
          >
            Autoestima Empresarial
          </p>
          <p className="text-[11px] text-blue-300/60 sm:text-xs">
            Un modelo de Gnozin Navarro &middot; &copy;{" "}
            {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
