import Link from "next/link";
import { AddCircleRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import ProductList from "@/components/productos/ProductList";

export default function Productos() {
  const productos = [
    {
      cod: "0001",
      title: "Producto1",
      price: 100,
      stock: 8,
    },
    {
      cod: "0002",
      title: "Producto2",
      price: 150,
      stock: 7,
    },
    {
      cod: "0003",
      title: "Producto3",
      price: 200,
      stock: 6,
    },
    {
      cod: "0004",
      title: "Producto4",
      price: 200,
      stock: 6,
    },
    {
      cod: "0005",
      title: "Producto5",
      price: 200,
      stock: 6,
    },
    {
      cod: "0006",
      title: "Producto6",
      price: 200,
      stock: 6,
    },
    {
      cod: "0007",
      title: "Producto7",
      price: 200,
      stock: 6,
    },
    {
      cod: "0008",
      title: "Producto8",
      price: 200,
      stock: 6,
    },
    {
      cod: "0009",
      title: "Producto9",
      price: 200,
      stock: 6,
    },
    {
      cod: "0010",
      title: "Producto10",
      price: 200,
      stock: 6,
    },
  ];
  return (
    <article>
      <h1 className="text-5xl m-3">Productos</h1>

      <ProductList productos={productos} />

      <ul className="fixed right-0 bottom-0">
        <li>
          <Link href="#">
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
