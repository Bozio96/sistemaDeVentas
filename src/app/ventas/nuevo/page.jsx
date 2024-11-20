import ItemDetail from "@/components/ItemDetail";

export default function NewVenta() {
  const edit = false;
  const cant = 0;
  const recurso = ["Cliente", "Monto", "Producto", "Fecha"];

  return (
    <section>
      <h1 className="text-5xl m-3">Nueva Venta</h1>
      <ItemDetail recurso={recurso} cant={cant} edit={edit}/>
    </section>
  );
}
