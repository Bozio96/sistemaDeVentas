const ClientList = ({ clientes }) => {
    return (
      <div className="flex flex-col border-white border-2 m-2">
        {clientes.map((client) => (
          <div key={client.id} className="flex flex-row m-2 justify-evenly">
            <textarea
              name=""
              id=""
              value={`N° Cliente: ${client.num}`}
              className="p-1 text-black w-1/7 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`Nombre: ${client.nombre}`}
              className="p-1 text-black w-1/7 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`Apellido:  ${client.apellido}`}
              className="p-1 text-black w-1/7 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <textarea
              name=""
              id=""
              value={`DNI:  ${client.dni}`}
              className="p-1 text-black w-1/7 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
                        <textarea
              name=""
              id=""
              value={`Cel:  ${client.tel}`}
              className="p-1 text-black w-1/7 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
                        <textarea
              name=""
              id=""
              value={`Email:  ${client.mail}`}
              className="p-1 text-black w-1/7 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
              readOnly
              
            ></textarea>
            <button className="bg-indigo-500 w-1/7 h-10 border-2 border-black mx-1 hover:bg-indigo-400">Ver</button>
          </div>
        ))}
      </div>
    );
  };
export default ClientList;