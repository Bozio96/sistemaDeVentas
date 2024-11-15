const PedidosList = ({ pedidos }) => {
    return (
      <div className="flex flex-col border-white border-2 m-2">
        {pedidos.map((pedido) => (
          <div key={pedido.num} className="flex flex-row m-2 justify-evenly">
            <textarea
              name=""
              id=""
              value={`N°: ${pedido.num}`}
              className="p-1 text-black w-1/5 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`Cliente: ${pedido.cliente}`}
              className="p-1 text-black w-1/5 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`Monto:  ${pedido.monto}`}
              className="p-1 text-black w-1/5 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`Fecha:  ${pedido.fecha}`}
              className="p-1 text-black w-1/5 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <button className="bg-indigo-500 w-1/5 h-10 border-2 border-black mx-1 hover:bg-indigo-400">Ver</button>
          </div>
        ))}
      </div>
    );
  };

  export default PedidosList