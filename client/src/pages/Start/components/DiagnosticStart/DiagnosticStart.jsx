import React from "react";
import styles from "./DiagnosticStart.module.css";
import image from "../../../../assets/Images/chip.jpg";

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
            <h2>🔧 Tipos de reparaciones que realizamos</h2>
            <ul className={styles.lp_list}>
              <li>
                <strong>Sustitución de componentes SMD:</strong> condensadores,
                transistores, MOSFET, reguladores, etc.
              </li>
              <li>
                <strong>Reparación de circuitos de carga de baterías:</strong>{" "}
                especialidad de la casa.
              </li>
              <li>Recuperación y reprogramación de una BIOS dañada.</li>
              <li>Reballing y reemplazo de GPU/chipset.</li>
              <li>Diagnóstico completo con informe técnico.</li>
              <li>
                Reparación profesional de una placa de circuito impreso dañada
                por un líquido derramado.
              </li>
            </ul>
            <h3>
              Garantía de 6 meses en todas las reparaciones. Si no encontramos
              una solución para su equipo, no paga NADA.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticStart;
