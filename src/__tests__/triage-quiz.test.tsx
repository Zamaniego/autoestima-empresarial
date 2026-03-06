import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TriageQuiz } from "@/components/triage-quiz";

describe("TriageQuiz component", () => {
  it("renders the intro card on mount", () => {
    render(<TriageQuiz />);
    expect(screen.getByText("¿Qué tipo de líder eres?")).toBeInTheDocument();
    expect(screen.getByText("Comenzar diagnóstico")).toBeInTheDocument();
  });

  it("starts the quiz when user clicks Comenzar", () => {
    render(<TriageQuiz />);
    fireEvent.click(screen.getByText("Comenzar diagnóstico"));

    // First question should appear
    expect(
      screen.getByText("¿Cómo llegaste a dirigir tu empresa?")
    ).toBeInTheDocument();
    expect(screen.getByText("Yo la fundé desde cero")).toBeInTheDocument();
  });

  it("shows progress indicator during questions", () => {
    render(<TriageQuiz />);
    fireEvent.click(screen.getByText("Comenzar diagnóstico"));

    // Should show "Pregunta 1 de X"
    expect(screen.getByText(/Pregunta 1 de/)).toBeInTheDocument();
  });

  it("advances to next question on answer", () => {
    render(<TriageQuiz />);
    fireEvent.click(screen.getByText("Comenzar diagnóstico"));

    // Answer first question
    fireEvent.click(screen.getByText("Yo la fundé desde cero"));

    // Second question should now be visible
    expect(
      screen.getByText("¿Cuál es tu mayor reto hoy como líder?")
    ).toBeInTheDocument();
    expect(screen.getByText(/Pregunta 2 de/)).toBeInTheDocument();
  });

  it("shows back button after first question", () => {
    render(<TriageQuiz />);
    fireEvent.click(screen.getByText("Comenzar diagnóstico"));

    // No back button on first question
    expect(screen.queryByText("Anterior")).not.toBeInTheDocument();

    // Answer first question
    fireEvent.click(screen.getByText("Yo la fundé desde cero"));

    // Back button should appear
    expect(screen.getByText("Anterior")).toBeInTheDocument();
  });

  it("navigates back to previous question", () => {
    render(<TriageQuiz />);
    fireEvent.click(screen.getByText("Comenzar diagnóstico"));
    fireEvent.click(screen.getByText("Yo la fundé desde cero"));

    // Now on question 2
    expect(screen.getByText(/Pregunta 2 de/)).toBeInTheDocument();

    // Go back
    fireEvent.click(screen.getByText("Anterior"));

    // Back to question 1
    expect(screen.getByText(/Pregunta 1 de/)).toBeInTheDocument();
    expect(
      screen.getByText("¿Cómo llegaste a dirigir tu empresa?")
    ).toBeInTheDocument();
  });

  it("completes full g1 (founder) flow and shows result", () => {
    render(<TriageQuiz />);

    // Start
    fireEvent.click(screen.getByText("Comenzar diagnóstico"));

    // Q1: founded → g1:3
    fireEvent.click(screen.getByText("Yo la fundé desde cero"));

    // Q2: delegate → g1:3
    fireEvent.click(
      screen.getByText("No puedo delegar — todo depende de mí")
    );

    // Q3: micro → g1:2
    fireEvent.click(screen.getByText("1 a 5"));

    // Should detect g1 profile and show sub-questions
    // "Fundador" badge should appear
    expect(screen.getByText("Fundador")).toBeInTheDocument();

    // Sub Q1 for g1
    fireEvent.click(screen.getByText("El flujo de efectivo"));

    // Sub Q2 for g1
    fireEvent.click(
      screen.getByText("Que la empresa funcione sin mí un mes")
    );

    // Should show result
    expect(
      screen.getByText("Eres un Fundador que necesita claridad")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Agenda tu sesión diagnóstica gratuita")
    ).toBeInTheDocument();
  });

  it("completes full g2 (heir) flow and shows result", () => {
    render(<TriageQuiz />);

    // Start
    fireEvent.click(screen.getByText("Comenzar diagnóstico"));

    // Q1: inherited → g2:3
    fireEvent.click(screen.getByText("La heredé o me la pasaron"));

    // Q2: identity → g2:3
    fireEvent.click(
      screen.getByText("No siento que la empresa sea mía")
    );

    // Q3: large → g2:2
    fireEvent.click(screen.getByText("36 o más"));

    // Should detect g2 profile
    expect(screen.getByText("Heredero")).toBeInTheDocument();

    // Sub Q1 for g2
    fireEvent.click(
      screen.getByText("Me comparán constantemente con el fundador")
    );

    // Sub Q2 for g2
    fireEvent.click(
      screen.getByText("Encontrar mi propia identidad como líder")
    );

    // Result
    expect(
      screen.getByText("Eres un Heredero buscando tu identidad")
    ).toBeInTheDocument();
  });

  it("shows reset button in result and restarts quiz", () => {
    render(<TriageQuiz />);

    // Quick path to result (g1)
    fireEvent.click(screen.getByText("Comenzar diagnóstico"));
    fireEvent.click(screen.getByText("Yo la fundé desde cero"));
    fireEvent.click(
      screen.getByText("No puedo delegar — todo depende de mí")
    );
    fireEvent.click(screen.getByText("1 a 5"));
    fireEvent.click(screen.getByText("El flujo de efectivo"));
    fireEvent.click(
      screen.getByText("Que la empresa funcione sin mí un mes")
    );

    // On result page
    expect(screen.getByText("Repetir diagnóstico")).toBeInTheDocument();

    // Reset
    fireEvent.click(screen.getByText("Repetir diagnóstico"));

    // Should be back to intro
    expect(screen.getByText("¿Qué tipo de líder eres?")).toBeInTheDocument();
  });

  it("shows pain points in the result", () => {
    render(<TriageQuiz />);

    // g1 flow
    fireEvent.click(screen.getByText("Comenzar diagnóstico"));
    fireEvent.click(screen.getByText("Yo la fundé desde cero"));
    fireEvent.click(
      screen.getByText("No puedo delegar — todo depende de mí")
    );
    fireEvent.click(screen.getByText("1 a 5"));
    fireEvent.click(screen.getByText("El flujo de efectivo"));
    fireEvent.click(
      screen.getByText("Que la empresa funcione sin mí un mes")
    );

    // Check pain points for g1
    expect(
      screen.getByText("No puedes delegar — todo pasa por ti")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Cobras menos de lo que vale tu trabajo")
    ).toBeInTheDocument();
  });
});
