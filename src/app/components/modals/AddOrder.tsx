import React, { useState } from "react";
import AllProductsForAnOrder from "../AllProductsForAnOrder";
import OrderProducts from "../OrderProducts";
import { IProductData } from "@/features/products/domain/types";
import { IOrderItem } from "@/features/orders/doamin/types";
import { calculateOrderTotalPrice } from "@/app/utils/orderUtils";
import { useCreateOrder } from "@/features/orders/presentation/useOrders";

const AddOrder = ({
  setShowModal,
}: {
  setShowModal: (show: boolean) => void;
}) => {
  const [order, setOrder] = useState<IOrderItem[]>([]);

  const { createOrder } = useCreateOrder();

  function handleAddProduct(product: IProductData) {
    const productInOrder = order.find(
      (item) => item.productId === Number(product.id)
    );

    if (productInOrder) {
      handleIncreaseQuantity(productInOrder);
      return;
    }
    const orderItem: IOrderItem = {
      productId: Number(product.id),
      quantity: 1,
      price: Number(product.price),
      name: product.name,
    };
    setOrder((prevOrder) => [...prevOrder, orderItem]);
  }

  function handleIncreaseQuantity(product: IOrderItem) {
    setOrder((prevOrder) =>
      prevOrder.map((item) =>
        item.productId === product.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function handleDecreaseQuantity(product: IOrderItem) {
    if (product.quantity <= 1) {
      handleRemoveProduct(product);
      return;
    }
    setOrder((prevOrder) =>
      prevOrder.map((item) =>
        item.productId === product.productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function handleRemoveProduct(product: IOrderItem) {
    setOrder((prevOrder) =>
      prevOrder.filter((item) => item.productId !== product.productId)
    );
  }

  const buttonDisabled = order.length === 0;

  async function generateOrder() {
    try {
      await createOrder(order);
      setShowModal(false);
    } catch (_error) {
      console.error("Error al crear el pedido:", _error);
    }
  }

  function closeOrder() {
    setShowModal(false);
  }

  return (
    <div className="z-20 fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center">
      <article className="bg-white w-[90dvw] h-[90dvh] p-5 rounded-2xl flex flex-col items-center gap-5 border-2 border-primary">
        <h2 className="text-2xl font-bold">Nuevo pedido</h2>
        <div className=" grid grid-cols-2 items-center h-full w-full gap-5">
          <div className="w-full h-[75dvh] overflow-y-auto">
            <AllProductsForAnOrder addProduct={handleAddProduct} />
          </div>
          <div className="flex flex-col items-center w-full h-[75dvh] p-5 pt-0">
            <div className="flex-1 overflow-y-auto w-full">
              <p className="text-xl font-bold text-center">
                Lista de productos en la orden
              </p>
              <OrderProducts
                productsItems={order}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
              />
            </div>
            <div className="flex flex-col w-full items-center gap-2 border-t-2 border-black/20 pt-5">
              <p>
                <span className="font-semibold mr-2">Total:</span>$
                {calculateOrderTotalPrice(order)}
              </p>
              <div className="flex items-center justify-center gap-2 w-full">
                <button
                  className="bg-failure text-white p-2 rounded-2xl w-1/3 cursor-pointer hover:scale-102 transition-all"
                  onClick={closeOrder}
                >
                  Cancelar
                </button>
                <button
                  className={`text-white p-2 rounded-2xl w-1/3 hover:scale-102 transition-all ${
                    buttonDisabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary cursor-pointer"
                  }`}
                  onClick={generateOrder}
                  disabled={buttonDisabled}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AddOrder;
