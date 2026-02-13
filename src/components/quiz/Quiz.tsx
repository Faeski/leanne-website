"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizStart } from "./QuizStart";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestion } from "./QuizQuestion";
import { QuizEmailCapture } from "./QuizEmailCapture";
import { QuizResults } from "./QuizResults";
import { questions } from "@/content/quiz";
import { getQuizResults } from "@/lib/quiz/recommendations";
import type {
  QuizState,
  QuizAnswers,
  PrimaryGoal,
  LifestyleFactor,
  LocationOption,
  QuizResults as QuizResultsType,
} from "@/lib/quiz/types";

// Step definitions
type QuizStep = "start" | "goal" | "lifestyle" | "location" | "email" | "results";

const QUESTION_STEPS: QuizStep[] = ["goal", "lifestyle", "location"];

interface QuizProps {
  onComplete?: (results: QuizResultsType) => void;
}

/**
 * Quiz Component
 * Main container managing quiz state and flow
 */
export function Quiz({ onComplete }: QuizProps) {
  // Quiz state
  const [state, setState] = useState<QuizState>({
    currentStep: -1, // -1 = start screen
    answers: {
      primaryGoal: null,
      lifestyleFactors: [],
      location: null,
    },
    email: null,
    firstName: null,
    consent: false,
    sessionId: null,
    completed: false,
    isLoading: false,
    error: null,
  });

  const [results, setResults] = useState<QuizResultsType | null>(null);

  // Get current step type
  const getCurrentStep = (): QuizStep => {
    if (state.currentStep === -1) return "start";
    if (state.currentStep < QUESTION_STEPS.length) {
      return QUESTION_STEPS[state.currentStep];
    }
    if (state.currentStep === QUESTION_STEPS.length) return "email";
    return "results";
  };

  const currentStep = getCurrentStep();

  // Start quiz - create session
  const handleStart = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch("/api/quiz/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: window.location.pathname }),
      });

      if (!response.ok) {
        throw new Error("Failed to start quiz");
      }

      const { sessionId } = await response.json();

      setState((prev) => ({
        ...prev,
        sessionId,
        currentStep: 0,
        isLoading: false,
      }));

      // Track start event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "quiz_started", { quiz_name: "skin_code" });
      }
    } catch (error) {
      console.error("Failed to start quiz:", error);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: "Er ging iets mis. Probeer het opnieuw.",
      }));
    }
  }, []);

  // Handle answer selection
  const handleGoalSelect = useCallback((value: PrimaryGoal) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, primaryGoal: value },
    }));
    // Track goal selection for engagement
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "quiz_goal_selected", {
        quiz_name: "skin_code",
        goal: value,
      });
    }
  }, []);

  const handleLifestyleSelect = useCallback((value: LifestyleFactor) => {
    setState((prev) => {
      const current = prev.answers.lifestyleFactors;
      const updated = current.includes(value)
        ? current.filter((f) => f !== value)
        : [...current, value];
      return {
        ...prev,
        answers: { ...prev.answers, lifestyleFactors: updated },
      };
    });
  }, []);

  const handleLocationSelect = useCallback((value: LocationOption) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, location: value },
    }));
    // Track location for geo analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "quiz_location_selected", {
        quiz_name: "skin_code",
        location: value,
      });
    }
  }, []);

  // Navigate to next step
  const handleNext = useCallback(async () => {
    const nextStep = state.currentStep + 1;

    // Save answers to backend
    if (state.sessionId) {
      try {
        await fetch("/api/quiz/answer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: state.sessionId,
            answers: state.answers,
          }),
        });

        // Track step completion
        if (typeof window !== "undefined" && window.gtag) {
          const stepName = QUESTION_STEPS[state.currentStep];
          window.gtag("event", "quiz_step_completed", {
            step: state.currentStep + 1,
            step_name: stepName,
          });
        }
      } catch (error) {
        console.error("Failed to save answers:", error);
        // Continue anyway - don't block the user
      }
    }

    setState((prev) => ({ ...prev, currentStep: nextStep }));
  }, [state.currentStep, state.sessionId, state.answers]);

  // Go back to previous step
  const handleBack = useCallback(() => {
    if (state.currentStep > 0) {
      setState((prev) => ({ ...prev, currentStep: prev.currentStep - 1 }));
    }
  }, [state.currentStep]);

  // Handle email submission and quiz completion
  const handleEmailSubmit = useCallback(
    async (email: string, firstName: string | null, consent: boolean) => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const response = await fetch("/api/quiz/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: state.sessionId,
            email,
            firstName,
            consent,
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to complete quiz");
        }

        const { results: quizResults } = await response.json();

        // Generate results locally as fallback if not returned
        const finalResults = quizResults || getQuizResults(state.answers);

        setResults(finalResults);
        setState((prev) => ({
          ...prev,
          email,
          firstName,
          consent,
          completed: true,
          currentStep: QUESTION_STEPS.length + 1, // Results step
          isLoading: false,
        }));

        // Track completion
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "quiz_completed", { quiz_name: "skin_code" });
          window.gtag("event", "quiz_email_submitted", { quiz_name: "skin_code" });
        }

        // Call onComplete callback
        onComplete?.(finalResults);
      } catch (error) {
        console.error("Failed to complete quiz:", error);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error:
            error instanceof Error
              ? error.message
              : "Er ging iets mis. Probeer het opnieuw.",
        }));
      }
    },
    [state.sessionId, state.answers, onComplete]
  );

  // Check if current step can proceed
  const canProceed = (): boolean => {
    switch (currentStep) {
      case "goal":
        return state.answers.primaryGoal !== null;
      case "lifestyle":
        return true; // Optional, can skip
      case "location":
        return state.answers.location !== null;
      default:
        return true;
    }
  };

  // Render step content
  const renderStep = () => {
    switch (currentStep) {
      case "start":
        return (
          <QuizStart onStart={handleStart} isLoading={state.isLoading} />
        );

      case "goal":
        return (
          <QuizQuestion
            title={questions.goal.title}
            subtitle={questions.goal.subtitle}
            options={questions.goal.options}
            selectedValues={
              state.answers.primaryGoal ? [state.answers.primaryGoal] : []
            }
            onSelect={handleGoalSelect}
            multiSelect={false}
          />
        );

      case "lifestyle":
        return (
          <QuizQuestion
            title={questions.lifestyle.title}
            subtitle={questions.lifestyle.subtitle}
            options={questions.lifestyle.options}
            selectedValues={state.answers.lifestyleFactors}
            onSelect={handleLifestyleSelect}
            multiSelect={true}
          />
        );

      case "location":
        return (
          <QuizQuestion
            title={questions.location.title}
            subtitle={questions.location.subtitle}
            options={questions.location.options}
            selectedValues={
              state.answers.location ? [state.answers.location] : []
            }
            onSelect={handleLocationSelect}
            multiSelect={false}
          />
        );

      case "email":
        return (
          <QuizEmailCapture
            onSubmit={handleEmailSubmit}
            isLoading={state.isLoading}
            error={state.error}
          />
        );

      case "results":
        return results && state.sessionId ? (
          <QuizResults
            results={results}
            sessionId={state.sessionId}
            firstName={state.firstName}
          />
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      {/* Progress bar (not shown on start or results) */}
      {currentStep !== "start" && currentStep !== "results" && (
        <QuizProgress
          current={Math.min(state.currentStep, QUESTION_STEPS.length)}
          total={QUESTION_STEPS.length + 1} // +1 for email step
          className="mb-8"
        />
      )}

      {/* Step content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons (for question steps) */}
      {QUESTION_STEPS.includes(currentStep as typeof QUESTION_STEPS[number]) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 flex items-center justify-between"
        >
          {/* Back button */}
          <button
            onClick={handleBack}
            disabled={state.currentStep === 0}
            className="flex items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-700 disabled:invisible"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Terug
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center gap-1 rounded-lg bg-primary-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Volgende
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      )}

      {/* Error display */}
      {state.error && currentStep === "start" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-sm text-red-600"
        >
          {state.error}
        </motion.p>
      )}
    </div>
  );
}

// Add gtag type for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
