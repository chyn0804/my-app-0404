"use client";

import { useRouter } from "next/navigation";
import { useGenericQuery } from "@/hooks/apiHooks";
import { API_BOARD } from "@/constants/api";
import { BoardItem } from "@/types/board.types";
import { Button } from "@/components/ui/button";

export default function BoardListPage() {
  const router = useRouter();

  // 게시판 목록 데이터 요청
  const { data, isLoading } = useGenericQuery<BoardItem[]>(
    API_BOARD.boards.queryKey,
    API_BOARD.boards.url
  );

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">게시판 목록</h1>

      <div className="flex justify-end mb-4">
        <Button onClick={() => router.push("/board/new")}>글쓰기</Button>
      </div>

      <ul className="space-y-2">
        {data?.map((item) => (
          <li
            key={item.id}
            className="p-4 border rounded cursor-pointer hover:bg-gray-50 transition"
            onClick={() => router.push(`/board/view?id=${item.id}`)}
          >
            <div className="font-semibold">{item.title}</div>
            <div className="text-sm text-gray-500">
              {item.createdAt ? new Date(item.createdAt).toLocaleString() : ""}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
