import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col items-center h-[50dvh] w-[50dvw] justify-center gap-20 m-5 p-5 bg-primary-bg rounded-2xl">
        <div className="flex flex-col gap-8">
          <p className="text-2xl font-bold text-center">
            Bienvenido a restaurant-app
          </p>
          <p className="text-xl font-bold text-center">
            Para continuar, registrese o inicie sesion
          </p>
        </div>
        <div className="flex justify-center w-full gap-2">
          <Link
            href="/log-in"
            className="bg-primary text-white p-2 rounded-2xl w-1/3 hover:scale-105 transition-all"
          >
            <p className="text-center font-semibold">Iniciar sesion</p>
          </Link>

          <Link
            href="/sign-in"
            className="bg-primary text-white p-2 rounded-2xl w-1/3 hover:scale-105 transition-all"
          >
            <p className="text-center font-semibold">Registrarse</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
