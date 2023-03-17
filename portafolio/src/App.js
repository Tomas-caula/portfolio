import './App.css';
import ColorBar from "./components/ColorBar/ColorBar"
import photoofme from "./photoofme.png"
import ecoeye from "./ecoeye.png"
import zone from "./zone.png"
import Card from './components/Cards/Card';
import Bar from "./components/bar/Bar"
import picto from "./picto.png"
import cauladodero from "./cauladodero.png"
import { useRef } from 'react';



function App() {

  return (
<body>
    <div id='conteiner'>
      <div id='all'> 
     
      <div id = "bienvenido">
          <div id = "contenido"> 
            <h1>Bienvenido</h1>
            <h2>A mi portfolio</h2>
          </div>
      </div>


      <div id='sobreMi'>
          <div id='contenido'>
          <img src={photoofme}/>
          <div style={{textAlign: 'left', margin: 20}}> 
            <h1 className='aa'>
              Sobre Mi
            </h1>
            <h6>
             Hola, soy Tomas un Full stack developer. Recientemente terminé la escuela secundaria en la que hice varios proyectos que veran a continuacione
            </h6>
          </div>

        
          </div>
      </div>


      <div id='proyectos'>
        
      <ColorBar title ="Mis proyectos"> </ColorBar>
          <div id='contenido'>
              <Card title = "EcoEye" parrafo ="EcoEye es un proyecto de reconocimiento de aves argentinas, ya sea por imagenes, o por su canto mediante Machine Learning. Buscamos informar sobre la fauna que nos rodea." instagram ="https://www.instagram.com/ecoeye_/"  img  = {ecoeye}/>
              <Card title = "Picto" parrafo ="Picto es una aplicacion que ayuda a la comunicacion con personas con sindrome de aspecto autista mediante pictogramas" instagram ="https://www.instagram.com/picto_aplicacion/" github = "https://github.com/Chacortaok/Pict0" img  = {picto}/>
              <Card title = "Zone" parrafo ="Zone es una aplicacion que permite compra y venta de tickets, esta fue realizado con React Native" instagram ="wwww.com,com" img  = {zone}/>
              <Card title = "Caula&Dodero" parrafo = "Caula dodero es una static web page realizada con React" github ="www.sdasd.com" img = {cauladodero} />
          </div>
      </div>
    
      </div>
      <div id = "onlyBar"> 
        <Bar/>
      </div>
    </div>
</body>
    
  );
}

export default App; 
