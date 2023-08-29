/** @format */

import Aboutme from "../../sections/Aboutme/Aboutme";
import Experiencia from "../../sections/Experiencia/Experiencia";
import Form from "../../sections/Form/Form";
import Proyects from "../../sections/Proyects/Proyects";
import Skills from "../../sections/Skills/Skills";
import styles from "./Scrollbar.module.css";

export default function Scrollbar() {
  return (
    <div className={styles.container}>
      <div className={styles.conteinercontent}>
        <div className={styles.sections}>
          <Aboutme />
          <Proyects />
          <Skills />
          <Experiencia />
          <Form />
        </div>
      </div>
    </div>
  );
}
