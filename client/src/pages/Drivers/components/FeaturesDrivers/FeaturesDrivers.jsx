import React from "react";
import styles from "./FeaturesDrivers.module.css";

const FeaturesDrivers = () => {
  return (
    <>
      <section className={styles.lp_section}>
        <div className={styles.pricing_box}>
          <h3>💡 Paquete de controladores y optimización</h3>
          <p>
            Controladores oficiales del fabricante + ajustes para mayor
            estabilidad y rendimiento.
          </p>

          <div className={styles.pricing_items}>
            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_positive}`}
            >
              <strong>✅ Paquete de controladores y optimización</strong>
              <small>
                El paquete incluye controladores oficiales del fabricante,
                eliminando programas innecesarios, optimización de
                inicialización y actualizar configuración.
              </small>
            </div>

            <div
              className={`${styles.pricing_item}  ${styles.pricing_item_negative}`}
            >
              <strong>⚠️ ¿Drivers genéricos de Windows?</strong>
              <small>
                Provocan ralentizaciones, fallos de Wi-Fi y problemas de
                batería. Instalamos los controladores correctos del fabricante,
                no los automáticos.
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

export default FeaturesDrivers;
