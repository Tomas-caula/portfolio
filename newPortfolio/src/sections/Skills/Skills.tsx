/** @format */

import SkillComponent from "../../components/SkillComponent/SkillComponent";
import styles from "./Skills.module.css";

type Props = {
  height?: number;
};

const FrontEnd = [
  {
    color: "#5AC8FA80",
    text: "React.js",
  },
  {
    color: "#5AC8FA80",
    text: "Javascript",
  },
  {
    color: "#5AC8FA80",
    text: "Typescript",
  },
  {
    color: "#5AC8FA80",
    text: "HTML",
  },
  {
    color: "#5AC8FA80",
    text: "CSS",
  },
  {
    color: "#5AC8FA80",
    text: "React native",
  },
];

const BackEnd = [
  {
    color: "#5856D680",
    text: "C#",
  },
  {
    color: "#30D15880",
    text: "Node.js",
  },
  {
    color: "#71D4FF80",
    text: "Firebase",
  },
  {
    color: "#34C75980",
    text: "MongoDB",
  },
  {
    color: "#71D4FF80",
    text: "Python",
  },
  {
    color: "#71D4FF80",
    text: "Express",
  },
];

const Tools = [
  {
    color: "#BF5AF280",
    text: "Github",
  },
  {
    color: "#FF950080",
    text: "Postman",
  },
  {
    color: "#71D4FF80",
    text: "Visual Studio Code",
  },
];

export default function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mis skills</h1>
      <SkillComponent namesection="Front end" tools={FrontEnd} />
      <SkillComponent namesection="Back end" tools={BackEnd} />
      <SkillComponent namesection="Herramientas" tools={Tools} />
    </div>
  );
}
