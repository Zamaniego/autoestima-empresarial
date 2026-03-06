"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 rounded-lg bg-white/10 p-4"
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-gnozin-sky" />
        <p className="text-sm">
          ¡Listo! Recibirás contenido de liderazgo cada semana.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
        <Input
          type="email"
          placeholder="tu@empresa.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/50 focus-visible:ring-white/50"
        />
      </div>
      <Button
        type="submit"
        className="shrink-0 bg-white font-bold text-gnozin-navy hover:bg-gnozin-ice"
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
