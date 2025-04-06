// src/hooks/useCommonSelect.ts
import { API_COMMON } from "@/constants/api.common";
import { useGenericQuery } from "./useGenericQuery";

export const useSelectOptions = (key: string) => {
  const { data, isLoading, error } = useGenericQuery<
    { label: string; value: string }[]
  >(
    [`${API_COMMON.selectOptions.queryKey}${key}`],
    `${API_COMMON.selectOptions.url}?key=${key}`
  );

  return {
    options: data || [],
    isLoading,
    error,
  };
};
