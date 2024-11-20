import Link from "next/link";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Tooltip } from "@mui/material";

const ItemDetail = ({ recurso, cant, edit }) => {
  return (
    <>
      <div className="flex flex-col w-full justify-center">
        <form action="#" method="post" className="flex flex-col">
          {recurso.map((rec)=>(
            <input 
            className="w-4/5 m-auto my-2 p-2"
            type="text"
            placeholder={`Ingrese ${rec}`}
            key={rec}
            />
          ))
        }
          <button
            className={`bg-indigo-500 w-1/5 h-10 border-2 border-black mx-auto px-3 hover:bg-indigo-400`}
          >
            <Link href="#">Aceptar</Link>
          </button>
          {/* El form y el button "submit" podría ir en el componente superior y solamente los inputs estar en este  */}
        </form>
      </div>

      <ul className="fixed left-0 bottom-0">
        <li>
          <Link href="./">
            <Tooltip title="Volver" arrow>
              <KeyboardReturnIcon
                sx={{ fontSize: 70 }}
                className="m-5 hover:bg-indigo-400 rounded-full"
              />
            </Tooltip>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default ItemDetail;
