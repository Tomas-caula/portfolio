import logo from './logo.svg';
import './App.css';
import ColorBar from './ColorBar';
import Bar from './Bar';
import photoofme from "./photoofme.png"



function Content() {
  return (
<body> 
    <div id='content'>
      <h1 id ="bienvenido">Bienvenid@</h1>
      <ColorBar title = "Sobre Mi"/>
      <img id = "img" src={photoofme}></img>
      <p>Hola, soy Tomas un Full stack developer. Recientemente terminé la escuela secundaria en la que hice varios proyectos que veran a continuacione</p>
      <ColorBar title = "Sobre Mi"/>
    </div>
    
</body>
    
  );
}

export default Content; 
