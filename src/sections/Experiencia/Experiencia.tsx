/** @format */

import React from "react";
import styles from "./Experiencia.module.css";
import ort from "../../assets/images/Ort.png";
import uba from "../../assets/images/Uba.png";
import palcare from "../../assets/images/palcarelog-removebg-preview.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experiencia() {
  return (
    <div className={styles.container}>
      <VerticalTimeline lineColor="var(--scroll-content)">
        <VerticalTimelineElement
          date="2018 - 2022"
          className="vertical-timeline-element--education"
          iconStyle={{
            background: "#FFF",
            color: "#fff",
          }}
          icon={<img src={ort} />}
        >
          <h3 className="vertical-timeline-element-title">
            Escuela secundaria Ort
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Buenos Aires, Argentina
          </h4>
          <p>
            Bachillerato técnico con orientación en Tecnologías de la
            Información y la Comunicación.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="07/2023 - Actual"
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#FFF", color: "#fff" }}
          icon={
            <img
              style={{
                width: "100%",
                height: "auto",
              }}
              src={palcare}
            ></img>
          }
        >
          <h3 className="vertical-timeline-element-title">Palcare</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Buenos Aires, Argentina
          </h4>
          <p>
            Trabajo como Front-End developer a remoto, con React y TypeScript
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="07/2023 - Actual"
          className="vertical-timeline-element--work"
          iconStyle={{
            background: "#FFF",
          }}
          icon={
            <img
              style={{
                width: "80%",
                height: "auto",
              }}
              src={uba}
            ></img>
          }
        >
          <h3 className="vertical-timeline-element-title">Ciencia de Datos</h3>
          <h4 className="vertical-timeline-element-subtitle">
            UBA, Buenos Aires
          </h4>
          <p>Licenciatura en ciencia de datos</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
