import React from "react";
import styles from "./FeaturesDiscs.module.css";

const FeaturesDiscs = () => {
  return (
    <>
      <section className={styles.lp_section}>
        <div className={styles.pricing_box}>
          <h3>💡 Actualización a SSD: hasta 10 veces más velocidad</h3>
          <p>
            Instalación profesional + clonación del sistema. El SSD se vende por
            separado.
          </p>

          <div className={styles.pricing_items}>
            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_positive}`}
            >
              <strong>✅ Actualizar a SSD</strong>
              <small>
                A partir de <span>$50.000 ARS</span> (copia de seguridad
                incluida)
              </small>
            </div>

            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_negative}`}
            >
              <strong>❌ ¿El formateo solucionará el problema?</strong>
              <small>
                <span>NO!</span> Los discos duros siguen siendo lentos. Las
                unidades SSD arrancan en 15 segundos: la solución definitiva.
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

export default FeaturesDiscs;
