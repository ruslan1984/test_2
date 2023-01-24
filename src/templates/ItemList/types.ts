export type TItem = {
  id: string;
  name: string;
  price: number;
};

export type TItemListReducer = {
  loading: boolean;
  data: TItem[];
  error: boolean;
};
