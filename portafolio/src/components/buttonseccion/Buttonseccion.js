import './ButtonSeccion.css';

function Buttonseccion(props) {
  return (
    <button  id = "buttonSeccion" onClick={() => {console.log("ajskajsk")}}> 
       <a href={props.site}>{props.title}</a> 
    </button>
    
  );
}

export default Buttonseccion; 
