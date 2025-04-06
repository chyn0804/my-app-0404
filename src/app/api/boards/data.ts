// app/api/boards/data.ts (메모리 저장소)
import { BoardItem } from "@/types/board.types";

export let boards: BoardItem[] = [
  {
    id: "1",
    title: "첫 번째 게시글",
    content: "첫 번째 게시글의 내용입니다.",
    createdAt: "2025-04-06T10:00:00.000Z",
  },
  {
    id: "2",
    title: "두 번째 게시글",
    content: "두 번째 게시글의 내용입니다.",
    createdAt: "2025-04-06T11:00:00.000Z",
  },
  {
    id: "3",
    title: "세 번째 게시글",
    content: "세 번째 게시글의 내용입니다.",
    createdAt: "2025-04-06T12:00:00.000Z",
  },
];
