"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useGenericQuery } from "@/hooks/useGenericQuery";
import { useGenericMutation } from "@/hooks/useGenericMutation";
import { API_BOARD } from "@/constants/api";
import { UpdateBoardPayload, BoardItem } from "@/types/board.types";

export default function EditBoardPage() {
  const id = useSearchParams().get("id")!;
  const router = useRouter();

  const { data } = useGenericQuery<BoardItem>(
    API_BOARD.boardDetail.queryKey(id),
    API_BOARD.boardDetail.url(id)
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
    API_BOARD.updateBoard.method,
    API_BOARD.updateBoard.url(id),
    {
      onSuccess: () => router.push(`/board/view?id=${id}`),
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
