import { AddCircleRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import List from '@/components/List'

export default function Clientes() {
  const clientes = [
    {
      id: "1235124g1",
      num: "0001",
      nombre: "Rodrigo",
      apellido: "Bozio",
      dni: "12321321",
      tel: "3402486731",
      mail: "rodrigobozio96@gmail.com",
    },
    {
      id: "310ifi1093j0f",
      num: "0002",
      nombre: "Juan",
      apellido: "Joven",
      dni: "12321322",
      tel: "3411414123",
      mail: "toto@toto.com",
    },
    {
      id: "1039ur109r1",
      num: "0003",
      nombre: "Juan",
      apellido: "Viejo",
      dni: "12321333",
      tel: "3460690987",
      mail: "hugo@hugo.com",
    },

  ]
  return (
    <article>
      <h1 className="text-5xl m-3">Clientes</h1>

      <List recurso={clientes}/>

      <ul className="fixed right-0 bottom-0">
        <li>
          <Link href="#">
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

  )
}
