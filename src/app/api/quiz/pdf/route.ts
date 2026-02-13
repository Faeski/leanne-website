import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { supabaseAdmin } from "@/lib/supabase/server";
import { getQuizResults } from "@/lib/quiz/recommendations";
import { QuizPDFTemplate } from "@/components/pdf/QuizPDFTemplate";
import type { GeneratePDFRequest } from "@/lib/quiz/types";

/**
 * POST /api/quiz/pdf
 * Generates and returns a PDF for a completed quiz session
 */
export async function POST(request: NextRequest) {
  try {
    const body: GeneratePDFRequest = await request.json();
    const { sessionId } = body;

    // Validate session ID
    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Fetch session from database
    const { data: session, error: fetchError } = await supabaseAdmin
      .from("quiz_sessions")
      .select("*")
      .eq("id", sessionId)
      .single();

    if (fetchError || !session) {
      console.error("Session not found:", fetchError);
      return NextResponse.json(
        { error: "Quiz session not found" },
        { status: 404 }
      );
    }

    // Check if quiz was completed
    if (!session.completed_at || !session.primary_goal) {
      return NextResponse.json(
        { error: "Quiz not completed" },
        { status: 400 }
      );
    }

    // Generate results
    const results = getQuizResults({
      primaryGoal: session.primary_goal,
      lifestyleFactors: session.lifestyle_factors || [],
      location: session.location,
    });

    // Render PDF to buffer
    const pdfBuffer = await renderToBuffer(
      QuizPDFTemplate({
        results,
        firstName: session.first_name,
        primaryGoal: session.primary_goal,
      })
    );

    // Convert to Uint8Array for NextResponse compatibility
    const uint8Array = new Uint8Array(pdfBuffer);

    // Return PDF as response
    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="huid-advies-paspoort.pdf"',
        "Cache-Control": "private, no-cache",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
