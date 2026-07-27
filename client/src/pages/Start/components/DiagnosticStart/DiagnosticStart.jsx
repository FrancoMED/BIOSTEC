import React from "react";
import styles from "./DiagnosticStart.module.css";
import image from "../../../../assets/Images/hdmi.jpg";

const DiagnosticStart = () => {
  return (
    <section className={styles.lp_section}>
      {/* <div className="container"> */}
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Teclado-roto" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>🔍 Qué probar en casa</h2>
            <ul className={styles.lp_list}>
              <li>
                <strong>Prueba con otro cable o dispositivo:</strong> Así
                descartarás que el problema esté en el accesorio.
              </li>
              <li>
                <strong>Prueba con otros puertos:</strong> comprueba si el
                problema se limita a uno solo.
              </li>
              <li>
                <strong>Limpieza con aire comprimido:</strong> aveces solo es
                suciedad.
              </li>
              <li>
                <strong>NO:</strong> Utilice objetos metálicos para limpiar
                (provoca un cortocircuito) ni aplique fuerza para "sujetar" el
                cable (rompe el conector).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticStart;
