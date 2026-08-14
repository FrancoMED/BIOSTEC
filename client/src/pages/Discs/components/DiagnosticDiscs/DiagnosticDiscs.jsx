import React from "react";
import styles from "./DiagnosticDiscs.module.css";
import image from "../../../../assets/Images/ssd.jpg";

const DiagnosticDiscs = () => {
  return (
    <section className={styles.lp_section}>
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Teclado-roto" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>5 señales de que tu disco duro (HDD) está fallando</h2>
            <ul className={styles.lp_list}>
              <li>
                <strong>Extremadamente lento: </strong>
                Windows tarda muchísimo en iniciarse y abrir los programas.
              </li>
              <li>
                <strong>Pantalla azul de la muerte: </strong>
                Errores frecuentes y reinicios inesperados.
              </li>
              <li>
                <strong>Congelamientos constantes: </strong>
                El sistema se bloquea sin motivo aparente.
              </li>
              <li>
                <strong>Ruidos extraños: </strong>
                clics, silbidos o sonidos provenientes del disco duro.
              </li>
              <li>
                <strong>Archivos dañados: </strong>
                Dificultad para acceder a documentos y fotos.
              </li>
            </ul>
            <h3>Todos los servicios cuentan con una garantía de 6 meses</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticDiscs;
