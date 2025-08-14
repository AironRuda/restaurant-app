"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");

  const router = useRouter();

  function signIn(e: React.FormEvent) {
    e.preventDefault();
    console.log(email, password, roll);
    router.push("/profile");
  }

  const disabledButton = !email || !password || !roll;

  return (
    <form
      onSubmit={signIn}
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
        <label htmlFor="role">Cual es su rol?</label>
        <select
          id="role"
          className="border-2 border-primary rounded-lg p-2 h-10"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        >
          <option value="">Seleccione un rol</option>
          <option value="admin">Administrador</option>
          <option value="waiter">Mesero</option>
        </select>
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
        Registrarse
      </button>
    </form>
  );
};

export default SignInForm;
