/** @format */

import React, { useId } from "react";
import styles from "./TextArea.module.css";

type Props = {
  label: string;
  className: React.InputHTMLAttributes<HTMLTextAreaElement>;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({ label, className, ...props }: Props) {
  const randomId = useId();

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label htmlFor={props.id || randomId} className={styles.label}>
        {label}
      </label>
      <textarea
        name={label}
        className={styles.input}
        id={props.id || randomId}
        {...props}
      />
    </div>
  );
}
