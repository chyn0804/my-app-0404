export type CardDataA = {
  title: string;
  description: string;
  extraInfo?: string;
};

export type CardDataB = {
  title: string;
  description: string;
};

export interface BaseCardProps<T> {
  data: T;
  isSelected?: boolean;
  onSelect?: () => void;
}
