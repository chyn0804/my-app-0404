// app/api/cardA/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      title: "Card A1",
      description: "Description for A1",
      extraInfo: "Extra info A1",
    },
    { title: "Card A2", description: "Description for A2" },
    {
      title: "Card A3",
      description: "Description for A3",
      extraInfo: "Extra info A3",
    },
  ];

  return NextResponse.json(data);
}
