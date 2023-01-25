import logo from '../../logo.svg';
import './Bar.css';
import Buttonseccion from '../buttonseccion/Buttonseccion';
import react from "../../react.png"



function Bar() {
  return (
<body id = "bar"> 
      <div id='conteiner'>
        <div className='name'>
          <h1 className='txt' id = "nameBar">TOMAS </h1> 
          <h1 className='txt'>CAULA</h1>
          </div>
        <div className='buttons'>
          <div id ="ubiBtnOne">
          <Buttonseccion title = "Mis proyectos"> </Buttonseccion>
          </div>
          <div id ="ubiBtnOne">
            <Buttonseccion title = "Sobre Mi"> </Buttonseccion>
          </div>
          <div id ="ubiBtnOne">
            <Buttonseccion title = "Mis tecnologias"> </Buttonseccion>
          </div>
        </div>
        <div className='made-with'>
            <h1 id = "realizadoCon">realizado con React </h1>
            <img src={react}/>
        </div>

      </div>

      
</body>
    
  );
}

export default Bar; 
