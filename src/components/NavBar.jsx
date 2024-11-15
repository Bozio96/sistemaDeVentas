import Link from "next/link";
import { Storefront, Sell, Person, Category, Store } from "@mui/icons-material";

export default function NavBar() {
  return (
    <nav className="bg-indigo-600 flex justify-around w-full">
      <Link
        href="/"
        className="flex flex-col h-full items-start justify-center rounded-full hover:bg-indigo-400 p-5 m-5"
      >
        <Store fontSize="large"/>
      </Link>

      <ul className="flex justify-around w-2/3 content-center m-0">
        <li className="w-20 inline-block rounded-full hover:bg-indigo-400 p-5 m-5">
          <Link
            href="/ventas"
            className="flex flex-col h-full items-center justify-center"
          >
            <Storefront/>
            <p>Ventas</p>
          </Link>
        </li>
        <li className="w-20 inline-block rounded-full hover:bg-indigo-400 p-5 m-5">
          <Link
            href="/pedidos"
            className="flex flex-col h-full items-center justify-center"
          >
            <Sell />
            <p>Pedidos</p>
          </Link>
        </li>
        <li className="w-20 inline-block rounded-full hover:bg-indigo-400 p-5 m-5">
          <Link
            href="/clientes"
            className="flex flex-col h-full items-center justify-center"
          >
            <Person />
            <p>Clientes</p>
          </Link>
        </li>
        <li className="w-20 inline-block rounded-full hover:bg-indigo-400 p-5 m-5">
          <Link
            href="/productos"
            className="flex flex-col h-full items-center justify-center"
          >
            <Category />
            <p>Productos</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
