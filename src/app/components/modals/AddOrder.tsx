import React from "react";
import AllProductsForAnOrder from "../AllProductsForAnOrder";
import OrderProducts from "../OrderProducts";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const order = {
  id: Date.now(),
  items: [],
  total: 0,
  date: new Date().toISOString(),
};

const AddOrder = ({
  setShowModal,
}: {
  setShowModal: (show: boolean) => void;
}) => {
  function handleAddProduct(product: Product) {
    console.log("add product", product);
  }

  const buttonDisabled = order.items.length === 0;

  function generateOrder() {
    console.log("generate order");

    console.log(order);
    setShowModal(false);
  }

  function closeOrder() {
    console.log("close order");
    setShowModal(false);
  }

  return (
    <div className="z-20 fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center">
      <article className="bg-white w-[90dvw] h-[90dvh] p-5 rounded-2xl flex flex-col items-center gap-5 border-2 border-primary">
        <h2 className="text-2xl font-bold">Nuevo pedido</h2>
        <div className=" grid grid-cols-2 items-center h-full w-full gap-5">
          <div className="w-full h-[75dvh] overflow-y-auto">
            <AllProductsForAnOrder onAddProduct={handleAddProduct} />
          </div>
          <div className="flex flex-col items-center w-full h-[75dvh] p-5 pt-0">
            <div className="flex-1 overflow-y-auto w-full">
              <p className="text-xl font-bold text-center">
                Lista de productos en la orden
              </p>
              <OrderProducts />
            </div>
            <div className="flex flex-col w-full items-center gap-2 border-t-2 border-black/20 pt-5">
              <p>
                <span className="font-semibold mr-2">Total:</span>${order.total}
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
