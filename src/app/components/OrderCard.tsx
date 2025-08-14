"use client";
import { useState } from "react";
import { formatTimeAMPM } from "../utils/formatters";
import AddOrder from "./modals/AddOrder";

interface Order {
  id: number;
  items: OrderItem[];
  total: number;
  date: string;
}

interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
  name: string;
}

const OrderCard = ({ order, index }: { order: Order; index: number }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <article className="h-44 p-2 flex flex-col items-center justify-center border-2 border-primary-bg bg-primary-bg rounded-2xl">
      <span className="border-2 border-primary bg-white rounded-full h-20 w-20 p-2 text-[3rem] font-semibold text-center">
        {index}
      </span>
      <p className="text-lg font-semibold text-center">
        {formatTimeAMPM(order.date)}
      </p>
      <p className="text-sm text-center text-gray-800">
        Precio total: ${order.total}
      </p>
      {showModal && <AddOrder setShowModal={setShowModal} />}
    </article>
  );
};

export default OrderCard;
