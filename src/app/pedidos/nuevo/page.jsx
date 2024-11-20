import ItemDetail from "@/components/ItemDetail";

export default function NewPedido() {
  const edit = false;
  const cant = 0;
  const recurso = ["Cliente", "Monto", "Fecha", "Productos"];

  return (
    <section>
      <h1 className="text-5xl m-3">Nuevo Pedido</h1>
      <ItemDetail recurso={recurso} cant={cant} edit={edit}/>
    </section>
  );
}
