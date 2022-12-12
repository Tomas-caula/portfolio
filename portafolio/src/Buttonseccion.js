import './ButtonSeccion.css';

function Buttonseccion(props) {
  return (
    <button id = "buttonSeccion" onClick={() => console.log("ajskajsk")}> 
        {props.title}
    </button>
    
  );
}

export default Buttonseccion; 
