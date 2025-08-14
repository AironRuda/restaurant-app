import { IOrderItem } from "@/features/orders/doamin/types";
import React from "react";

interface OrderProductsProps {
  productsItems: IOrderItem[];
  handleIncreaseQuantity: (product: IOrderItem) => void;
  handleDecreaseQuantity: (product: IOrderItem) => void;
}

const OrderProducts = ({
  productsItems,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: OrderProductsProps) => {
  return (
    <div className="flex flex-col gap-2">
      {productsItems.map((product, index) => (
        <div
          className="flex items-center justify-between border-2 border-primary p-2 rounded-lg h-16"
          key={index}
        >
          <p>{product.name}</p>
          <p>${product.price}</p>
          <div className="flex items-center gap-2 h-8">
            <button
              onClick={() => handleDecreaseQuantity(product)}
              className="flex items-center justify-center bg-tertiary text-white p-2 h-8 w-8 rounded-md cursor-pointer hover:scale-102 transition-all"
            >
              -
            </button>
            <p>{product.quantity}</p>
            <button
              onClick={() => handleIncreaseQuantity(product)}
              className="flex items-center justify-center bg-tertiary text-white p-2 h-8 w-8 rounded-md cursor-pointer hover:scale-102 transition-all"
            >
              +
            </button>
          </div>
          <p>${product.price * product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderProducts;
