import React from "react";
import styles from "./FeaturesRam.module.css";

const FeaturesRam = () => {
  return (
    <>
      <section className={styles.lp_section}>
        <div className={styles.pricing_box}>
          <h3>💡 Paquete de actualización de RAM</h3>
          <p>
            Rendimiento mejorado + mantenimiento completo para portátiles
            antiguos.
          </p>

          <div className={styles.pricing_items}>
            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_positive}`}
            >
              <strong>✅ Paquete de actualización de RAM</strong>
              <small>
                Incluye instalación de memoria, limpieza completa, sustitución
                de la pasta térmica y prueba de compatibilidad.
              </small>
            </div>

            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_negative}`}
            >
              <strong>
                ❌ ¿Solo instalas la RAM y te olvidas del mantenimiento?
              </strong>
              <small>
                Polvo + pasta térmica vieja = sobrecalentamiento y rendimiento
                lento. Lo pagas dos veces.
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
            ⚠️ ¿Por qué este paquete? Un portátil que necesita RAM suele tener
            ya varios años, y el polvo acumulado provoca ralentizaciones debido
            al sobrecalentamiento.
            <br />
            <strong>El presupuesto es totalmente gratuito:</strong> el cliente
            solo abona si el equipo tiene una solución efectiva.
          </p>
        </div>
      </section>
    </>
  );
};

export default FeaturesRam;
