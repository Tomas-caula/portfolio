/** @format */

import styles from "./TextInput.module.css";

type Props = {
  label: string;
  register?: any;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function TextInput({ label, register, error }: Props) {
  return (
    <div className={styles.container}>
      <label className={styles.texto} htmlFor="">
        {label}
      </label>
      <input {...register} className={styles.input} />

      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}
