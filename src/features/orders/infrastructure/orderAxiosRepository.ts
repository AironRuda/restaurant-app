import { AxiosRepository } from "@/lib/axios/repository";
import { IOrderRepository } from "../doamin/repository";
import { IOrder, IOrderItem } from "../doamin/types";

export const apiRepository = new AxiosRepository();

const OrderEndpoints = {
  getOrders: "/orders",
  creatOrder: "/orders",
};

export class OrderAxiosRepository implements IOrderRepository {
  constructor(private readonly api = apiRepository) {}

  async getOrders(): Promise<IOrder[]> {
    try {
      const response = await this.api.Get<IOrder[]>(OrderEndpoints.getOrders);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async createOrder(order: IOrderItem[]): Promise<IOrder> {
    try {
      const response = await this.api.Post<IOrder>(OrderEndpoints.creatOrder, {
        items: order,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
