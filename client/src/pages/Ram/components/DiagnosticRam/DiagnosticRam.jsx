import React from "react";
import styles from "./DiagnosticRam.module.css";
import image from "../../../../assets/Images/ram.jpg";

const DiagnosticRam = () => {
  return (
    <section className={styles.lp_section}>
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Teclado-roto" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>Capacidades comunes</h2>
            <ul className={styles.lp_list}>
              <li>
                <strong>4GB: </strong>básico, normalmente no es suficiente RAM
              </li>
              <li>
                <strong>8GB: </strong>uso normal.
              </li>
              <li>
                <strong>16GB: </strong>ideal para tareas exigentes.
              </li>
              <li>
                <strong>32GB o mas: </strong>para uso profesional.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticRam;
