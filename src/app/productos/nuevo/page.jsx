import ItemDetail from "@/components/ItemDetail";

export default function NewProducto() {
  const edit = false;
  const cant = 0;
  const recurso = ["Codigo", "Nombre", "Descripcion", "Costo", "Stock"];

  return (
    <section>
      <h1 className="text-5xl m-3">Nuevo Producto</h1>
      <ItemDetail recurso={recurso} cant={cant} edit={edit}/>
    </section>
  );
}
