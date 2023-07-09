import styles from "./Header.module.css";

type Props = {
  name: string;
  title: string;
  date: number;
};

export default function Header({ name, title, date }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={[styles.left, styles.top].join(" ")}>
          <h2>{name}</h2>

          <h2>*</h2>

          <h2>{title}</h2>
        </div>
        <h3>{date}</h3>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M25 6.25V10.9375M38.2583 11.7417L34.9438 15.0563M43.75 25H39.0625M38.2583 38.2583L34.9438 34.9438M25 39.0625V43.75M15.0563 34.9438L11.7417 38.2583M10.9375 25H6.25M15.0563 15.0563L11.7417 11.7417M32.8125 25C32.8125 27.072 31.9894 29.0591 30.5243 30.5243C29.0591 31.9894 27.072 32.8125 25 32.8125C22.928 32.8125 20.9409 31.9894 19.4757 30.5243C18.0106 29.0591 17.1875 27.072 17.1875 25C17.1875 22.928 18.0106 20.9409 19.4757 19.4757C20.9409 18.0106 22.928 17.1875 25 17.1875C27.072 17.1875 29.0591 18.0106 30.5243 19.4757C31.9894 20.9409 32.8125 22.928 32.8125 25Z"
          stroke="black"
          stroke-width="3.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
