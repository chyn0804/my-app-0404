// src/app/exam/select-box/page.tsx
"use client";

import { useState } from "react";
import SelectBox from "@/components/common/SelectBox";
import { BOARD_STATUS_OPTIONS, BoardStatus } from "@/constants/boardStatus";

export default function NewBoardPage() {
  const [status, setStatus] = useState(BoardStatus.Draft);

  return (
    <div>
      <h1>글쓰기</h1>

      <SelectBox
        label="상태"
        options={BOARD_STATUS_OPTIONS}
        value={status}
        onChange={(v) => setStatus(v as BoardStatus)}
      />
    </div>
  );
}
