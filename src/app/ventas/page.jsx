import { AddCircleRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import List from "@/components/List";

export default function Ventas() {
  const ventas = [
    {
      numero: "0001",
      cliente: "Juan",
      monto: "100",
      productos: "Todo",
      fecha: "hoy",
    },
    {
      numero: "0002",
      cliente: "PEDRO",
      monto: "200",
      productos: "Nada",
      fecha: "ayer",
    },
    {
      numero: "0003",
      cliente: "luis",
      monto: "300",
      productos: "Droga",
      fecha: "Saturno",
    },
  ];

  return (
    <article>
      <h1 className="text-5xl m-3">Ventas</h1>

      <List recurso={ventas} />

      <ul className="fixed right-0 bottom-0">
        <li>
          <Link href="./ventas/nuevo">
            {" "}
            <Tooltip title="Nueva Venta" arrow>
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
