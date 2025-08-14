"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function logIn(e: React.FormEvent) {
    e.preventDefault();
    console.log(email, password);
    router.push("/profile");
  }

  const disabledButton = !email || !password;

  return (
    <form
      onSubmit={logIn}
      className="flex flex-col w-3/4 border-2 border-primary rounded-2xl bg-white p-5 gap-5"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          id="email"
          placeholder="Ingrese su correo"
          className="border-2 border-primary rounded-lg p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Ingrese su contraseña"
          className="border-2 border-primary rounded-lg p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className={`bg-primary text-white p-2 rounded-lg cursor-pointer ${
          disabledButton ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={disabledButton}
      >
        Iniciar sesion
      </button>
    </form>
  );
};

export default LogInForm;
