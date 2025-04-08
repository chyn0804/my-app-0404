import axios from "axios";

// lib/api/content.ts
export const fetchContentByCategory = async (category: string) => {
  const res = await axios.get(`/api/content?category=${category}`);
  return res.data;
};
