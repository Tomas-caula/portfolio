import logo from './logo.svg';
import './App.css';
import ColorBar from './ColorBar';
import Bar from './Bar';
import photoofme from "./photoofme.png"
import github from "./github.png"
import instagram from "./instagram.png"
import zone from "./zone.png"
import Card from './components/Card';
import ecoeye from "./ecoeye.png"


function Content() {
  return (
<body> 
    <div id='content'>
      <div id='content-bienvenido'>
        <h1 id ="bienvenido">Bienvenid@</h1>
      </div>
      
      <div id='content-bienvenido' > 
      <div id='all'>
        <ColorBar title = "Sobre Mi"/>
        <img id = "img" src={photoofme}></img>
        <p>Hola, soy Tomas un Full stack developer. Recientemente terminé la escuela secundaria en la que hice varios proyectos que veran a continuacione</p>
        </div>
      </div>

       <div id='content-bienvenido'> 
        <ColorBar title = "Mis Proyectos"/>
        <div className='cards'>
        <Card title = "Zone" img = {zone} instagram = "https://www.instagram.com/_zoneapp_/" github = "https://youtube.com" parrafo = "Zone es un red social creada para compartir eventos. Incluyendo la compra y venta de tickets mediante mercado pago" />
        <Card title = "EcoEye" img = {ecoeye} instagram = "https://www.instagram.com/ecoeye_/" github = "https://youtube.com" parrafo = "EcoEye es una aplicacion que permite el reconocimiento de aves mediante IA" />
        </div>
       </div>

       <div id='content-bienvenido'> 
        <ColorBar title= "Mis Tecnologias"></ColorBar>
       </div>
   
    

    </div>
    
</body>
    
  );
}

export default Content; 
