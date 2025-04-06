import { NextRequest, NextResponse } from "next/server";
import { boards } from "./data"; // 메모리 데이터
import { v4 as uuidv4 } from "uuid";
import {
  BoardItem,
  CreateBoardPayload,
  UpdateBoardPayload,
} from "@/types/board.types";

/**
 * GET: 목록 조회 또는 상세 조회 (id 존재 여부에 따라)
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const board = boards.find((b) => b.id === id);
    if (!board) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json(board);
  }

  // 전체 목록 반환
  return NextResponse.json(boards);
}

/**
 * POST: 게시글 생성
 */
export async function POST(req: NextRequest) {
  const payload = (await req.json()) as CreateBoardPayload;

  const newBoard: BoardItem = {
    id: uuidv4(),
    title: payload.title,
    content: payload.content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  boards.unshift(newBoard);

  return NextResponse.json(newBoard, { status: 201 });
}

/**
 * PUT: 게시글 수정
 */
export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const payload = (await req.json()) as UpdateBoardPayload;

  const board = boards.find((b) => b.id === id);
  if (!board) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  board.title = payload.title ?? board.title;
  board.content = payload.content ?? board.content;
  board.updatedAt = new Date().toISOString();

  return NextResponse.json(board);
}

/**
 * DELETE: 게시글 삭제
 */
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const index = boards.findIndex((b) => b.id === id);
  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  boards.splice(index, 1);
  return NextResponse.json({ message: "Deleted" });
}
