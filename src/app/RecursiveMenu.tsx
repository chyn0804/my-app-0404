"use client";

import Link from "next/link";

export interface MenuItem {
  title: string;
  href?: string;
  subItems?: MenuItem[];
}

export function RecursiveMenu({
  item,
  level = 0,
}: {
  item: MenuItem;
  level?: number;
}) {
  return (
    <div className={`pl-${level * 4}`}>
      {item.href ? (
        <Link
          href={item.href}
          className={`block font-medium mb-1 hover:underline text-sm ${
            level === 0 ? "text-lg" : ""
          }`}
        >
          {item.title}
        </Link>
      ) : (
        <div
          className={`block font-semibold mb-1 text-sm ${
            level === 0 ? "text-lg" : ""
          }`}
        >
          {item.title}
        </div>
      )}
      {item.subItems && (
        <div className="ml-2 mt-1 space-y-1">
          {item.subItems.map((subItem) => (
            <RecursiveMenu
              key={subItem.title}
              item={subItem}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
