"use client";

import { BaseCardProps, CardDataA } from "@/types/card.types";

interface CardAProps extends BaseCardProps<CardDataA> {
  eventHandlers?: {
    [elementKey: string]: {
      [eventName: string]: (data: CardDataA, event?: React.MouseEvent) => void;
    };
  };
}

export const CardA = ({
  data,
  isSelected,
  onSelect,
  eventHandlers,
}: CardAProps) => (
  <div
    className={`p-4 border rounded-lg shadow cursor-pointer ${
      isSelected ? "bg-blue-100" : "bg-white"
    }`}
    onClick={onSelect}
  >
    <h2
      className="text-lg font-bold cursor-pointer"
      onClick={(e) => eventHandlers?.title?.onClick?.(data, e)}
    >
      {data.title}
    </h2>
    <p onClick={(e) => eventHandlers?.description?.onClick?.(data, e)}>
      {data.description}
    </p>
    {data.extraInfo && (
      <p
        className="text-sm text-gray-500 cursor-pointer"
        onClick={(e) => eventHandlers?.extraInfo?.onClick?.(data, e)}
      >
        {data.extraInfo}
      </p>
    )}
    <button
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      onClick={(e) => {
        e.stopPropagation();
        eventHandlers?.button?.onClick?.(data, e);
      }}
    >
      Click Me
    </button>
  </div>
);
