import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="container bg-indigo-600 flex justify-around h-20">
      <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1702329778/IMG-20210509-WA0027-removebg-preview_wbkzyv.png" alt="LogoPagina" className="w-8 m-2 bg-white"/>
      <ul className="flex justify-around w-full h-full content-center ">
        <li className="w-2">
          <Link href='/ventas'>Ventas</Link>
        </li>
        <li className="w-2">
          <Link href='/pedidos'>Pedidos</Link>
        </li>
        <li className="w-2">
          <Link href='/clientes'>Clientes</Link>
        </li>
        <li className="w-2">
          <Link href='/productos'>Productos</Link>
        </li>
      </ul>
    </nav>
  );
}