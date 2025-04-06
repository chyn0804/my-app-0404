// src/app/exam/select-box-api/page.tsx
"use client";

import { useState } from "react";
import SelectBox from "@/components/common/SelectBox";
import { useSelectOptions } from "@/hooks/useCommonSelect";

export default function ExamplePage() {
  const [selected, setSelected] = useState<string | number>("");
  const { options, isLoading } = useSelectOptions("departments");

  return (
    <div>
      <h2>부서 선택</h2>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : (
        <SelectBox
          label="부서"
          value={selected}
          onChange={setSelected}
          options={options}
          placeholder="부서를 선택하세요"
        />
      )}
    </div>
  );
}
