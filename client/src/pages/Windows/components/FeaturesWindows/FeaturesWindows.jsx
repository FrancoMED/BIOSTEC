import React from "react";
import styles from "./FeaturesWindows.module.css";

const FeaturesWindows = () => {
  return (
    <>
      <section className={styles.lp_section}>
        <div className={styles.pricing_box}>
          <h3>💡 Reinstalación profesional de Windows</h3>
          <p>
            Controladores actualizados, programas esenciales y copia de
            seguridad de sus archivos.
          </p>

          <div className={styles.pricing_items}>
            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_positive}`}
            >
              <strong>✅ Reinstalación profesional</strong>
              <small>
                Copia de seguridad de tus archivos, drivers correctos y
                optimización de inicialización.
              </small>
            </div>

            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_negative}`}
            >
              <strong>⚠️ ¿Formatear por tu cuenta?</strong>
              <small>
                Riesgo de pérdida de archivos, controladores y licencia de
                Windows. Realizamos una copia de seguridad completa previamente.
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
            <br />
            <strong>El presupuesto es totalmente gratuito:</strong> el cliente
            solo abona si el equipo tiene una solución efectiva.
          </p>
        </div>
      </section>
    </>
  );
};

export default FeaturesWindows;
