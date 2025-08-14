import Image from "next/image";
import React from "react";

interface Product {
  name: string;
  price: number;
  description: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="h-64 p-2 flex flex-col items-center justify-center border-2 border-primary-bg bg-primary-bg rounded-2xl">
      <div className="border-2 border-primary bg-white rounded-full p-2">
        <Image
          src="restaurant-icon.svg"
          alt="product image"
          width={100}
          height={100}
        />
      </div>
      <h2 className="text-xl font-bold text-center">{product.name}</h2>
      <p className="text-lg font-semibold text-center">${product.price}</p>
      <p className="text-sm text-center text-gray-800">{product.description}</p>
    </article>
  );
};

export default ProductCard;
