import Aboutme from "../../sections/Aboutme/Aboutme";
import Proyects from "../../sections/Proyects/Proyects";
import Skills from "../../sections/Skills/Skills";
import styles from "./Scrollbar.module.css";
import { useElementSize } from 'usehooks-ts'

export default function Scrollbar() {
  const [squareRef, {height}] = useElementSize()

  return (
    <div className={styles.container}>
      <div className={styles.conteinercontent}>
        <div className={styles.sections} ref = {squareRef} > 
          <Aboutme height = {height}/>
          <Proyects height = {height}/>
          <Skills height = {height}/> 
        </div>
      </div>
    </div>
  );
}
