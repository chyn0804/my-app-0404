"use client";

import { useRouter } from "next/navigation";
import { API_BOARD } from "@/constants/api";
import { useGenericMutation } from "@/hooks/useGenericMutation";
import { CreateBoardPayload } from "@/types/board.types";
import { useState } from "react";

export default function NewBoardPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate, isPending } = useGenericMutation<void, CreateBoardPayload>(
    API_BOARD.createBoard.method,
    API_BOARD.createBoard.url,
    {
      onSuccess: () => {
        router.push("/board");
      },
    }
  );

  return (
    <div>
      <h1>글쓰기</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
      />
      <button onClick={() => mutate({ title, content })} disabled={isPending}>
        등록
      </button>
    </div>
  );
}
