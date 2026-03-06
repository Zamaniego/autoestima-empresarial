"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, RotateCcw, CheckCircle2 } from "lucide-react";
import {
  triageQuestions,
  subQuestionsG1,
  subQuestionsG2,
  triageResults,
  calculateProfile,
  type TriageProfile,
  type TriageSubQuestion,
} from "@/lib/triage-data";

type QuizStep = "intro" | "profile" | "sub" | "result";

export function TriageQuiz() {
  const [step, setStep] = useState<QuizStep>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [currentSub, setCurrentSub] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [subAnswers, setSubAnswers] = useState<Record<string, string>>({});
  const [profile, setProfile] = useState<TriageProfile>(null);

  const totalProfileQs = triageQuestions.length;

  const subQuestions: TriageSubQuestion[] =
    profile === "g1" ? subQuestionsG1 : profile === "g2" ? subQuestionsG2 : [];

  const totalSteps = totalProfileQs + subQuestions.length;
  const currentStep =
    step === "profile"
      ? currentQ + 1
      : step === "sub"
        ? totalProfileQs + currentSub + 1
        : step === "result"
          ? totalSteps
          : 0;

  const progressPct = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  /* ── Handlers ── */
  const handleStart = useCallback(() => {
    setStep("profile");
    setCurrentQ(0);
    setAnswers({});
    setSubAnswers({});
    setProfile(null);
  }, []);

  const handleProfileAnswer = useCallback(
    (questionId: string, value: string) => {
      const next = { ...answers, [questionId]: value };
      setAnswers(next);

      if (currentQ < totalProfileQs - 1) {
        setCurrentQ((p) => p + 1);
      } else {
        const detected = calculateProfile(next, triageQuestions);
        setProfile(detected);
        if (detected) {
          setStep("sub");
          setCurrentSub(0);
        } else {
          // Tie — default to g1
          setProfile("g1");
          setStep("sub");
          setCurrentSub(0);
        }
      }
    },
    [answers, currentQ, totalProfileQs]
  );

  const handleSubAnswer = useCallback(
    (questionId: string, value: string) => {
      const next = { ...subAnswers, [questionId]: value };
      setSubAnswers(next);

      if (currentSub < subQuestions.length - 1) {
        setCurrentSub((p) => p + 1);
      } else {
        setStep("result");
      }
    },
    [subAnswers, currentSub, subQuestions.length]
  );

  const handleBack = useCallback(() => {
    if (step === "profile" && currentQ > 0) {
      setCurrentQ((p) => p - 1);
    } else if (step === "sub" && currentSub > 0) {
      setCurrentSub((p) => p - 1);
    } else if (step === "sub" && currentSub === 0) {
      setStep("profile");
      setCurrentQ(totalProfileQs - 1);
    }
  }, [step, currentQ, currentSub, totalProfileQs]);

  const handleReset = useCallback(() => {
    setStep("intro");
    setCurrentQ(0);
    setCurrentSub(0);
    setAnswers({});
    setSubAnswers({});
    setProfile(null);
  }, []);

  /* ── Render: Intro ── */
  if (step === "intro") {
    return (
      <Card className="mx-auto max-w-2xl border-gnozin-sky/30 shadow-lg">
        <CardHeader className="text-center">
          <Badge className="mx-auto mb-2 bg-gnozin-blue text-white">
            Diagnóstico gratuito
          </Badge>
          <CardTitle
            className="text-2xl text-gnozin-navy sm:text-3xl"
            style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
          >
            ¿Qué tipo de líder eres?
          </CardTitle>
          <CardDescription className="text-base text-gnozin-steel">
            Responde 5 preguntas y descubre el camino que mejor encaja con tu
            situación como líder empresarial.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center pb-8">
          <Button
            size="lg"
            className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
            onClick={handleStart}
          >
            Comenzar diagnóstico
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  /* ── Render: Result ── */
  if (step === "result" && profile) {
    const result = triageResults[profile];
    return (
      <Card className="mx-auto max-w-2xl border-gnozin-sky/30 shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gnozin-blue/10">
            <CheckCircle2 className="h-8 w-8 text-gnozin-blue" />
          </div>
          <CardTitle
            className="text-2xl text-gnozin-navy sm:text-3xl"
            style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
          >
            {result.headline}
          </CardTitle>
          <CardDescription className="mt-2 text-base leading-relaxed text-gnozin-steel">
            {result.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-8">
          {/* Pain points */}
          <div className="rounded-lg bg-gnozin-ice p-5">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-widest text-gnozin-navy"
              style={{
                fontFamily: "var(--font-heading), Montserrat, sans-serif",
              }}
            >
              ¿Te identificas?
            </p>
            <ul className="space-y-2">
              {result.pains.map((pain, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gnozin-navy">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-gnozin-blue" />
                  {pain}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags from sub-answers */}
          {Object.keys(subAnswers).length > 0 && (
            <div className="flex flex-wrap gap-2">
              {subQuestions
                .map((sq) => {
                  const ans = subAnswers[sq.id];
                  const opt = sq.options.find((o) => o.value === ans);
                  return opt?.tag;
                })
                .filter(Boolean)
                .map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="border-gnozin-sky text-gnozin-navy"
                  >
                    {tag}
                  </Badge>
                ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-gnozin-blue text-white hover:bg-gnozin-navy"
              asChild
            >
              <a href={result.ctaHref}>
                {result.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gnozin-sky text-gnozin-navy hover:bg-gnozin-ice"
              onClick={handleReset}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Repetir diagnóstico
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  /* ── Render: Questions (Profile + Sub) ── */
  const isProfileStep = step === "profile";
  const question = isProfileStep
    ? triageQuestions[currentQ]
    : subQuestions[currentSub];

  if (!question) return null;

  const options = isProfileStep
    ? triageQuestions[currentQ].options
    : subQuestions[currentSub].options;

  return (
    <Card className="mx-auto max-w-2xl border-gnozin-sky/30 shadow-lg">
      <CardHeader>
        <div className="mb-2 flex items-center justify-between text-xs text-gnozin-steel">
          <span>
            Pregunta {currentStep} de {totalSteps}
          </span>
          {profile && (
            <Badge variant="outline" className="border-gnozin-sky text-gnozin-navy text-xs">
              {profile === "g1" ? "Fundador" : "Heredero"}
            </Badge>
          )}
        </div>
        <Progress value={progressPct} className="h-1.5 [&>div]:bg-gnozin-blue" />
        <CardTitle
          className="mt-4 text-xl text-gnozin-navy"
          style={{ fontFamily: "var(--font-heading), Montserrat, sans-serif" }}
        >
          {question.text}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() =>
                  isProfileStep
                    ? handleProfileAnswer(question.id, opt.value)
                    : handleSubAnswer(question.id, opt.value)
                }
                className="w-full rounded-lg border border-gnozin-sky/30 p-4 text-left text-sm
                  text-gnozin-navy transition-all hover:border-gnozin-blue hover:bg-gnozin-ice
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gnozin-blue"
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Back button */}
        {(currentQ > 0 || step === "sub") && (
          <button
            onClick={handleBack}
            className="mt-2 flex items-center gap-1 text-xs text-gnozin-steel transition-colors hover:text-gnozin-navy"
          >
            <ArrowLeft className="h-3 w-3" />
            Anterior
          </button>
        )}
      </CardContent>
    </Card>
  );
}
