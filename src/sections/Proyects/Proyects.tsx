/** @format */

import styles from "./Proyects.module.css";
import manegeTabsIos from "../../assets/images/manegeTabsIos.svg";
import Zone from "../../assets/images/Zone.png";
import { useState } from "react";
import Button from "../../components/Botton/Button";
import PalcareLogo from "../../assets/images/palcarelog.jpeg";

import GitHubSvg from "../../assets/svg/GitHubVector.svg";
import OpenSvg from "../../assets/svg/OpenSvg.svg";
import Instagram from "../../assets/svg/Instagram.svg";

type Props = {
  height?: number;
};

export default function Proyects({ height }: Props) {
  const [page, setPage] = useState(0);

  const content = [
    <div className={styles.zone}>
      <div className={styles.title}>
        <img src={Zone} alt="Zone" className={styles.image} />
        <h1>Zone</h1>
      </div>

      <div className={styles.description}>
        <p>
          <b>¿Que es Zone?</b> Zone es una <b>Red Social</b> que busca ayudar a
          las personas a encontrar su sitio ideal para salir a la noche y
          guardar recuerdos con tus amigos gracias a un <b>algoritmo</b> de
          buscade de conocidos cercanos. En esta aplicacion podras crear y{" "}
          <b>comercializar</b> tickets de tus eventos gracias a su{" "}
          <b>facil metodo de pago</b> (mercado pago).
        </p>
        <p>
          <b>¿Cual fue mi rol?</b> En Zone soy Full Stack Developer. Esto me
          permitío ganar experiencia en tanto en el Front-end (React-native)
          como en el Back-end programando las diferentes pantallas, creando un
          algoritmo, creando y manejando base de datos en MongoDb y Firebase,
          realizando APIs que nos permitan desde el pago de los tickets hasta
          cualquier otra consulta necesaria como puede ser Login y SingUp
        </p>
      </div>

      <div className={styles.buttons}>
        <Button
          link="https://www.instagram.com/_zoneapp_/"
          children={
            <>
              {" "}
              <img src={Instagram} /> <h1>Instagram</h1>{" "}
            </>
          }
        ></Button>
      </div>
    </div>,

    <div className={styles.zone}>
      <div className={styles.title}>
        <img src={PalcareLogo} alt="Palcare" className={styles.image} />
        <h1>Palcare</h1>
      </div>

      <div className={styles.description}>
        <p>
          PalCare es una empresa internacional de salud con más de 15 años de
          experiencia brindando servicios de salud en el domicilio de nuestros
          pacientes. En el año 2018, PalCare inicia operaciones en el Ecuador,
          logrando innovar con sus servicios la red de salud en el país. Nuestro
          objetivo es brindar atención médica en domicilio para aquellos
          pacientes que son referidos del área de consulta médica, o están en
          etapa de hospitalización y que ameritan iniciar, continuar o terminar
          su tratamiento en domicilio para la resolución de su patología.
        </p>
        <p>
          <b>¿Cual es mi rol?</b> Actualmente me encuentro desarollando como
          Front-end Developer la pagina de HomeCare de palcare
        </p>
      </div>

      <div className={styles.buttons}>
        <Button
          link="https://www.instagram.com/palcare.ar/"
          children={
            <>
              {" "}
              <img src={Instagram} /> <h1>Instagram</h1>{" "}
            </>
          }
        ></Button>
        <Button
          link="https://www.palcarehomecare.com"
          children={
            <>
              {" "}
              <h1>Website</h1> <img src={OpenSvg} />{" "}
            </>
          }
        ></Button>
      </div>
    </div>,

    <div className={styles.zone}>
      <div className={styles.title}>
        <img
          src="https://boring-fermat-2d9e01.netlify.app/img/Picto_Logo_Black.ico"
          className={styles.image}
        />
        <h1>Picto</h1>
      </div>

      <div className={styles.description}>
        <p>
          Picto es una aplicacion que busca ayudar a la gente con problemas en
          la comunicacion, desde TEA (trastorno de aspecto autista) hasta mudos
          mediante el uso de pictogramas descriptivos y facil interpretacion
        </p>
        <p>
          <b>¿Cual es mi rol?</b> Mi rol fue Full Stack, tanto en la aplicacion
          de escritorio realizada con C# hasta la misma en web
        </p>
      </div>

      <div className={styles.buttons}>
        <Button
          link="https://www.instagram.com/picto_aplicacion/"
          children={
            <>
              {" "}
              <img src={Instagram} /> <h1>Instagram</h1>{" "}
            </>
          }
        ></Button>  
      </div>
    </div>,

  ];

  return (
    <div className={styles.container} style={{ height: height }}>
      <h1 className={styles.myproyects}>Mis Proyectos</h1>
      <div className={styles.cmdcontainer}>
        <div className={styles.navbar}>
          <img className={styles.managetabs} src={manegeTabsIos} />
          <div className={styles.proyects} onClick={() => setPage(0)}>
            <img src={Zone} />
            <h1>Zone</h1>
          </div>
          <div className={styles.proyects} onClick={() => setPage(1)}>
            <img src="https://palcarehealth.com/favicon.png" />
            <h1>Palcare</h1>
          </div>
          <div className={styles.proyects} onClick={() => setPage(2)}>
            <img src="https://boring-fermat-2d9e01.netlify.app/img/Picto_Logo_Black.ico" />
            <h1>Picto</h1>
          </div>
         
        </div>

        {content[page]}
      </div>
    </div>
  );
}
