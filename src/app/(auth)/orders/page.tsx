"use client";
import React, { useState } from "react";
import OrderCard from "../../components/OrderCard";
import { getReverseIndex, sortOrdersByDate } from "../../utils/orderUtils";
import AddOrder from "../../components/modals/AddOrder";
import Image from "next/image";
import { useGetOrders } from "@/features/orders/presentation/useOrders";
import { useUserContext } from "@/app/context/UserProvider";

const Orders = () => {
  const [showModal, setShowModal] = useState(false);
  const { ordersList } = useGetOrders();
  const { user } = useUserContext();

  if (!ordersList) return null;
  const sortedOrders = sortOrdersByDate(ordersList);

  return (
    <div className="m-5">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-2xl font-bold">Lista de pedidos</h1>
        {user?.role === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-primary text-white p-2 rounded-lg cursor-pointer hover:scale-105 transition-all"
          >
            <Image src="/add-icon.svg" alt="add-icon" width={30} height={30} />
            <p className="text-center font-semibold">Agregar pedido</p>
          </button>
        )}
      </div>
      <div className="grid grid-cols-5 gap-5">
        {sortedOrders.map((order, index) => (
          <OrderCard
            key={order.id}
            order={order}
            index={getReverseIndex(sortedOrders, index)}
          />
        ))}
      </div>
      {showModal && <AddOrder setShowModal={setShowModal} />}
    </div>
  );
};

export default Orders;
