// /app/api/common/selectOptions/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");

  let data: Option[] = [];

  if (key === "departments") {
    data = [
      { label: "기획팀", value: "plan" },
      { label: "개발팀", value: "dev" },
      { label: "디자인팀", value: "design" },
    ];
  }

  return NextResponse.json(data);
}
