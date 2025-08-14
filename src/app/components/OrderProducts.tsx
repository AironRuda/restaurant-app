import React from "react";

const productsItems = [
  {
    productId: 1,
    quantity: 2,
    price: 10,
    name: "Producto 1",
  },
  {
    productId: 6,
    quantity: 1,
    price: 20,
    name: "Producto 2",
  },
  {
    productId: 16,
    quantity: 1,
    price: 30,
    name: "Producto 3",
  },
];

const OrderProducts = () => {
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
              onClick={() => product.quantity--}
              className="flex items-center justify-center bg-tertiary text-white p-2 h-8 w-8 rounded-md cursor-pointer hover:scale-102 transition-all"
            >
              -
            </button>
            <p>{product.quantity}</p>
            <button
              onClick={() => product.quantity++}
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
