import React from "react";
import styles from "./DiagnosticKeyboard.module.css";
import image from "../../../../assets/Images/teclado-notebook.jpg";

const DiagnosticKeyboard = () => {
  return (
    <section className={styles.lp_section}>
      {/* <div className="container"> */}
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Teclado-roto" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>🧪 Prueba rápida que podés hacer ahora</h2>
            {/* <p>
              Antes de descartar tu equipo o cambiar la pantalla, podés realizar
              estas pruebas simples que ayudan a identificar dónde está la
              falla.
            </p> */}
            <h3>🔌 Conecte un teclado externo por el puerto USB:</h3>
            <ul className={styles.lp_list}>
              <li>
                <strong>Si el teclado USB funciona correctamente:</strong> el
                problema está en el teclado interno del notebook.
              </li>
              <li>
                <strong>
                  Si el problema persiste también con el teclado externo:
                </strong>{" "}
                puede tratarse de una falla en el sistema o en la placa base.
              </li>
            </ul>
            <h3>🛠️ ¿Ya cambió el teclado y el problema continúa?</h3>
            <ul className={styles.lp_list}>
              <li>
                <strong>
                  Podría tratarse de un problema en la placa madre:
                </strong>{" "}
                El equipo técnico está especializado en microsoldadura y
                reparación de placas base de notebooks. Ofrecemos garantía de
                hasta 6 meses en todos los trabajos realizados.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticKeyboard;
