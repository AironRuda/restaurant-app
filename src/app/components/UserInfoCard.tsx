"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const UserInfoCard = ({
  userData,
}: {
  userData: { email: string; roll: string };
}) => {
  const router = useRouter();
  function logout() {
    console.log("logout");
    router.push("/");
  }
  return (
    <article className="flex flex-col items-center m-5 p-10 w-1/3 gap-10 bg-primary-bg border-2 border-primary rounded-2xl justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1>
          <strong>Usuario</strong>
        </h1>
        <p className="text-2xl">{userData.email}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full border-2 border-primary bg-white p-2">
          <Image
            src={
              userData.roll === "admin" ? "/admin-icon.svg" : "/waiter-icon.svg"
            }
            alt="user-icon"
            width={100}
            height={100}
          />
        </div>
        <p className="text-xl font-bold">
          {userData.roll === "admin" ? "Administrador" : "Mesero"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-failure text-white p-2 rounded-2xl w-1/2 hover:scale-105 transition-all"
      >
        <p className="text-center font-semibold">Cerrar sesion</p>
      </button>
    </article>
  );
};

export default UserInfoCard;
