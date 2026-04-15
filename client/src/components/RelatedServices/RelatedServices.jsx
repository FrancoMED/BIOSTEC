import React from "react";
import styles from "./RelatedServices.module.css";

const RelatedServices = ({ props }) => {
  return (
    <div className={styles.container_services}>
      <p>
        <strong>Otros servicios relacionados:</strong>{" "}
        <a href={props.links[0]} className={styles.lp_link}>
          {" "}
          {props.texts[0]}{" "}
        </a>{" "}
        •{" "}
        <a href={props.links[1]} className={styles.lp_link}>
          {" "}
          {props.texts[1]}{" "}
        </a>{" "}
        •{" "}
        <a href={props.links[2]} className={styles.lp_link}>
          {" "}
          {props.texts[2]}{" "}
        </a>
        •{" "}
        <a href={props.links[3]} className={styles.lp_link}>
          {" "}
          {props.texts[3]}{" "}
        </a>
      </p>
    </div>
  );
};

export default RelatedServices;
