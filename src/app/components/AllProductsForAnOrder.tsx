import React from "react";
import { useGetProducts } from "@/features/products/presentation/useProducts";
import { IProductData } from "@/features/products/domain/types";

interface AllProductsForAnOrderProps {
  addProduct: (product: IProductData) => void;
}

const AllProductsForAnOrder = ({ addProduct }: AllProductsForAnOrderProps) => {
  const { productsList } = useGetProducts();
  if (!productsList) return null;
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
            onClick={() => addProduct(product)}
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllProductsForAnOrder;
