"use client";
import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import AddProduct from "../../components/modals/AddProduct";
import Image from "next/image";
import { useUserContext } from "../../context/UserProvider";
import { useGetProducts } from "@/features/products/presentation/useProducts";

const Products = () => {
  const { productsList } = useGetProducts();
  const [showModal, setShowModal] = useState(false);
  const { user } = useUserContext();
  return (
    <div className="m-5">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-2xl font-bold">Lista de productos</h1>
        {user?.role === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-primary text-white p-2 rounded-lg cursor-pointer hover:scale-105 transition-all"
          >
            <Image src="/add-icon.svg" alt="add-icon" width={30} height={30} />
            <p className="font-semibold">Agregar producto</p>
          </button>
        )}
      </div>
      <div className="grid grid-cols-5 gap-5">
        {productsList?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {showModal && <AddProduct setShowModal={setShowModal} />}
    </div>
  );
};

export default Products;
