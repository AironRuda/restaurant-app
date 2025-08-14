"use client";
import { useLogin } from "@/features/auth/presentation/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserContext } from "@/app/context/UserProvider";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);

  const { login, isLoading } = useLogin();

  const { login: loginContext } = useUserContext();

  useEffect(() => {
    setIsError(false);
  }, [email, password]);

  const router = useRouter();

  async function logIn(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { email: userEmail, role } = await login({ email, password });
      loginContext({ email: userEmail, role });
      router.push("/profile");
    } catch (error) {
      console.error("Error al iniciar sesion:", error);
      setIsError(true);
    }
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

      <p className={isError ? "text-failure visible" : "invisible"}>
        Error al iniciar sesion, intente de nuevo
      </p>

      <button
        type="submit"
        className={`bg-primary text-white p-2 rounded-lg cursor-pointer 
          ${disabledButton ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={disabledButton}
      >
        {isLoading ? "Cargando..." : "Iniciar sesion"}
      </button>
    </form>
  );
};

export default LogInForm;
