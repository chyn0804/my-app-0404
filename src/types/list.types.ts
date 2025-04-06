interface ListProps<T> {
  items: T[];
  CardComponent: React.FC<{
    data: T;
    isSelected: boolean;
    onSelect: () => void;
    eventHandlers?: any;
  }>;
  eventHandlers?: any;
}
