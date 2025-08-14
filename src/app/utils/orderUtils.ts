import { IOrder, IOrderItem } from "@/features/orders/doamin/types";

export const sortOrdersByDate = (orders: IOrder[]): IOrder[] => {
  return [...orders].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });
};

export const getReverseIndex = <T>(arr: T[], index: number): number => {
  return arr.length - index;
};

export const calculateOrderTotalPrice = (orderItems: IOrderItem[]): number => {
  const totalPrice = orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return Number(totalPrice.toFixed(2));
};
