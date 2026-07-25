import React from "react";
import styles from "./FeaturesPorts.module.css";

const FeaturesPorts = () => {
  return (
    <>
      <section className={styles.lp_section}>
        <div className={styles.pricing_box}>
          <h3>💡 Reparación de puertos: una solución asequible</h3>
          <p>
            La microsoldadura especializada resuelve el problema sin necesidad
            de sustituir toda la placa base.
          </p>

          <div className={styles.pricing_items}>
            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_positive}`}
            >
              <strong>✅ Reparación de puertos</strong>
              <small>
                A partir de <span>$25.000 ARS</span>, dependiendo del modelo y
                la disponibilidad.
              </small>
            </div>

            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_negative}`}
            >
              <strong>❌ ¿Ignorar y seguir usando?</strong>
              <small>
                Puerto con mal contacto provoca cortocircuito. Placa de circuito
                quemada: <span>+$100.000 ARS</span>
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

          {/* <p className="margin-top: 1rem; font-size: 0.95rem; opacity: 0.9">
            ✅ Orçamento detalhado antes de qualquer reparo
            <br />✅ 6 meses de garantia incluída
          </p> */}
        </div>
      </section>
    </>
  );
};

export default FeaturesPorts;
