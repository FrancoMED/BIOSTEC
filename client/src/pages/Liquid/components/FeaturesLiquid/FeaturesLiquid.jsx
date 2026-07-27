import React from "react";
import styles from "./FeaturesLiquid.module.css";

const FeaturesLiquid = () => {
  return (
    <>
      <section className={styles.lp_section}>
        <div className={styles.pricing_box}>
          <h3>💡La reparación cuesta menos de lo que piensas.</h3>
          <p>
            Muchos casos pueden resolverse simplemente con una limpieza
            profesional, sin necesidad de reemplazar piezas.
          </p>

          <div className={styles.pricing_items}>
            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_positive}`}
            >
              <strong>✅ Limpieza ultrasónica especializada</strong>
              <small>
                A partir de <span>$25.000 ARS</span>, dependiendo del modelo
              </small>
            </div>

            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_negative}`}
            >
              <strong>
                ❌ ¿Reemplazar una placa base en un taller de reparación común?
              </strong>
              <small>
                Fácilmente cuesta más de <span>$100.000 ARS</span>
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

export default FeaturesLiquid;
