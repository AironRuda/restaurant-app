export interface IOrderItem {
  productId: number;
  quantity: number;
  price: number;
  name: string;
}

export interface IOrder {
  id: number;
  items: IOrderItem[];
  total: number;
  createdAt: string;
}
