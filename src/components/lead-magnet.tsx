"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In production, connect to email service
      setSubmitted(true);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-gnozin-blue/20 bg-white shadow-xl">
      <div className="grid lg:grid-cols-5">
        {/* Left: Visual */}
        <div className="gnozin-gradient flex flex-col items-center justify-center p-8 text-white lg:col-span-2">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20">
            <FileText className="h-10 w-10" />
          </div>
          <h3
            className="mb-2 text-center text-xl font-bold"
            style={{
              fontFamily: "var(--font-heading), Montserrat, sans-serif",
            }}
          >
            GUÍA GRATUITA
          </h3>
          <p className="text-center text-sm text-blue-100">
            Los 5 Síntomas de Baja Autoestima Empresarial
          </p>
          <div className="mt-4 space-y-2 text-sm text-blue-200">
            <p className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gnozin-sky" />
              Diagnóstico en 5 minutos
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gnozin-sky" />
              Ejercicios prácticos
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gnozin-sky" />
              Plan de acción inmediato
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex flex-col justify-center p-8 lg:col-span-3">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gnozin-blue/10">
                <CheckCircle2 className="h-8 w-8 text-gnozin-blue" />
              </div>
              <h3
                className="mb-2 text-xl font-bold text-gnozin-navy"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                ¡Tu guía está en camino!
              </h3>
              <p className="text-sm text-gnozin-steel">
                Revisa tu bandeja de entrada. Si no la ves, revisa spam.
              </p>
            </motion.div>
          ) : (
            <>
              <h3
                className="mb-2 text-2xl font-bold text-gnozin-navy"
                style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                }}
              >
                Descarga gratis
              </h3>
              <p className="mb-6 text-sm text-gnozin-steel">
                Descubre si tu empresa sufre de baja autoestima empresarial —
                y qué puedes hacer hoy mismo para empezar a cambiar.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gnozin-steel" />
                    <Input
                      type="email"
                      placeholder="tu@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-gnozin-sky/30 pl-10 focus-visible:ring-gnozin-blue"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="shrink-0 bg-gnozin-blue text-white hover:bg-gnozin-navy"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Descargar
                  </Button>
                </div>
                <p className="text-xs text-gnozin-steel">
                  Sin spam. Solo contenido de valor para líderes PyME.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
