import React from "react";
import styles from "./FeaturesOverheating.module.css";

const FeaturesOverheating = () => {
  return (
    <>
      <section className={styles.lp_section}>
        <div className={styles.pricing_box}>
          <h3>💡 Limpieza + mantenimiento preventivo</h3>
          <p>
            Limpieza profunda, sustitución de la pasta térmica y revisión del
            sistema de refrigeración.
          </p>

          <div className={styles.pricing_items}>
            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_positive}`}
            >
              <strong>✅ Limpieza profesional + pasta térmica</strong>
              <small>
                A partir de <span>$25.000 ARS</span>, dependiendo del modelo
              </small>
            </div>

            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_negative}`}
            >
              <strong>❌ ¿Ignorar el problema?</strong>
              <small>
                Los daños futuros podrían costar mas de{" "}
                <span>$100.000 ARS</span>
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
            💰 El precio depende de la complejidad de la reparación y del
            modelo. Por esta razón,
            <br />
            <strong>el presupuesto es totalmente gratuito:</strong> el cliente
            solo abona si el equipo tiene una solución efectiva.
          </p>
        </div>
      </section>
    </>
  );
};

export default FeaturesOverheating;
