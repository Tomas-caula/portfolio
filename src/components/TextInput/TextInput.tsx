/** @format */

import styles from "./TextInput.module.css";
import React from "react";

type Props = {
  label: string;
};

export default function TextInput({ label }: Props) {
  return (
    <div className={styles.container}>
      <label className={styles.texto} htmlFor="">
        {label}
      </label>
      <input name={label} className={styles.input}></input>
    </div>
  );
}
