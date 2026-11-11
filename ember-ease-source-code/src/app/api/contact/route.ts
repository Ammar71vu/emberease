import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In production this would persist to DB and/or email out.
    // For now we acknowledge and echo back the service selected for the UI confirmation.
    return NextResponse.json({
      success: true,
      message: "Project request received.",
      reference: `EE-${Date.now().toString(36).toUpperCase()}`,
      service: service || "not-specified",
      budget: budget || "not-specified",
      contactEmail: "contact@emberease.com",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
