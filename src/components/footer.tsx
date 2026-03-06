import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { NewsletterSignup } from "@/components/newsletter-signup";

export function Footer() {
  return (
    <footer className="border-t bg-gnozin-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h3
                className="mb-1 text-lg font-bold uppercase tracking-wide"
                style={{ fontFamily: "Montserrat, Arial Black, sans-serif" }}
              >
                Contenido para líderes PyME
              </h3>
              <p className="text-sm text-blue-200">
                Ideas prácticas sobre liderazgo, delegación y crecimiento
                empresarial. Sin spam — solo valor.
              </p>
            </div>
            <NewsletterSignup />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/images/gnozin-logo-white.png"
              alt="Autoestima Empresarial — Gnozin Navarro"
              width={180}
              height={37}
              className="mb-3 h-8 w-auto"
            />
            <p className="text-sm leading-relaxed text-blue-200">
              Claridad, identidad y dirección para líderes de empresas PyME.
              +30 años de experiencia transformando líderes y empresas reales.
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
                { href: "/programa", label: "Programa Encaje" },
                { href: "/libro", label: "Libro" },
                { href: "/quien-es-gnozin", label: "¿Quién es Gnozin?" },
                { href: "/casos", label: "Casos de Éxito" },
                { href: "/contacto", label: "Contacto" },
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
            className="text-sm font-medium uppercase tracking-[3px] text-gnozin-sky"
            style={{ fontFamily: "Montserrat, Arial Black, sans-serif" }}
          >
            @GNOZIN
          </p>
          <p className="text-xs text-blue-300">
            gnozin.com &middot; &copy; {new Date().getFullYear()} Gnozin Navarro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
