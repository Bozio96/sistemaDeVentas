const ProductList = ({ productos }) => {
  return (
    <div className="flex flex-col border-white border-2 m-2">
      {productos.map((product) => (
        <div key={product.cod} className="flex flex-row m-2 justify-evenly">
          <textarea
            name=""
            id=""
            value={`Código: ${product.cod}`}
            className="p-1 text-black w-1/5 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
            readOnly
            
          ></textarea>
          <textarea
            name=""
            id=""
            value={`Titulo: ${product.title}`}
            className="p-1 text-black w-1/5 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
            readOnly
            
          ></textarea>
          <textarea
            name=""
            id=""
            value={`Precio:  ${product.price}`}
            className="p-1 text-black w-1/5 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
            readOnly
            
          ></textarea>
          <textarea
            name=""
            id=""
            value={`Stock:  ${product.stock}`}
            className="p-1 text-black w-1/5 h-10 border-2 border-black mx-1 overflow-hidden resize-none"
            readOnly
            
          ></textarea>
          <button className="bg-indigo-500 w-1/5 h-10 border-2 border-black mx-1 hover:bg-indigo-400">Ver</button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
