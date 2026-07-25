import React from "react";
import styles from "./FeaturesHinges.module.css";

const FeaturesHinges = () => {
  return (
    <>
      <section className={styles.lp_section}>
        <div className={styles.pricing_box}>
          <h3>💡 Reparación de bisagras: más económico que reemplazarlas</h3>
          <p>
            El refuerzo estructural y la sustitución de las bisagras solucionan
            el problema sin necesidad de reemplazar toda la tapa.
          </p>

          <div className={styles.pricing_items}>
            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_positive}`}
            >
              <strong>✅ Reparación de bisagras</strong>
              <small>
                A partir de <span>$25.000 ARS</span>, dependiendo del modelo y
                la disponibilidad.
              </small>
            </div>

            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_negative}`}
            >
              <strong>¿Reemplazar toda la cubierta?</strong>
              <small>Puede alcanzar los $60.000 ARS</small>
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
            💰 El precio depende de la magnitud del daño y del modelo de la
            notebook. Por esta razón,
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

export default FeaturesHinges;
