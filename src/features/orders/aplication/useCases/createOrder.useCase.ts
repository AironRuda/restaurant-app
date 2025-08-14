import { IOrderRepository } from "../../doamin/repository";
import { IOrder, IOrderItem } from "../../doamin/types";

export class CreateOrderUseCase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  validateOrder(order: IOrderItem[]): void {
    if (!order || order.length === 0) {
      throw {
        message: "No se proporcionó una orden",
        statusCode: 400,
      };
    }
  }

  async execute(order: IOrderItem[]): Promise<IOrder> {
    try {
      this.validateOrder(order);
      return await this.orderRepository.createOrder(order);
    } catch (error) {
      throw error;
    }
  }
}
