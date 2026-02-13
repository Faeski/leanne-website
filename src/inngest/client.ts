/**
 * Inngest Client
 * Background job processing for email sequences
 */

import { Inngest } from "inngest";

// Create the Inngest client
export const inngest = new Inngest({
  id: "instituut-leanne",
  name: "Instituut Leanne",
});

// Event types for type safety
export type QuizCompletedEvent = {
  name: "quiz/completed";
  data: {
    sessionId: string;
    email: string;
    firstName: string | null;
    primaryGoal: string;
    unsubscribeToken: string;
  };
};

export type Events = {
  "quiz/completed": QuizCompletedEvent;
};
