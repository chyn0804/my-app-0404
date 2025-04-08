// hooks/useContentQuery.ts
import { useQuery } from "@tanstack/react-query";
import { fetchContentByCategory } from "@/lib/content";

export const useContentQuery = (category: string) => {
  return useQuery({
    queryKey: ["content", category],
    queryFn: () => fetchContentByCategory(category),
    enabled: !!category, // 선택이 되어야 실행됨
    staleTime: 1000 * 60 * 5, // 5분간 캐시 유지
  });
};
