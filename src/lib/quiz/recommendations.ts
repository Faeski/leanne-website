/**
 * Quiz Recommendation Logic
 * Generates personalized recommendations based on quiz answers
 */

import {
  treatmentRecommendations,
  goalDescriptions,
  lifestyleTips,
} from "@/content/quiz";
import type {
  QuizAnswers,
  QuizResults,
  PrimaryGoal,
  LifestyleFactor,
} from "./types";

/**
 * Generate quiz results based on answers
 */
export function getQuizResults(answers: QuizAnswers): QuizResults {
  // Validate we have a primary goal
  if (!answers.primaryGoal) {
    throw new Error("Primary goal is required to generate results");
  }

  const goal = answers.primaryGoal;

  // Get treatment recommendation
  const treatment = treatmentRecommendations[goal];

  // Get goal description
  const goalDescription = goalDescriptions[goal];

  // Generate lifestyle tips based on selected factors
  const tips = answers.lifestyleFactors
    .map((factor) => lifestyleTips[factor]?.tip)
    .filter(Boolean) as string[];

  // Check if travel info should be included
  const includesTravelInfo = answers.location === "nl-maastricht";

  return {
    goalDescription,
    treatment,
    tips,
    includesTravelInfo,
  };
}

/**
 * Get the display name for a primary goal
 */
export function getGoalDisplayName(goal: PrimaryGoal): string {
  const names: Record<PrimaryGoal, string> = {
    pigment: "Pigmentvlekken verminderen",
    aging: "Rimpels & huidveroudering",
    laser: "Definitieve ontharing",
    firming: "Huid verstevigen",
  };
  return names[goal];
}

/**
 * Get the display name for a lifestyle factor
 */
export function getLifestyleDisplayName(factor: LifestyleFactor): string {
  const names: Record<LifestyleFactor, string> = {
    stress: "Veel stress",
    sun: "Veel in de zon",
    "healthy-eating": "Gezonde voeding belangrijk",
    busy: "Weinig tijd voor mezelf",
    hormonal: "Hormonale veranderingen",
  };
  return names[factor];
}
