"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-gnozin-blue/20 bg-white/95 shadow-2xl backdrop-blur sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-sm sm:rounded-xl sm:border"
        >
          <div className="flex items-center gap-3 p-3 sm:p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gnozin-blue/10">
              <GraduationCap className="h-5 w-5 text-gnozin-blue" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gnozin-navy">
                1er Taller Autoestima Empresarial
              </p>
              <p className="text-xs text-gnozin-steel">
                6 sesiones · 90 min · Vía Zoom
              </p>
            </div>
            <Button
              size="sm"
              className="shrink-0 bg-gnozin-blue text-white hover:bg-gnozin-navy"
              asChild
            >
              <Link href="/taller">Ver Taller</Link>
            </Button>
            <button
              onClick={() => setDismissed(true)}
              className="shrink-0 text-gnozin-steel hover:text-gnozin-navy"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
