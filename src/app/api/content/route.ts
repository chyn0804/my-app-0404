// app/api/content/route.ts

import { NextRequest, NextResponse } from "next/server";

// 테스트용 더미 데이터
const mockContent = {
  news: [
    { id: 1, title: "뉴스 1" },
    { id: 2, title: "뉴스 2" },
  ],
  blog: [
    { id: 3, title: "블로그 1" },
    { id: 4, title: "블로그 2" },
  ],
  video: [
    { id: 5, title: "비디오 1" },
    { id: 6, title: "비디오 2" },
  ],
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") ?? "";

  if (!category || !mockContent[category as keyof typeof mockContent]) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  const data = mockContent[category as keyof typeof mockContent];

  return NextResponse.json(data);
}
