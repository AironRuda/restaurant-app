import Link from "next/link";
import LogInForm from "../components/LogInForm";

const page = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <article className="flex flex-col items-center justify-center gap-5 m-5 p-5 bg-primary-bg border-2 border-primary rounded-2xl">
        <h1 className="text-2xl font-bold">
          Inicie sesion para acceder a productos y pedidos
        </h1>
        <LogInForm />
        <Link
          href="/"
          className="bg-failure text-white p-2 rounded-2xl w-1/3 hover:scale-105 transition-all"
        >
          <p className="text-center font-semibold">Regresar</p>
        </Link>
      </article>
    </div>
  );
};

export default page;
