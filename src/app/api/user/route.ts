import { NextResponse } from "next/server";

export async function GET() {
  const user = {
    id: "123",
    name: "홍길동",
    email: "hong@example.com",
    role: "admin",
  };

  return NextResponse.json(user);
}
