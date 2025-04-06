import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
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
