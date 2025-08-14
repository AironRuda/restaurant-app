"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateUser } from "@/features/auth/presentation/hooks/useAuth";
import { useUserContext } from "../context/UserProvider";

const SignInForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [isError, setIsError] = useState(false);

  const { login: loginContext } = useUserContext();

  const { createUser, isLoading } = useCreateUser();
  const router = useRouter();

  useEffect(() => {
    setIsError(false);
  }, [name, email, password, role]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { email: userEmail, role: userRole } = await createUser({
        name,
        email,
        role,
        password,
      });
      loginContext({ email: userEmail, role: userRole });
      router.push("/profile");
    } catch (_error) {
      console.error("Error al crear el usuario:", _error);
      setIsError(true);
    }
  }

  const disabledButton = !name || !email || !password || !role;

  return (
    <form
      onSubmit={signIn}
      className="flex flex-col w-3/4 border-2 border-primary rounded-2xl bg-white p-5 gap-5"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Ingrese su nombre"
          className="border-2 border-primary rounded-lg p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
          value={role}
          onChange={(e) => setRole(e.target.value)}
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
      <p className={isError ? "text-failure visible" : "invisible"}>
        Error al crear el usuario, intente de nuevo
      </p>
      <button
        type="submit"
        className={`bg-primary text-white p-2 rounded-lg cursor-pointer ${
          disabledButton ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={disabledButton}
      >
        {isLoading ? "Cargando..." : "Registrarse"}
      </button>
    </form>
  );
};

export default SignInForm;
