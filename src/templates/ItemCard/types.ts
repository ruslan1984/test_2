export type TItemCardReducer = {
  loading: boolean;
  error: boolean;
  data: TItemCard | null;
};

export type TItemCard = {
  id: string;
  name: string;
  price: number;
  content: string;
};
