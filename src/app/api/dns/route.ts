import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch("http://localhost:8001/api/dns/all-tld", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send data to backend");
    }

    const data = await response.json();

    console.log(data);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}
