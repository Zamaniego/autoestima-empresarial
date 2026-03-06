/* ── Triage Data for Autoestima Empresarial ── */

export type TriageProfile = "g1" | "g2" | null;

export interface TriageQuestion {
  id: string;
  text: string;
  options: { label: string; value: string; points: { g1: number; g2: number } }[];
}

export interface TriageSubQuestion {
  id: string;
  profile: TriageProfile;
  text: string;
  options: { label: string; value: string; tag: string }[];
}

export interface TriageResult {
  profile: TriageProfile;
  headline: string;
  description: string;
  pains: string[];
  cta: string;
  ctaHref: string;
}

/* ── Step 1: Profile Detection ── */
export const triageQuestions: TriageQuestion[] = [
  {
    id: "q1",
    text: "¿Cómo llegaste a dirigir tu empresa?",
    options: [
      { label: "Yo la fundé desde cero", value: "founded", points: { g1: 3, g2: 0 } },
      { label: "La heredé o me la pasaron", value: "inherited", points: { g1: 0, g2: 3 } },
      { label: "Compré un negocio existente", value: "bought", points: { g1: 2, g2: 1 } },
    ],
  },
  {
    id: "q2",
    text: "¿Cuál es tu mayor reto hoy como líder?",
    options: [
      { label: "No puedo delegar — todo depende de mí", value: "delegate", points: { g1: 3, g2: 1 } },
      { label: "No siento que la empresa sea mía", value: "identity", points: { g1: 0, g2: 3 } },
      { label: "No sé cómo cobrar lo que vale mi trabajo", value: "pricing", points: { g1: 3, g2: 1 } },
      { label: "Los empleados no me respetan como líder", value: "respect", points: { g1: 1, g2: 3 } },
    ],
  },
  {
    id: "q3",
    text: "¿Cuántos empleados tiene tu empresa?",
    options: [
      { label: "1 a 5", value: "micro", points: { g1: 2, g2: 1 } },
      { label: "6 a 15", value: "small", points: { g1: 2, g2: 2 } },
      { label: "16 a 35", value: "medium", points: { g1: 2, g2: 2 } },
      { label: "36 o más", value: "large", points: { g1: 1, g2: 2 } },
    ],
  },
];

/* ── Step 2: Sub-questions per profile ── */
export const subQuestionsG1: TriageSubQuestion[] = [
  {
    id: "sg1-1",
    profile: "g1",
    text: "¿Qué te quita el sueño esta semana?",
    options: [
      { label: "El flujo de efectivo", value: "cashflow", tag: "finanzas" },
      { label: "Un conflicto con un empleado clave", value: "conflict", tag: "liderazgo" },
      { label: "Siento que mi empresa no crece", value: "growth", tag: "estrategia" },
      { label: "Estoy agotado y no veo la salida", value: "burnout", tag: "identidad" },
    ],
  },
  {
    id: "sg1-2",
    profile: "g1",
    text: "Si pudieras resolver UNA cosa en 90 días, ¿cuál sería?",
    options: [
      { label: "Que la empresa funcione sin mí un mes", value: "independence", tag: "delegación" },
      { label: "Duplicar mis ingresos", value: "revenue", tag: "finanzas" },
      { label: "Tener claridad sobre hacia dónde voy", value: "clarity", tag: "identidad" },
      { label: "Formar un equipo confiable", value: "team", tag: "liderazgo" },
    ],
  },
];

export const subQuestionsG2: TriageSubQuestion[] = [
  {
    id: "sg2-1",
    profile: "g2",
    text: "¿Qué describe mejor tu situación?",
    options: [
      { label: "Me comparán constantemente con el fundador", value: "comparison", tag: "identidad" },
      { label: "Quiero modernizar pero me bloquean", value: "modernize", tag: "cambio" },
      { label: "No sé si quiero seguir con esto", value: "doubt", tag: "vocación" },
      { label: "Necesito ganarme el respeto por mérito propio", value: "merit", tag: "liderazgo" },
    ],
  },
  {
    id: "sg2-2",
    profile: "g2",
    text: "¿Qué necesitas más en este momento?",
    options: [
      { label: "Encontrar mi propia identidad como líder", value: "identity", tag: "identidad" },
      { label: "Hacer de la empresa algo mío sin destruir lo que funciona", value: "ownership", tag: "transición" },
      { label: "Claridad sobre si quedarme o hacer algo diferente", value: "clarity", tag: "vocación" },
      { label: "Herramientas para gestionar la transición generacional", value: "tools", tag: "estrategia" },
    ],
  },
];

/* ── Results ── */
export const triageResults: Record<"g1" | "g2", TriageResult> = {
  g1: {
    profile: "g1",
    headline: "Eres un Fundador que necesita claridad",
    description:
      "Fundaste tu empresa con pasión, pero hoy sientes que todo depende de ti. " +
      "El Programa Encaje te ayuda a descubrir tu singularidad como líder, " +
      "definir el valor real de tu empresa, y diseñar un plan para crecer sin quemarte.",
    pains: [
      "No puedes delegar — todo pasa por ti",
      "Cobras menos de lo que vale tu trabajo",
      "Tu empresa no crece como debería",
      "Estás agotado y sin tiempo para pensar",
    ],
    cta: "Agenda tu sesión diagnóstica gratuita",
    ctaHref: "/contacto",
  },
  g2: {
    profile: "g2",
    headline: "Eres Segunda Generación buscando tu identidad",
    description:
      "Recibiste una empresa que no fundaste, y sientes que necesitas hacerla tuya. " +
      "El Programa Encaje te guía para encontrar tu propia voz como líder, " +
      "ganar legitimidad por mérito propio y modernizar sin perder lo que funciona.",
    pains: [
      "Sientes que la empresa no es tuya",
      "Te comparán con el fundador",
      "Quieres modernizar pero hay resistencia",
      "Dudas si este es realmente tu camino",
    ],
    cta: "Agenda tu sesión diagnóstica gratuita",
    ctaHref: "/contacto",
  },
};

/* ── Scoring Helper ── */
export function calculateProfile(
  answers: Record<string, string>,
  questions: TriageQuestion[]
): TriageProfile {
  let g1 = 0;
  let g2 = 0;

  for (const q of questions) {
    const answer = answers[q.id];
    const option = q.options.find((o) => o.value === answer);
    if (option) {
      g1 += option.points.g1;
      g2 += option.points.g2;
    }
  }

  if (g1 === g2) return null;
  return g1 > g2 ? "g1" : "g2";
}
