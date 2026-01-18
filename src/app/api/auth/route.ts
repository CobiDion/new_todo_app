import { NextResponse } from "next/server";
import { mockUser } from "@/lib/mock-data";

// Fake auth API - always returns mock user
export async function POST(request: Request) {
  const body = await request.json();
  
  // Simulate login delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({
    user: mockUser,
    token: "fake-jwt-token-" + Date.now(),
  });
}

export async function GET() {
  return NextResponse.json({
    user: mockUser,
    authenticated: true,
  });
}
