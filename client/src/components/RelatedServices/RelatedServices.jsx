import React from "react";
import styles from "./RelatedServices.module.css";

const RelatedServices = () => {
  return (
    <div className={styles.container_services}>
      <p>
        <strong>Otros servicios relacionados:</strong>
        <br />
        <a href="../reinstalar-windows.html" className={styles.lp_link}>
          Reinstalacion de Windows
        </a>
        ·
        <a
          href="../../upgrades-notebook/trocar-hdd-por-ssd.html"
          className={styles.lp_link}
        >
          Upgrade para SSD
        </a>
        ·
        <a
          href="../../upgrades-notebook/ampliar-ram.html"
          className={styles.lp_link}
        >
          Ampliar Memoria RAM
        </a>
      </p>
    </div>
  );
};

export default RelatedServices;
