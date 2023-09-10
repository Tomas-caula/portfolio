/** @format */

import React, { useId } from "react";
import styles from "./TextArea.module.css";

type Props = {
  label: string;
  className: React.InputHTMLAttributes<HTMLTextAreaElement>;
  register?: any;
  error?: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
  label,
  className,
  register,
  error,
  ...props
}: Props) {
  const randomId = useId();

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label htmlFor={props.id || randomId} className={styles.label}>
        {label}
      </label>
      <textarea {...register} className={styles.input} />
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}
