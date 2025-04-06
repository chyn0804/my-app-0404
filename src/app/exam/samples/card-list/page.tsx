"use client";
import { CardA } from "@/components/cards/CardA";
import { CardB } from "@/components/cards/CardB";
import CardList from "@/components/list/CardList";
import { useQuery } from "@tanstack/react-query";
import { fetchCardAItems, fetchCardBItems } from "@/lib/api";
import { CardDataA, CardDataB } from "@/types/card.types";
import { useGenericQuery } from "@/hooks/useGenericQuery";
import { API_DEFINITIONS } from "@/constants/api";

// const itemsA: CardDataA[] = [
//   {
//     title: "Card A1",
//     description: "Description for A1",
//     extraInfo: "Extra info A1",
//   },
//   { title: "Card A2", description: "Description for A2" },
//   {
//     title: "Card A3",
//     description: "Description for A3",
//     extraInfo: "Extra info A3",
//   },
// ];

// const itemsB: CardDataB[] = [
//   { title: "Card B1", description: "Stateful Card Example 1" },
//   { title: "Card B2", description: "Stateful Card Example 2" },
// ];

export default function Page() {
  const { data: itemsA = [], isLoading } = useGenericQuery<CardDataA[]>(
    API_DEFINITIONS.cardA.queryKey,
    API_DEFINITIONS.cardA.url
  );

  const { data: itemsB = [], error } = useGenericQuery<CardDataB[]>(
    API_DEFINITIONS.cardB.queryKey,
    API_DEFINITIONS.cardB.url
  );

  //   const { data: itemsA = [], isLoading: loadingA } = useQuery({
  //     queryKey: ["cardAItems"],
  //     queryFn: fetchCardAItems,
  //   });

  //   const { data: itemsB = [], isLoading: loadingB } = useQuery({
  //     queryKey: ["cardBItems"],
  //     queryFn: fetchCardBItems,
  //   });

  const eventHandlers = {
    title: {
      onClick: (data: CardDataA) => console.log(`Title clicked: ${data.title}`),
    },
    description: {
      onClick: (data: CardDataA) =>
        console.log(`Description clicked: ${data.description}`),
    },
    extraInfo: {
      onClick: (data: CardDataA) =>
        console.log(`Extra Info clicked: ${data.extraInfo}`),
    },
    button: {
      onClick: (data: CardDataA) => alert(`Button clicked: ${data.title}`),
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic List Example</h1>
      <CardList<CardDataA>
        items={itemsA}
        CardComponent={CardA}
        eventHandlers={eventHandlers}
      />
      <h2 className="text-xl font-bold mt-6">Stateful Card Example</h2>
      <CardList<CardDataB> items={itemsB} CardComponent={CardB} />
    </div>
  );
}
