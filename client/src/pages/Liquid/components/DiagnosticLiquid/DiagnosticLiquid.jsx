import React from "react";
import styles from "./DiagnosticLiquid.module.css";
import image from "../../../../assets/Images/corto-mother.jpg";

const DiagnosticLiquid = () => {
  return (
    <section className={styles.lp_section}>
      {/* <div className="container"> */}
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Teclado-roto" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>💀 ¿Por qué es tan serio?</h2>
            <p>El líquido conduce la electricidad y provoca:</p>
            <ul className={styles.lp_list}>
              <li>
                <strong>Los cortocircuitos:</strong> queman los componentes al
                instante.
              </li>
              <li>
                <strong>Oxidación progresiva:</strong> corrosión que avanza con
                el tiempo.
              </li>
              <li>
                <strong>Corrosión de la soldadura:</strong> las pistas de la
                placa base se deterioran.
              </li>
              <li>
                <strong>Daños en los chips:</strong> CPU, memoria,
                controladores, etc.
              </li>
            </ul>
            <h3>
              ADVERTENCIA: Aunque el portátil parezca funcionar "normalmente",
              el daño interno está progresando. ¡Podría dejar de funcionar en
              cualquier momento!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticLiquid;
