
import ItemDetail from "@/components/ItemDetail";

export default function NewCliente() {
  const edit = false;
  const cant = 0;
  const recurso = ["Nombre", "Apellido", "Dni", "Telefono", "Email"];

  return (
    <section>
      <h1 className="text-5xl m-3">Nuevo Cliente</h1>
      <ItemDetail recurso={recurso} cant={cant} edit={edit}/>
    </section>
  );
}