import styles from "./SkillComponent.module.css";
interface tool {
  color: string;
  text: string;
}

type Props = {
  namesection: string;
  tools: tool[];
};

export default function SkillComponent({ tools, namesection }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectiontext}>{namesection}</h1>
      <div className={styles.content}>
          {tools.map((item) => (
            <div style={{backgroundColor: item.color}} className={styles.tools} key={item.text}>
              <h1 className={styles.tooltxt}>{item.text}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}
