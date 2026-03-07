import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-gnozin-navy text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p
              className="mb-2 text-lg font-black uppercase tracking-wide"
              style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
            >
              Autoestima Empresarial
            </p>
            <p className="text-sm leading-relaxed text-blue-200">
              Un marco antropológico para proteger la singularidad del
              emprendedor dentro del sistema económico y social. Por Gnozin
              Navarro.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gnozin-sky">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-blue-200">
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
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gnozin-sky">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="mailto:yosoy@gnozin.com" className="hover:text-white">
                  yosoy@gnozin.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="tel:+526677516464" className="hover:text-white">
                  +52 667 751 6464
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Culiacán, Sinaloa, México</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gnozin-sky">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white transition-colors hover:bg-gnozin-blue"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Watermark */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p
            className="text-sm font-bold uppercase tracking-[3px] text-gnozin-sky"
            style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
          >
            Autoestima Empresarial
          </p>
          <p className="text-xs text-blue-300">
            Un modelo de Gnozin Navarro &middot; &copy;{" "}
            {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
