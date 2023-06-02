import './App.css';
import { useRef, useState} from 'react'
import Draggable from 'react-draggable';
import Cmd from './cmd/cmd';


function App() {
  const constraintsRef = useRef(null);

  const zonetext  = (
    <div>
      <h1>Zone es una aplicacion creada en React Native que busca ayudar al usuario a divertirse por las noches, gracias a su 
        algoritmo de busquedas de amigos permite guardar esos recuerdos par SIEMPRE. <br/> ¿Ahora que pasa si no tenes donde salir? <br/> Bueno zone permitira la compra de tickets eficazmente para previas, fiestas y zones con una facil implementacion de MercadoPago.
        <br/>
        Tecnologias Usadas por mi: MercadoPago APIs, NodeJS, React Native, firebse Functions, fireStore    
        <br/> 
        Rol: FullStack-Developer 
       </h1>

    </div>
  ) 

  const ecoeyetext = (
    <div> 
      <h1>
        ¿Alguna vez te paso de ir caminando por la calle ver una hermosa ave y no saber cual es?
        <br/>
        A nosotros tambien! Por eso Sofi, Ilan, Facu, Lucas y Yo (Tomás) decidimos realizar una aplicacion web que mediante Inteligencia Artificial permite identificar a aquella ave que tanto te gusto mediante cantico y foto.
        <br/>
         Web
         <a href='https://www.ecoeye.com.ar/'> https://www.ecoeye.com.ar/ </a> 
        <br/>
        Instagram: <a href='https://www.instagram.com/ecoeye_/'>@ecoeye_</a>
        
        
      </h1>
    </div>
  )

  const pictoText = (
    <div> 
      <h1>
        Picto es una aplicacion de escritorio y web que ayuda a aquellas personas que poseen dificultades en la comunicacion, ya se por trastorno de aspecto autitsta o por otro tipo de dificultad, mediante de la utilizacion de pictogramas descriptivos. 
        <br/>
        web: <a href=' https://boring-fermat-2d9e01.netlify.app/'> https://boring-fermat-2d9e01.netlify.app/</a> 
        <br/>
        instagram: <a href='https://www.instagram.com/picto_aplicacion/'>@picto_aplicacion</a>
        <br/>
        contacto: pictowebapp@gmail.com
        
      </h1>
    </div>
  )

const [modals, setModals] = useState([])


  function renderNewCmd (texto, imgTilte, name, ico) {
      const newModal  = {
        id: Date.now(),
        texto: texto,
        imgTilte: `images/${imgTilte}`,
        name: name,
        ico: `images/${ico}`
      }

      setModals([...modals, newModal])
  
  }

  const handleCloseModal = (id) => {
    const updatedModals = modals.filter((modal) => modal.id !== id);
    setModals(updatedModals);
  };
 
  return (
<body ref={constraintsRef}>

  <div className="container">
    <div className='a'> 
    {modals.map((modal) => (
        <Draggable key={modal.id}
        handle='.NavBar'
        defaultPosition={{ x: window.innerWidth / 2, y: window.innerHeight / 2 }}
        >
          <div> 
           <Cmd name = {modal.name} close={handleCloseModal} id = {modal.id} image = {modal.imgTilte} texto = {modal.texto} ico = {modal.ico}/>
          </div>
        </Draggable>
      ))}
        <div className='firstBar'>
            <div className='NameAndWork'> 
                <h1>Tomás Caula</h1>
                <h1>*</h1>
                <h1>Full-Stack Developer</h1>
            </div>

        </div>

        <div className='ContactBar'> 
          <h1>Contact</h1>
        </div>


        <div className='AboutMebar'> 
          <div className="content">
            <h2>2023</h2>
            <div className='text'>
              <h1>
              Soy un entusiasta desarrollador Full Stack de 17 años con una gran pasión por la tecnología. 
              <br/> Aquí encontrarás un vistazo a mi trabajo y mi dedicación en el campo de la programación.
              </h1>    
              <h1>
              Mi objetivo es crear soluciones innovadoras y funcionales que impulsen el potencial de la tecnología. Con una sólida formación en desarrollo de software, puedo trabajar tanto en el front-end como en el back-end de los proyectos, brindando una experiencia completa y de calidad.
              </h1>
            </div> 
            </div>
        </div>

        <div className='ProyectsBar'> 
            <h1 className='proyectsName' onClick={() => {renderNewCmd(zonetext, "zoneTitle.png",  "Zone","zone.png")}}>//*Zone</h1>
            <h1 className='proyectsName' onClick={() => {renderNewCmd(ecoeyetext, "ecoeye.png", "EcoEye", "ecoeye.png" )}}>//*EcoEye</h1>
            <h1 className='proyectsName' onClick = {()=> {renderNewCmd(pictoText, "picto.png", "Picto", "picto.png")}}>//*Picto</h1>
            <div className='line'></div>

        </div>
    </div>

  </div>

</body>
    
  );
}

export default App; 
