import { AddCircleRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import List from "@/components/List";

export default function Clientes() {
  const clientes = [
    {
      id: "1235124g1",
      numero: "0001",
      nombre: "Rodrigo",
      apellido: "Bozio",
      dni: "12321321",
      telefono: "3402486731",
      email: "rodrigobozio96@gmail.com",
    },
    {
      id: "310ifi1093j0f",
      numero: "0002",
      nombre: "Juan",
      apellido: "Joven",
      dni: "12321322",
      telefono: "3411414123",
      email: "toto@toto.com",
    },
    {
      id: "1039ur109r1",
      numero: "0003",
      nombre: "Juan",
      apellido: "Viejo",
      dni: "12321333",
      telefono: "3460690987",
      email: "hugo@hugo.com",
    },
  ];

  const clientesNuevoFormato = clientes.map(
    ({ id, nombre, apellido, ...rest }) => ({
      nombreCompleto: `${nombre} ${apellido}`,
      ...rest,
    })
  );

  return (
    <article>
      <h1 className="text-5xl m-3">Clientes</h1>

      <List recurso={clientesNuevoFormato} />

      <ul className="fixed right-0 bottom-0">
        <li>
          <Link href="./clientes/nuevo">
            <Tooltip title="Nuevo Cliente" arrow>
              <AddCircleRounded
                sx={{ fontSize: 70 }}
                className="m-5 hover:bg-indigo-400 rounded-full"
              />
            </Tooltip>
          </Link>
        </li>
      </ul>
    </article>
  );
}
