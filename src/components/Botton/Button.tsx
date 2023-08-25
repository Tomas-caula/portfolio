/** @format */

import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children?: ReactNode;
  link: string;
};

export default function Button({ children, link }: Props) {
  return (
    <div
      onClick={() => (window.location.href = link)}
      className={styles.container}
    >
      {children}
    </div>
  );
}
