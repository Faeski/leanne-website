/**
 * Quiz Type Definitions
 * Types for the "Skin Code" diagnostic quiz
 */

// Primary treatment goals (Question 1)
export type PrimaryGoal = 'pigment' | 'aging' | 'laser' | 'firming';

// Location options (Question 3)
export type LocationOption = 'be-limburg' | 'nl-maastricht' | 'other';

// Lifestyle factors (Question 2 - multiple selection)
export type LifestyleFactor =
  | 'stress'
  | 'sun'
  | 'healthy-eating'
  | 'busy'
  | 'hormonal';

// Quiz answers collected during the flow
export interface QuizAnswers {
  primaryGoal: PrimaryGoal | null;
  lifestyleFactors: LifestyleFactor[];
  location: LocationOption | null;
}

// Full quiz state
export interface QuizState {
  currentStep: number;
  answers: QuizAnswers;
  email: string | null;
  firstName: string | null;
  consent: boolean;
  sessionId: string | null;
  completed: boolean;
  isLoading: boolean;
  error: string | null;
}

// Quiz step types
export type QuizStepType = 'goal' | 'lifestyle' | 'location' | 'email' | 'results';

// Option displayed in the quiz
export interface QuizOption<T extends string = string> {
  value: T;
  label: string;
  description?: string;
  icon?: string;
}

// Question configuration
export interface QuizQuestion<T extends string = string> {
  id: QuizStepType;
  title: string;
  subtitle?: string;
  options: QuizOption<T>[];
  multiSelect: boolean;
}

// Treatment recommendation based on answers
export interface TreatmentRecommendation {
  treatmentKey: PrimaryGoal;
  name: string;
  description: string;
  whatToExpect: string;
  route: string;
}

// Lifestyle tip based on factors
export interface LifestyleTip {
  factor: LifestyleFactor;
  tip: string;
}

// Full quiz results for PDF and display
export interface QuizResults {
  goalDescription: string;
  treatment: TreatmentRecommendation;
  tips: string[];
  includesTravelInfo: boolean;
}

// Database session record
export interface QuizSession {
  id: string;
  created_at: string;
  completed_at: string | null;
  primary_goal: PrimaryGoal | null;
  lifestyle_factors: LifestyleFactor[];
  location: LocationOption | null;
  email: string | null;
  first_name: string | null;
  email_consent: boolean;
  consent_timestamp: string | null;
  consent_ip: string | null;
  source: string | null;
  user_agent: string | null;
  pdf_sent: boolean;
  pdf_sent_at: string | null;
  nurture_sequence_started: boolean;
  unsubscribe_token: string | null;
}

// API request/response types
export interface StartQuizRequest {
  source?: string;
}

export interface StartQuizResponse {
  sessionId: string;
}

export interface UpdateAnswersRequest {
  sessionId: string;
  answers: Partial<QuizAnswers>;
}

export interface CompleteQuizRequest {
  sessionId: string;
  email: string;
  firstName?: string;
  consent: boolean;
}

export interface CompleteQuizResponse {
  success: boolean;
  results: QuizResults;
}

export interface GeneratePDFRequest {
  sessionId: string;
}

// Email template data
export interface EmailTemplateData {
  firstName: string | null;
  primaryGoal: PrimaryGoal;
  treatment: TreatmentRecommendation;
  tips: string[];
  unsubscribeUrl: string;
}
