import { IOrder, IOrderItem } from "./types";

export interface IOrderRepository {
  getOrders(): Promise<IOrder[]>;
  createOrder(order: IOrderItem[]): Promise<IOrder>;
}
