import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the form data
    console.log("Contact form submission:", body);

    // Here you would typically send this data to your database or email service
    // For example: await sendEmail(body) or await saveToDatabase(body)

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
