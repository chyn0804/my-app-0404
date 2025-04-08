"use client";

import { useState } from "react";
import { useContentQuery } from "@/hooks/useContentQuery";

export default function CategoryContent() {
  const [category, setCategory] = useState<"news" | "blog" | "video">("news");
  const { data, isLoading } = useContentQuery(category);

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        {(["news", "blog", "video"] as const).map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 border rounded ${
              category === cat ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {isLoading && <div>로딩 중...</div>}

      {data && (
        <ul className="space-y-2">
          {data.map((item: any) => (
            <li key={item.id} className="p-2 border rounded">
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
