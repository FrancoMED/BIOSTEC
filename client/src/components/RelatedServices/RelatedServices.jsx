import React from "react";
import { Link } from "react-router-dom";
import styles from "./RelatedServices.module.css";

const RelatedServices = ({ props }) => {
  return (
    <div className={styles.container_services}>
      <p>
        <strong>Otros servicios relacionados:</strong>{" "}
        <Link
          to={props.links[0]}
          className={styles.lp_link}
          onClick={() => window.scrollTo(0, 0)}
        >
          {" "}
          {props.texts[0]}{" "}
        </Link>{" "}
        •{" "}
        <Link
          to={props.links[1]}
          className={styles.lp_link}
          onClick={() => window.scrollTo(0, 0)}
        >
          {" "}
          {props.texts[1]}{" "}
        </Link>{" "}
        •{" "}
        <Link
          to={props.links[2]}
          className={styles.lp_link}
          onClick={() => window.scrollTo(0, 0)}
        >
          {" "}
          {props.texts[2]}{" "}
        </Link>
        •{" "}
        <Link
          to={props.links[3]}
          className={styles.lp_link}
          onClick={() => window.scrollTo(0, 0)}
        >
          {" "}
          {props.texts[3]}{" "}
        </Link>
      </p>
    </div>
  );
};

export default RelatedServices;
