import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

/**
 * GET /api/unsubscribe
 * Handles email unsubscribe via one-click link
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return new NextResponse(
        generateHtmlResponse(
          "Ongeldige link",
          "Deze uitschrijflink is niet geldig. Neem contact met ons op als je je wilt uitschrijven."
        ),
        {
          status: 400,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }
      );
    }

    // Look up session by unsubscribe token
    const { data: session, error: fetchError } = await supabaseAdmin
      .from("quiz_sessions")
      .select("id, email, email_consent")
      .eq("unsubscribe_token", token)
      .single();

    if (fetchError || !session) {
      return new NextResponse(
        generateHtmlResponse(
          "Link niet gevonden",
          "Deze uitschrijflink is niet geldig of verlopen."
        ),
        {
          status: 404,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }
      );
    }

    // Already unsubscribed
    if (!session.email_consent) {
      return new NextResponse(
        generateHtmlResponse(
          "Al uitgeschreven",
          "Je bent al uitgeschreven van onze emails."
        ),
        {
          status: 200,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }
      );
    }

    // Update consent to false
    const { error: updateError } = await supabaseAdmin
      .from("quiz_sessions")
      .update({ email_consent: false })
      .eq("id", session.id);

    if (updateError) {
      console.error("Failed to unsubscribe:", updateError);
      return new NextResponse(
        generateHtmlResponse(
          "Er ging iets mis",
          "We konden je niet uitschrijven. Probeer het later opnieuw of neem contact met ons op."
        ),
        {
          status: 500,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }
      );
    }

    // Success
    return new NextResponse(
      generateHtmlResponse(
        "Uitgeschreven",
        "Je bent succesvol uitgeschreven van onze emails. We sturen je geen berichten meer."
      ),
      {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return new NextResponse(
      generateHtmlResponse(
        "Er ging iets mis",
        "Er is een fout opgetreden. Probeer het later opnieuw."
      ),
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }
}

/**
 * Generate a simple HTML response page
 */
function generateHtmlResponse(title: string, message: string): string {
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} - Instituut Leanne</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f7f5f2;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      background: white;
      border-radius: 12px;
      padding: 40px;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    .brand {
      font-size: 14px;
      font-weight: bold;
      color: #8B7355;
      letter-spacing: 2px;
      margin-bottom: 24px;
    }
    h1 {
      font-size: 24px;
      color: #1a1a1a;
      margin-bottom: 16px;
    }
    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    a {
      display: inline-block;
      background: #8B7355;
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover { background: #7a6548; }
  </style>
</head>
<body>
  <div class="container">
    <p class="brand">INSTITUUT LEANNE</p>
    <h1>${title}</h1>
    <p>${message}</p>
    <a href="/">Terug naar website</a>
  </div>
</body>
</html>`;
}
