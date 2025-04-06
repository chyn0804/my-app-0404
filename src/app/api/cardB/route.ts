// app/api/cardB/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { title: "Card B1", description: "Stateful Card Example 1" },
    { title: "Card B2", description: "Stateful Card Example 2" },
  ];

  return NextResponse.json(data);
}
