import './App.css';
import ColorBar from "./components/ColorBar/ColorBar"
import photoofme from "./photoofme.png"
import ecoeye from "./ecoeye.png"
import Card from './components/Cards/Card';
import Bar from "./components/bar/Bar"



function App() {
  return (
<body>
    <div id='conteiner'>
      <div id='all'> 
     
      <div id = "bienvenido">
          <div id = "contenido"> 
            <h1>Bienvenido</h1>
            <h2>A mi portafolio</h2>
          </div>
      </div>
      <ColorBar title ="Sobre Mi"> </ColorBar>

      <div id='sobreMi'>
          <div id='contenido'>
          <img src={photoofme}/>
          <h6>
          Hola, soy Tomas un Full stack developer. Recientemente terminé la escuela secundaria en la que hice varios proyectos que veran a continuacione
          </h6>
          </div>
      </div>

      <ColorBar title ="Mis proyectos"> </ColorBar>

      <div id='proyectos'>
          <div id='contenido'>
              <Card title = "Hola" parrafo ="asas" instagram ="wwww.com,com" github = "wwww.sikdja.com" img  = {ecoeye}/>
              <Card title = "Hola" parrafo ="asas" instagram ="wwww.com,com" github = "wwww.sikdja.com" img  = {ecoeye}/>
              <Card title = "Hola" parrafo ="asas" instagram ="wwww.com,com" github = "wwww.sikdja.com" img  = {ecoeye}/>
              <Card title = "aa" parrafo = "aass" instagram = "www.com.com " github ="www.sdasd.com" img = {ecoeye} />
              <Card title = "Hola" parrafo ="asas" instagram ="wwww.com,com" github = "wwww.sikdja.com" img  = {ecoeye}/>
              <Card title = "aa" parrafo = "aass" instagram = "www.com.com " github ="www.sdasd.com" img = {ecoeye} />
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
