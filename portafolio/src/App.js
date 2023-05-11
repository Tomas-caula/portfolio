import './App.css';
import ColorBar from "./components/ColorBar/ColorBar"
import photoofme from "./photoofme.png"
import ecoeye from "./ecoeye.png"
import zone from "./zone.png"
import Card from './components/Cards/Card';
import Bar from "./components/bar/Bar"
import picto from "./picto.png"
import cauladodero from "./cauladodero.png"
import { motion } from "framer-motion";
import { useRef } from 'react';
import zoneImage from "./img/ZoneImage.png";
import Cmd from "../src/cmd/cmd"
import { useState } from 'react';




function App() {
  const constraintsRef = useRef(null);
  const [shouldShowZone, setShouldShowZone] = useState(false)
  const ecoeyeRef = useRef(null)
  return (
<body ref={constraintsRef}>

    <div   className='a'> 
      <Cmd body = {constraintsRef} > </Cmd>
        <div className='firstBar'>
            <div className='NameAndWork'> 
                <h1>Tomás Caula</h1>
                <h1>*</h1>
                <h1>Full-Stack Develope</h1>
            </div>

        </div>

        <div className='ContactBar'> 
          <h1>Contact</h1>
        </div>


        <div className='AboutMebar'> 
            <h2>2023</h2>
            <div>
              <h1>
                  Hola soy Tomas Caula un Full-Stack Developer de 17 años que hace ya mas de 3 años me sumerjo dentro de las tecnologias como React Node.Js, etc.
              </h1>
              <h1>Te invito a ver mis proyectos</h1>
            </div>
        </div>

        <div className='ProyectsBar'> 
            <h1 onClick={() => setShouldShowZone(true)} >//*Zone</h1>
            <h1 ref={ecoeyeRef}>//*EcoEye</h1>
            <h1>//*Picto</h1>
            <div className='line'></div>

        </div>
    </div>
  
</body>
    
  );
}

export default App; 
