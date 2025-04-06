import axios from "axios";
import { CardDataA, CardDataB } from "@/types/card.types";

export const fetchCardAItems = async (): Promise<CardDataA[]> => {
  const res = await axios.get("/api/cardA"); // 예시 API
  return res.data;
};

export const fetchCardBItems = async (): Promise<CardDataB[]> => {
  const res = await axios.get("/api/cardB");
  return res.data;
};
