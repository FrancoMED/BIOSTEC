import React from "react";
import styles from "./DiagnosticHinges.module.css";
import image from "../../../../assets/Images/bisagra.jpg";

const DiagnosticHinges = () => {
  return (
    <section className={styles.lp_section}>
      {/* <div className="container"> */}
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Teclado-roto" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>🔧 Cómo lo solucionamos</h2>
            <ul className={styles.lp_list}>
              <li>
                <strong>Reemplazo de bisagras:</strong> Piezas nuevas o
                reacondicionadas compatibles con su modelo.
              </li>
              <li>
                <strong>Reconstrucción de la carcasa:</strong> Refuerzo con
                fibra, metal o plástico soldado.
              </li>
              <li>
                <strong>Reparación de soportes:</strong> Reposicionamiento y
                fijación de los puntos de apoyo.
              </li>
              <li>
                <strong>Reemplazo de la tapa/marco:</strong> Si el daño es
                extenso, reemplazamos la pieza completa.
              </li>
            </ul>
            <h3>
              Si durante la reparación detectamos un cable flexible dañado, le
              avisaremos antes de realizar cualquier servicio adicional.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticHinges;
