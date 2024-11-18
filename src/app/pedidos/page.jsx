import { AddCircleRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import List from '@/components/List'

export default function Pedidos() {
  const pedidos = [
    {
      num: "0001",
      cliente: "Juan",
      monto: 100,
      fecha: 'Navidad wacho',
      productos: [
        "Pan", "Queso"
      ]
    },
    {
      num: "0002",
      cliente: "Pedro",
      monto: 100,
      fecha: 'Mañana',
      productos: [
        "Pan", "Queso"
      ]
    },
  ]
  return (
    <article>
      <h1 className="text-5xl m-3">Pedidos</h1>

      <List recurso={pedidos}/>

      <ul className="fixed right-0 bottom-0">
        <li>
          <Link href="#">
            <Tooltip title="Nuevo Pedido" arrow>
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
