import React from "react";
import styles from "./DiagnosticDrivers.module.css";
import image from "../../../../assets/Images/components.png";

const DiagnosticDrivers = () => {
  return (
    <section className={styles.lp_section}>
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Teclado-roto" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>¿Cómo resolvemos su problema?</h2>
            <ul className={styles.lp_list}>
              <li>
                <strong>Diagnóstico preciso: </strong>Identificamos qué
                componente carece de su controlador.
              </li>
              <li>
                <strong>Búsqueda oficial: </strong>Descargamos el controlador
                directamente del sitio web del fabricante (Dell, HP, Lenovo,
                etc.).
              </li>
              <li>
                <strong>Instalación correcta: </strong>Seguimos el procedimiento
                técnico adecuado.
              </li>
              <li>
                <strong>Configuración optimizada: </strong> Hemos ajustado los
                parámetros para obtener un mejor rendimiento.
              </li>
              <li>
                <strong>Prueba completa: </strong> Hemos comprobado que todo
                funciona al 100%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticDrivers;
