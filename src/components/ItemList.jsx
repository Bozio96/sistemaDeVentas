const ItemList = ({ objeto, cols }) => {
  return (
    <div className="flex flex-row m-1 justify-evenly">
      {Object.keys(objeto).map((key) => (
        <div key={key} className={`flex flex-col w-1/${cols}`}>
          <input
            type="text"
            value={objeto[key]}
            className={`p-1 text-black  h-10 border-2 border-black mx-1 truncate`}
            readOnly
          />
        </div>
      ))}
      <button
        className={`bg-indigo-500 w-1/${cols} h-10 border-2 border-black mx-1 px-3 hover:bg-indigo-400`}
      > {/*Redirije a un formulario editable de "objeto"*/}
        Ver
      </button>
    </div>
  );
};
export default ItemList;