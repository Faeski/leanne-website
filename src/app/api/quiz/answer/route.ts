import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import type { QuizAnswers } from "@/lib/quiz/types";

interface UpdateAnswersBody {
  sessionId: string;
  answers: Partial<QuizAnswers>;
}

/**
 * POST /api/quiz/answer
 * Updates quiz session with answers
 */
export async function POST(request: NextRequest) {
  try {
    const body: UpdateAnswersBody = await request.json();
    const { sessionId, answers } = body;

    // Validate session ID
    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Build update object
    const updateData: Record<string, unknown> = {};

    if (answers.primaryGoal !== undefined) {
      updateData.primary_goal = answers.primaryGoal;
    }

    if (answers.lifestyleFactors !== undefined) {
      updateData.lifestyle_factors = answers.lifestyleFactors;
    }

    if (answers.location !== undefined) {
      updateData.location = answers.location;
    }

    // Skip if no updates
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ success: true });
    }

    // Update session in Supabase
    const { error } = await supabaseAdmin
      .from("quiz_sessions")
      .update(updateData)
      .eq("id", sessionId)
      .is("completed_at", null); // Only update incomplete sessions

    if (error) {
      console.error("Failed to update quiz answers:", error);
      return NextResponse.json(
        { error: "Failed to save answers" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quiz answer error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
