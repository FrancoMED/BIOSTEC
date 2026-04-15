import React from "react";
import styles from "./Diagnostic.module.css";
import image from "../../../../assets/Images/pantalla-rota.jpg";

const Diagnostic = () => {
  return (
    <section className={styles.lp_section}>
      {/* <div className="container"> */}
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Componentes" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>🧪 Prueba rápida que podés hacer ahora</h2>
            {/* <p>
              Antes de descartar tu equipo o cambiar la pantalla, podés realizar
              estas pruebas simples que ayudan a identificar dónde está la
              falla.
            </p> */}
            <h3>🔌 Conectá un monitor externo por HDMI</h3>
            <ul className={styles.lp_list}>
              <li>
                <strong>Si el monitor externo funciona correctamente:</strong>{" "}
                El problema suele estar en la pantalla o en el cable flex.
              </li>
              <li>
                <strong>Si el monitor externo muestra el mismo defecto:</strong>{" "}
                La falla puede estar en la placa base o en el circuito de video,
                un tipo de reparación que no todos los servicios técnicos
                realizan.
              </li>
            </ul>
            <h3>🖐️ Mové la tapa lentamente</h3>
            <ul className={styles.lp_list}>
              <li>
                <strong>Si la imagen cambia o parpadea:</strong> Es muy probable
                que se trate de un problema en el cable flex, generalmente
                reparable sin cambiar la pantalla.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;
