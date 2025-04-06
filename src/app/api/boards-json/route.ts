import { NextRequest, NextResponse } from "next/server";
import { readBoardsFile, writeBoardsFile } from "@/lib/fsUtils";
import { v4 as uuid } from "uuid";

// GET - 전체 목록 또는 단일 조회 (쿼리스트링 id)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const boards = await readBoardsFile();

  if (id) {
    const board = boards.find((b: any) => b.id === id);
    if (!board) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json(board);
  }

  return NextResponse.json(boards);
}

// POST - 새 게시글 작성
export async function POST(req: NextRequest) {
  const body = await req.json();
  const boards = await readBoardsFile();

  const newBoard = {
    id: uuid(),
    title: body.title,
    content: body.content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  boards.push(newBoard);
  await writeBoardsFile(boards);

  return NextResponse.json(newBoard, { status: 201 });
}

// PUT - 게시글 수정 (쿼리스트링 id)
export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  const body = await req.json();
  const boards = await readBoardsFile();
  const index = boards.findIndex((b: any) => b.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  boards[index] = {
    ...boards[index],
    ...body,
    updatedAt: new Date().toISOString(),
  };

  await writeBoardsFile(boards);

  return NextResponse.json(boards[index]);
}

// DELETE - 게시글 삭제 (쿼리스트링 id)
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  const boards = await readBoardsFile();
  const filtered = boards.filter((b: any) => b.id !== id);

  if (filtered.length === boards.length) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  await writeBoardsFile(filtered);

  return NextResponse.json({ message: "Deleted" });
}
