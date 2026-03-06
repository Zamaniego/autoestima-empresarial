"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would connect to a form service
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="gnozin-gradient py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge className="mb-4 bg-white/20 text-white">
            <Calendar className="mr-1 h-3 w-3" /> Sin compromiso
          </Badge>
          <h1
            className="mb-4 text-3xl font-black uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            El primer paso es hablar
          </h1>
          <p className="mx-auto max-w-xl text-lg text-blue-100">
            Si llegaste hasta aquí es porque algo no está funcionando como debería.
            Agenda 30 minutos con Gnozin Navarro — sin costo, sin compromiso —
            y empieza a ver con claridad lo que hoy se siente confuso.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="border-gnozin-sky/20">
                <CardHeader>
                  <CardTitle
                    className="text-xl text-gnozin-navy"
                    style={{
                      fontFamily:
                        "var(--font-heading), Montserrat, sans-serif",
                    }}
                  >
                    Envía tu mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="rounded-lg bg-gnozin-ice p-8 text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gnozin-blue/10">
                        <Send className="h-7 w-7 text-gnozin-blue" />
                      </div>
                      <h3
                        className="mb-2 text-lg font-bold text-gnozin-navy"
                        style={{
                          fontFamily:
                            "var(--font-heading), Montserrat, sans-serif",
                        }}
                      >
                        ¡Mensaje enviado!
                      </h3>
                      <p className="text-sm text-gnozin-steel">
                        Te contactaremos en las próximas 24 horas. Gracias por
                        tu interés en Autoestima Empresarial.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre completo</Label>
                          <Input
                            id="name"
                            placeholder="Tu nombre"
                            required
                            className="border-gnozin-sky/30 focus-visible:ring-gnozin-blue"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo electrónico</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@empresa.com"
                            required
                            className="border-gnozin-sky/30 focus-visible:ring-gnozin-blue"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono (opcional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+52 667 ..."
                            className="border-gnozin-sky/30 focus-visible:ring-gnozin-blue"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa</Label>
                          <Input
                            id="company"
                            placeholder="Nombre de tu empresa"
                            className="border-gnozin-sky/30 focus-visible:ring-gnozin-blue"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employees">¿Cuántos empleados tienes?</Label>
                        <select
                          id="employees"
                          className="flex h-10 w-full rounded-md border border-gnozin-sky/30 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gnozin-blue"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Selecciona
                          </option>
                          <option value="1-5">1 a 5</option>
                          <option value="6-15">6 a 15</option>
                          <option value="16-35">16 a 35</option>
                          <option value="36+">36 o más</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          ¿Qué es lo que más te frustra de tu empresa hoy?
                        </Label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="Ej: Mi empresa no funciona si no estoy presente..."
                          className="flex w-full rounded-md border border-gnozin-sky/30 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gnozin-blue"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gnozin-blue text-white hover:bg-gnozin-navy"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensaje
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:col-span-2">
              <Card className="border-gnozin-sky/20">
                <CardContent className="p-6">
                  <h3
                    className="mb-4 text-sm font-bold uppercase tracking-widest text-gnozin-navy"
                    style={{
                      fontFamily:
                        "var(--font-heading), Montserrat, sans-serif",
                    }}
                  >
                    Contacto directo
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gnozin-blue/10">
                        <Mail className="h-4 w-4 text-gnozin-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-gnozin-steel">Email</p>
                        <a
                          href="mailto:yosoy@gnozin.com"
                          className="text-sm font-semibold text-gnozin-navy hover:text-gnozin-blue"
                        >
                          yosoy@gnozin.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gnozin-blue/10">
                        <Phone className="h-4 w-4 text-gnozin-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-gnozin-steel">Teléfono / WhatsApp</p>
                        <a
                          href="tel:+526677516464"
                          className="text-sm font-semibold text-gnozin-navy hover:text-gnozin-blue"
                        >
                          +52 667 751 6464
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gnozin-blue/10">
                        <MapPin className="h-4 w-4 text-gnozin-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-gnozin-steel">Ubicación</p>
                        <p className="text-sm font-semibold text-gnozin-navy">
                          Culiacán, Sinaloa, México
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gnozin-blue bg-gnozin-blue text-white">
                <CardContent className="p-6">
                  <MessageCircle className="mb-3 h-8 w-8 text-white/80" />
                  <h3
                    className="mb-2 text-lg font-bold"
                    style={{
                      fontFamily:
                        "var(--font-heading), Montserrat, sans-serif",
                    }}
                  >
                    Sesión Diagnóstica
                  </h3>
                  <p className="mb-4 text-sm text-blue-100">
                    30 minutos 1-a-1 con Gnozin Navarro. Analizamos tu situación
                    y te damos un primer diagnóstico. Sin costo, sin compromiso.
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
                    asChild
                  >
                    <a
                      href="https://wa.me/526677516464?text=Hola%20Gnozin,%20me%20interesa%20una%20sesión%20diagnóstica%20de%20Autoestima%20Empresarial"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar por WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <div className="rounded-lg bg-gnozin-ice p-5 text-center">
                <p
                  className="text-sm font-bold uppercase tracking-[3px] text-gnozin-navy"
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  }}
                >
                  @GNOZIN
                </p>
                <p className="mt-1 text-xs text-gnozin-steel">
                  Síguenos en redes para contenido de liderazgo empresarial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
