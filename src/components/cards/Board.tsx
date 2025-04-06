"use client";

import { BoardItem } from "@/types/board.types";
import Link from "next/link";

interface BoardItemProps {
  data: BoardItem;
  isSelected?: boolean;
  onSelect?: (item: BoardItem) => void;
  eventHandlers?: {
    [elementKey: string]: {
      [eventName: string]: (data: BoardItem, event?: React.MouseEvent) => void;
    };
  };
}

export const Board = ({
  data,
  isSelected,
  onSelect,
  eventHandlers,
}: BoardItemProps) => (
  <li
    key={data.id}
    className="p-4 border rounded cursor-pointer hover:bg-gray-50 transition"
    // onClick={(e) => eventHandlers?.li?.onClick?.(data, e)}
  >
    <Link href={`/board-json/view?id=${data.id}`}>
      <div className="font-semibold">{data.title}</div>
      <div className="text-sm text-gray-500">
        {data.createdAt ? new Date(data.createdAt).toLocaleString() : ""}
      </div>
    </Link>
  </li>
);
