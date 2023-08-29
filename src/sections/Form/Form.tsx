/** @format */

import styles from "./Form.module.css";
import TextInput from "../../components/TextInput/TextInput";
import TextArea from "../../components/TextArea/TextArea";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_r5e52oi",
        "template_yami4or",
        form.current,
        "Xz6VmElR43MwQ4HJs"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error: string) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactame</h1>

      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.content}>
          <TextInput label="Nombre"></TextInput>
          <TextInput label="Email"></TextInput>
          <div style={{ gridColumn: "1/3" }}>
            <TextInput label="Asunto"></TextInput>
          </div>
          <TextArea label="Mensaje" className={styles.fullWidth} />
          <button className={styles.button}>
            Enviar Mensaje{" "}
            <span style={{ height: "1em" }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g filter="url(#filter0_d_8_320)">
                  <path
                    d="M5 11L15 1L5 11ZM15 1H7.5H15ZM15 1V8.5V1Z"
                    fill="var(--background-color)"
                  />
                  <path
                    d="M5 11L15 1M15 1H7.5M15 1V8.5"
                    stroke="var(--background-color)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_8_320"
                    x="0.25"
                    y="0.25"
                    width="19.5"
                    height="19.5"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_8_320"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_8_320"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          </button>
        </div>
      </form>

      {}
    </div>
  );
}
