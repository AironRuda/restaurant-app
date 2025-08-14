import React from "react";
import { productsList } from "../utils/productsList";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface AllProductsForAnOrderProps {
  onAddProduct: (product: Product) => void;
}

const AllProductsForAnOrder = ({
  onAddProduct,
}: AllProductsForAnOrderProps) => {
  return (
    <div className="flex flex-col gap-2">
      {productsList.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-3 items-center gap-2 border-2 border-primary p-2 rounded-lg shadow-lg"
        >
          <p>{product.name}</p>
          <p className="text-center font-semibold">${product.price}</p>
          <button
            className="bg-primary text-white p-2 rounded-lg border-2 border-primary"
            onClick={() => onAddProduct(product)}
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllProductsForAnOrder;
