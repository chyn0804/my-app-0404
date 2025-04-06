"use client";

import { BaseCardProps, CardDataB } from "@/types/card.types";
import { useState } from "react";

interface CardBProps extends BaseCardProps<CardDataB> {}

export const CardB = ({ data, isSelected, onSelect }: CardBProps) => {
  const [count, setCount] = useState(0);

  return (
    <div
      className={`p-4 border rounded-lg shadow cursor-pointer ${
        isSelected ? "bg-green-200" : "bg-green-100"
      }`}
      onClick={onSelect}
    >
      <h2 className="text-lg font-bold text-green-700">{data.title}</h2>
      <p className="text-green-600">{data.description}</p>
      <p className="mt-2">Count: {count}</p>
      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        onClick={(e) => {
          e.stopPropagation();
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
