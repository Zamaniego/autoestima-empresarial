import { describe, it, expect } from "vitest";
import {
  calculateProfile,
  triageQuestions,
  subQuestionsG1,
  subQuestionsG2,
  triageResults,
  type TriageProfile,
} from "@/lib/triage-data";

/* ── Data Integrity ── */
describe("triage data integrity", () => {
  it("has exactly 3 profile questions", () => {
    expect(triageQuestions).toHaveLength(3);
  });

  it("every question has a unique id", () => {
    const ids = triageQuestions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every option has g1 + g2 point fields", () => {
    for (const q of triageQuestions) {
      for (const opt of q.options) {
        expect(opt.points).toHaveProperty("g1");
        expect(opt.points).toHaveProperty("g2");
        expect(typeof opt.points.g1).toBe("number");
        expect(typeof opt.points.g2).toBe("number");
      }
    }
  });

  it("has sub-questions for g1 profile", () => {
    expect(subQuestionsG1.length).toBeGreaterThan(0);
    for (const sq of subQuestionsG1) {
      expect(sq.profile).toBe("g1");
      expect(sq.options.length).toBeGreaterThan(0);
    }
  });

  it("has sub-questions for g2 profile", () => {
    expect(subQuestionsG2.length).toBeGreaterThan(0);
    for (const sq of subQuestionsG2) {
      expect(sq.profile).toBe("g2");
      expect(sq.options.length).toBeGreaterThan(0);
    }
  });

  it("every sub-question option has a tag", () => {
    const allSub = [...subQuestionsG1, ...subQuestionsG2];
    for (const sq of allSub) {
      for (const opt of sq.options) {
        expect(opt.tag).toBeTruthy();
      }
    }
  });

  it("has results for both profiles", () => {
    expect(triageResults.g1).toBeDefined();
    expect(triageResults.g2).toBeDefined();
    expect(triageResults.g1.profile).toBe("g1");
    expect(triageResults.g2.profile).toBe("g2");
  });

  it("results have required fields", () => {
    for (const key of ["g1", "g2"] as const) {
      const r = triageResults[key];
      expect(r.headline).toBeTruthy();
      expect(r.description).toBeTruthy();
      expect(r.pains.length).toBeGreaterThan(0);
      expect(r.cta).toBeTruthy();
      expect(r.ctaHref).toBeTruthy();
    }
  });
});

/* ── calculateProfile ── */
describe("calculateProfile", () => {
  it("returns g1 for a clear founder profile", () => {
    const answers: Record<string, string> = {
      q1: "founded", // g1:3 g2:0
      q2: "delegate", // g1:3 g2:1
      q3: "micro", // g1:2 g2:1
    };
    // g1=8, g2=2
    expect(calculateProfile(answers, triageQuestions)).toBe("g1");
  });

  it("returns g2 for a clear heir profile", () => {
    const answers: Record<string, string> = {
      q1: "inherited", // g1:0 g2:3
      q2: "identity", // g1:0 g2:3
      q3: "large", // g1:1 g2:2
    };
    // g1=1, g2=8
    expect(calculateProfile(answers, triageQuestions)).toBe("g2");
  });

  it("returns null on exact tie", () => {
    // Construct a tie scenario
    const answers: Record<string, string> = {
      q1: "bought", // g1:2 g2:1
      q2: "respect", // g1:1 g2:3
      q3: "small", // g1:2 g2:2
    };
    // g1 = 2+1+2 = 5, g2 = 1+3+2 = 6 → NOT a tie, g2 wins
    const result = calculateProfile(answers, triageQuestions);
    expect(result).toBe("g2");
  });

  it("returns null when all scores equal", () => {
    // We need a true tie: find combination where g1 == g2
    // q1: bought (g1:2, g2:1), q2: delegate (g1:3, g2:1), q3: large (g1:1, g2:2)
    // g1 = 2+3+1 = 6, g2 = 1+1+2 = 4 → not a tie
    // q1: bought (2,1), q2: identity (0,3), q3: small (2,2) → g1=4, g2=6 → g2
    // q1: bought (2,1), q2: respect (1,3), q3: micro (2,1) → g1=5, g2=5 → TIE
    const answers: Record<string, string> = {
      q1: "bought",  // g1:2 g2:1
      q2: "respect", // g1:1 g2:3
      q3: "micro",   // g1:2 g2:1
    };
    // g1 = 2+1+2 = 5, g2 = 1+3+1 = 5 → TIE
    expect(calculateProfile(answers, triageQuestions)).toBeNull();
  });

  it("handles missing answers gracefully", () => {
    const answers: Record<string, string> = {
      q1: "founded", // g1:3 g2:0
    };
    // Only q1 scored, g1=3, g2=0
    expect(calculateProfile(answers, triageQuestions)).toBe("g1");
  });

  it("handles empty answers", () => {
    const result = calculateProfile({}, triageQuestions);
    // g1=0, g2=0 → tie → null
    expect(result).toBeNull();
  });

  it("ignores invalid answer values", () => {
    const answers: Record<string, string> = {
      q1: "invalid_value",
      q2: "founded", // not a valid value for q2
      q3: "micro",  // g1:2 g2:1
    };
    // Only q3 matches → g1=2, g2=1
    expect(calculateProfile(answers, triageQuestions)).toBe("g1");
  });
});
