import Link from "next/link";
import { AddCircleRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import List from "@/components/List";

export default function Productos() {
  const productos = [
    {
      codigo: "0001",
      nombre: "Producto1",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0002",
      nombre: "Producto2",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0003",
      nombre: "Producto3",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0004",
      nombre: "Producto4",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0005",
      nombre: "Producto5",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0006",
      nombre: "Producto6",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0007",
      nombre: "Producto7",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0008",
      nombre: "Producto8",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0009",
      nombre: "Producto9",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0010",
      nombre: "Producto10",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0011",
      nombre: "Producto11",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
    {
      codigo: "0012",
      nombre: "Producto12",
      descripcion: "Descripcion",
      precio: 100,
      stock: 200,
    },
  ];

  return (
    <article>
      <h1 className="text-5xl m-3">Productos</h1>

      <List recurso={productos} />

      <ul className="fixed right-0 bottom-0">
        <li>
          <Link href="./productos/nuevo">
            <Tooltip title="Nuevo Producto" arrow>
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
