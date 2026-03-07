import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autoestima Empresarial — SER, HACER, TENER",
  description:
    "Modelo que protege la singularidad del emprendedor dentro del sistema económico y social. Talleres, biblioteca y herramientas para líderes PyME.",
  openGraph: {
    title: "Autoestima Empresarial",
    description:
      "Modelo que protege la singularidad del emprendedor dentro del sistema económico y social.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Nav />
        <BreadcrumbNav />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
