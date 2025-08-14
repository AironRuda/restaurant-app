import { useState } from "react";

const AddProduct = ({
  setShowModal,
}: {
  setShowModal: (show: boolean) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | null>(null);
  const [description, setDescription] = useState<string>("");

  function handleSubmit() {
    console.log(name, price, description);
    setShowModal(false);
  }

  const bisableButton = !name || !price || price < 0 || !description;

  return (
    <div className="z-20 fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center rounded-2xl">
      <div className="bg-white p-5 rounded-2xl flex flex-col items-center gap-5 w-1/3 border-2 border-primary">
        <h2 className="text-2xl font-bold">Agregar producto</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              placeholder="Nombre del producto"
              type="text"
              className="border-2 border-primary rounded-lg p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price">Precio</label>
            <input
              id="price"
              placeholder="Precio del producto"
              type="number"
              min={0}
              className="border-2 border-primary rounded-lg p-2"
              value={price || ""}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              placeholder="Descripción del producto"
              className="border-2 border-primary rounded-lg p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
        <div className="flex w-full justify-between gap-2">
          <button
            onClick={handleSubmit}
            disabled={bisableButton}
            className={`text-white p-2 rounded-2xl w-full cursor-pointer ${
              bisableButton ? "bg-gray-400" : "bg-primary"
            } `}
          >
            Agregar
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="bg-failure text-white p-2 rounded-2xl w-full cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
