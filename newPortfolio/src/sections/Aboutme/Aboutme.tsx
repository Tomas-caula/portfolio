import styles from "./Aboutme.module.css";

type Props = {
  height: number;
};

export default function Aboutme({ height }: Props) {
  return (
    <div className={styles.container} style={{ height: height }}>
      <p className={styles.text}>
        Soy un entusiasta desarrollador Full Stack de 17 años con una gran
        pasión por la tecnología.Aquí encontrarás un vistazo a mi trabajo y mi
        dedicación en el campo de la programación. Mi objetivo es crear
        soluciones innovadoras y funcionales que impulsen el potencial de la
        tecnología. Con una sólida formación en desarrollo de software, puedo
        trabajar tanto en el front-end como en el back-end de los proyectos,
        brindando una experiencia completa y de calidad.
      </p>
    </div>
  );
}