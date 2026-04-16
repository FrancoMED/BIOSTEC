import React from "react";
import styles from "./FeaturesKeyboard.module.css";

const FeaturesKeyboard = () => {
  return (
    <>
      <section className={styles.lp_section}>
        <div className={styles.pricing_box}>
          <h3>💡 Cambiar el teclado cuesta menos de lo que parece</h3>
          <p>
            En la mayoría de los casos, el reemplazo del teclado es un
            procedimiento rápido que no requiere sustituir otras piezas del
            equipo.
          </p>

          <div className={styles.pricing_items}>
            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_positive}`}
            >
              <strong>
                ✅ Reemplazo profesional de teclado con garantía de 6 meses
              </strong>
              <small>
                A partir de <span>$25.000 ARS</span>, dependiendo del modelo y
                la disponibilidad.
              </small>
            </div>

            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_negative}`}
            >
              <strong>❌ Teclados genéricos sin garantía</strong>
              <small>
                Pueden despegarse, trabarse o dejar de funcionar en pocas
                semanas.
              </small>
            </div>
          </div>

          <p
            className="
							margin-top: 1.5rem;
							font-size: 1.05rem;
							font-weight: 500;
							line-height: 1.8;
						"
          >
            💰 El costo final varía según el modelo del notebook y el tipo de
            teclado instalado. Por esta razón,
            <br />
            <strong>el presupuesto es totalmente gratuito:</strong> el cliente
            solo abona si el equipo tiene una solución efectiva.
          </p>

          {/* <p className="margin-top: 1rem; font-size: 0.95rem; opacity: 0.9">
            ✅ Orçamento detalhado antes de qualquer reparo
            <br />✅ 6 meses de garantia incluída
          </p> */}
        </div>
      </section>
    </>
  );
};

export default FeaturesKeyboard;
