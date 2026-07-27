import React from "react";
import styles from "./DiagnosticOverheating.module.css";
import image from "../../../../assets/Images/sobrecalentamiento.jpg";

const DiagnosticOverheating = () => {
  return (
    <section className={styles.lp_section}>
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Teclado-roto" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>🔧 Servicios para solucionar el sobrecalentamiento</h2>
            <ul className={styles.lp_list}>
              <li>
                <strong>Limpieza completa del sistema de refrigeración:</strong>
                enfriador, conductos y disipador de calor.
              </li>
              <li>Aplicación de pasta térmica de alto rendimiento.</li>
              <li>
                Sustitución y ajuste de las almohadillas térmicas según las
                especificaciones del proyecto.
              </li>
              <li>
                Sustituir un ventilador que esté desgastado o que haga un ruido
                excesivo.
              </li>
              <li>
                Reparación de un disipador de calor suelto, deformado o mal
                fijado.
              </li>
              <li>
                Prueba térmica con monitorización de la temperatura bajo carga.
              </li>
            </ul>
            <h3>
              Si ningún otro método resuelve el problema de sobrecalentamiento ,
              ofrecemos reparación electrónica de la placa base para corregir
              fallos en los sensores, el VRM y los circuitos de alimentación.
              Todos los servicios cuentan con una garantía de 6 meses
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticOverheating;
