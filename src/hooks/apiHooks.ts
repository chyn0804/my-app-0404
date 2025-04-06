import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import axios from "axios";

export const useGenericMutation = <TData = unknown, TVariables = void>(
  method: "post" | "put" | "delete",
  url: string,
  options?: Omit<UseMutationOptions<TData, unknown, TVariables>, "mutationFn">
): UseMutationResult<TData, unknown, TVariables> => {
  return useMutation({
    mutationFn: async (variables: TVariables) => {
      const response = await axios.request<TData>({
        method,
        url,
        data: variables,
      });
      return response.data;
    },
    ...options,
  });
};

export const useGenericQuery = <T>(
  key: readonly string[],
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
