import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

/**
 * POST /api/quiz/start
 * Creates a new quiz session and returns the session ID
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { source } = body;

    // Get user agent for analytics
    const userAgent = request.headers.get("user-agent") || null;

    // Create new session in Supabase
    const { data, error } = await supabaseAdmin
      .from("quiz_sessions")
      .insert({
        source: source || null,
        user_agent: userAgent,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Failed to create quiz session:", error);
      return NextResponse.json(
        { error: "Failed to start quiz" },
        { status: 500 }
      );
    }

    return NextResponse.json({ sessionId: data.id });
  } catch (error) {
    console.error("Quiz start error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
