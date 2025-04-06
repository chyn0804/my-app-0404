"use client";

import React, { useState } from "react";

const CardList = <T,>({
  items,
  CardComponent,
  eventHandlers,
}: ListProps<T>) => {
  const [selectedItems, setSelectedItems] = useState<{
    [index: number]: boolean;
  }>({});

  const toggleSelect = (index: number) => {
    setSelectedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {items.map((item, index) => (
        <CardComponent
          key={index}
          data={item}
          eventHandlers={eventHandlers}
          isSelected={!!selectedItems[index]}
          onSelect={() => toggleSelect(index)}
        />
      ))}
    </>
  );
};

export default CardList;
