"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useGenericQuery } from "@/hooks/useGenericQuery";
import { useGenericMutation } from "@/hooks/useGenericMutation";
import { API_BOARD_JSON } from "@/constants/api";
import { UpdateBoardPayload, BoardItem } from "@/types/board.types";

export default function EditBoardPage() {
  const id = useSearchParams().get("id")!;
  const router = useRouter();

  const { data } = useGenericQuery<BoardItem>(
    API_BOARD_JSON.boardDetail.queryKey(id),
    API_BOARD_JSON.boardDetail.url(id)
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);

  const { mutate, isPending } = useGenericMutation<void, UpdateBoardPayload>(
    API_BOARD_JSON.updateBoard.method,
    API_BOARD_JSON.updateBoard.url(id),
    {
      onSuccess: () => router.push(`/board-json/view?id=${id}`),
    }
  );

  return (
    <div>
      <h1>수정하기</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={() => mutate({ title, content })} disabled={isPending}>
        저장
      </button>
    </div>
  );
}
