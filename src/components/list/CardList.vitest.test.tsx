import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import CardList from "./CardList";
import React from "react";

type DummyData = { title: string };

const DummyCard = ({
  data,
  onSelect,
  isSelected,
  eventHandlers,
}: {
  data: DummyData;
  onSelect: () => void;
  isSelected: boolean;
  eventHandlers?: any;
}) => (
  <div>
    <h3>{data.title}</h3>
    <button onClick={onSelect}>{isSelected ? "Selected" : "Select"}</button>
  </div>
);

describe("CardList", () => {
  const items = [{ title: "Card 1" }, { title: "Card 2" }, { title: "Card 3" }];

  it("렌더링 테스트 - 모든 카드가 표시됨", () => {
    render(
      <CardList items={items} CardComponent={DummyCard} eventHandlers={{}} />
    );

    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("카드 선택 토글 테스트", () => {
    render(
      <CardList items={items} CardComponent={DummyCard} eventHandlers={{}} />
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons[0].textContent).toBe("Select");

    fireEvent.click(buttons[0]);

    expect(buttons[0].textContent).toBe("Selected");

    fireEvent.click(buttons[0]);

    expect(buttons[0].textContent).toBe("Select");
  });

  it("eventHandlers prop이 전달되는지 확인", () => {
    const mockClick = vi.fn();

    const CustomCard: React.FC<{
      data: DummyData;
      isSelected: boolean;
      onSelect: () => void;
      eventHandlers?: {
        onClick: () => void;
      };
    }> = ({ data, isSelected, onSelect, eventHandlers }) => {
      return (
        <div onClick={eventHandlers?.onClick}>
          <h3>{data.title}</h3>
          {isSelected && <span>✔️</span>}
        </div>
      );
    };

    render(
      <CardList
        items={items}
        CardComponent={CustomCard}
        eventHandlers={{ onClick: mockClick }}
      />
    );

    fireEvent.click(screen.getByText("Card 1"));

    expect(mockClick).toHaveBeenCalled();
  });
});
