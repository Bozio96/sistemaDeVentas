import { AddCircleRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import  VentasList  from "@/components/ventas/VentasList";

export default function Ventas() {
  const ventas = [
    { num: "0001", cliente: "jUAN", monto: "100", productos: "Todo", fecha: "hoy" },
    { num: "0002", cliente: "PEDRO", monto: "200", productos: "Nada", fecha: "ayer" },
    { num: "0003", cliente: "LUIS", monto: "300", productos: "Droga", fecha: "Saturno" },
  ];

  return (
    <article>
      <h1 className="text-5xl m-3">Ventas</h1>

      <VentasList ventas={ventas} />

      <ul className="fixed right-0 bottom-0">
        <li>
          <Link href="#">
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
