import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import axios from "axios";

export const useGenericQuery = <T>(
  key: string[],
  url: string,
  params?: Record<string, any>,
  options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
): UseQueryResult<T> => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const response = await axios.get<T>(url, { params });
      return response.data;
    },
    ...options,
  });
};
