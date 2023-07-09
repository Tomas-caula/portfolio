import styles from "./Proyects.module.css";
import manegeTabsIos from "../../assets/images/manegeTabsIos.svg";
import Zone from "../../assets/images/Zone.png";

type Props = {
  height: number;
};

export default function Proyects({ height }: Props) {
  return (
    <div className={styles.container} style={{ height: height }}>
      <h1 className={styles.myproyects}>Mis Proyectos</h1>
      <div className={styles.cmdcontainer}>
        <div className={styles.navbar}>
          <img className={styles.managetabs} src={manegeTabsIos} />
          <div className={styles.proyects}>
            <img src={Zone} />
            <h1>Zone</h1>
          </div>

          <div className={styles.proyects}>
            <img src={Zone} />
            <h1>Zone</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
