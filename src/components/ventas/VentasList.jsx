const VentasList = ({ ventas }) => {
    return (
      <div className="flex flex-col border-white border-2 m-2">
        {ventas.map((venta) => (
          <div key={venta.num} className="flex flex-row m-2 justify-evenly">
            <textarea
              name=""
              id=""
              value={`N°: ${venta.num}`}
              className="p-1 text-black w-1/6 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`Cliente: ${venta.cliente}`}
              className="p-1 text-black w-1/6 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`Monto:  ${venta.monto}`}
              className="p-1 text-black w-1/6 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`Productos:  ${venta.productos}`}
              className="p-1 text-black w-1/6 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`Fecha:  ${venta.fecha}`}
              className="p-1 text-black w-1/6 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <button className="bg-indigo-500 w-1/6 h-10 border-2 border-black mx-1 hover:bg-indigo-400">Ver</button>
          </div>
        ))}
      </div>
    );
  };
  export default VentasList;
  