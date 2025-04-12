import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "Please fill out all fields" },
        { status: 400 }
      );
    }
    if (body.honeypot) {
      return NextResponse.json(
        { success: false, message: "Please fill out all fields" },
        { status: 400 }
      );
    }

    // Log the form data
    console.log("Contact form submission:", body);

    const response = await fetch("http://localhost:8001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        message: body.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send data to backend");
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}
