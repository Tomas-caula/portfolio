import './ButtonSeccion.css';

function Buttonseccion(props) {
  return (
    <button  id = "buttonSeccion" onClick={() => {console.log("ajskajsk")}}> 
       <a href='#img'>{props.title}</a> 
    </button>
    
  );
}

export default Buttonseccion; 
