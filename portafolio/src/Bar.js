import logo from './logo.svg';
import './Bar.css';
import Buttonseccion from './Buttonseccion';



function Bar() {
  return (
<body id = "bar"> 
    <h1 id = "nameBar">TOMAS CAULA</h1>
    <div>
        <h1 id = "realizadoCon">realizado con React </h1>
        <div id = "reactImg"></div>
    </div>
    <div id ="ubiBtnOne">
     <Buttonseccion title = "Mis proyectos"> </Buttonseccion>
    </div>
    <div id ="ubiBtnOne">
     <Buttonseccion title = "Sobre Mi"> </Buttonseccion>
    </div>
    <div id ="ubiBtnOne">
     <Buttonseccion title = "Mis tecnologias"> </Buttonseccion>
    </div>

</body>
    
  );
}

export default Bar; 
