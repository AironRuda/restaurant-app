import { IOrder } from "../../doamin/types";
import { IOrderRepository } from "../../doamin/repository";

export class GetOrdersUseCase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async execute(): Promise<IOrder[]> {
    return this.orderRepository.getOrders();
  }
}
