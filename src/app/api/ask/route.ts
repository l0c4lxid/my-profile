import { NextResponse } from "next/server";

const API_URL = "https://server.syaidandhika.site/api/ask";
const DEFAULT_MODEL = "gemini-2.5-flash-lite";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
    const model =
      typeof body?.model === "string" && body.model.trim()
        ? body.model.trim()
        : DEFAULT_MODEL;

    if (!prompt) {
      return NextResponse.json(
        { code: 400, error: "Prompt is required." },
        { status: 400 }
      );
    }

    const upstream = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, model }),
      cache: "no-store",
    });

    const rawText = await upstream.text();

    if (!upstream.ok) {
      return NextResponse.json(
        { code: upstream.status, error: "Upstream request failed." },
        { status: 502 }
      );
    }

    try {
      const data = JSON.parse(rawText);
      return NextResponse.json(data, { status: 200 });
    } catch {
      return NextResponse.json({ code: 200, text: rawText }, { status: 200 });
    }
  } catch {
    return NextResponse.json(
      { code: 500, error: "Server error." },
      { status: 500 }
    );
  }
}
