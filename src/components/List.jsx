import ItemList from '@/components/ItemList'

const List = ({ recurso }) => {
  function camelToPascalandSeparate(text) {
    const pascalCase = text.charAt(0).toUpperCase() + text.slice(1);
    const separated = pascalCase.replace(/([A-Z])/g, " $1").trim();
    return separated;
  }
  const cols = 6
  const titles = Object.keys(recurso[0]);
  const newTitles = titles.map(camelToPascalandSeparate);

  return (
    // Tabla general
    <div className="flex flex-col border-white border-2 m-2">
      {/* Titulos */}
      <div className="flex flex-row text-white w-full ml-2 justify-around">
        {newTitles.map((title, index) => (
          <p key={index} className={`w-1/${cols} p-1 mx-1`}>
            {title}
          </p>
        ))}
        <p className={`w-1/${cols} p-1 mx-1`}></p>
      </div>
      {/* Tabla con Datos */}
      {recurso.map((obj, index)=>(
        <ItemList key={index} objeto={obj} cols={cols}/>
      ))}  
        
    </div>
  );
};
export default List;