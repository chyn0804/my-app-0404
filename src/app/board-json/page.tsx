"use client";

import { useRouter } from "next/navigation";
import { useGenericQuery } from "@/hooks/apiHooks";
import { API_BOARD_JSON } from "@/constants/api";
import { BoardItem } from "@/types/board.types";
import { Button } from "@/components/ui/button";
import { Board } from "@/components/cards/Board";
import CardList from "@/components/list/CardList";
import Link from "next/link";

export default function BoardListPage() {
  const router = useRouter();

  // 게시판 목록 데이터 요청
  const { data, isLoading } = useGenericQuery<BoardItem[]>(
    API_BOARD_JSON.boards.queryKey,
    API_BOARD_JSON.boards.url
  );

  const eventHandlers = {
    li: {
      onClick: (data: BoardItem) =>
        router.push(`/board-json/view?id=${data.id}`),
    },
  };

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">게시판 목록</h1>

      <div className="flex justify-end mb-4">
        <Button onClick={() => router.push("/board-json/new")}>글쓰기</Button>
      </div>

      <ul className="space-y-2">
        {data?.map((item) => (
          <li
            key={item.id}
            className="p-4 border rounded cursor-pointer hover:bg-gray-50 transition"
            // onClick={() => router.push(`/board-json/view?id=${item.id}`)}
          >
            <Link href={`/board-json/view?id=${item.id}`}>
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-500">
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleString()
                  : ""}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-2">
        <CardList
          items={data ?? []}
          CardComponent={Board}
          eventHandlers={eventHandlers}
        />
      </ul>
    </div>
  );
}
