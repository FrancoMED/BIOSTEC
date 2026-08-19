import React from "react";
import styles from "./FaqDrivers.module.css";

const FaqDrivers = () => {
  return (
    <>
      <section class={styles.lp_section}>
        <h2>Preguntas frecuentes</h2>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Cobran por el presupuesto?</div>
          <div class={styles.lp_faq_a}>
            <strong>NO.</strong> La cotización vía WhatsApp es totalmente
            gratuita y sin compromiso.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Cuánto demora la actualización?</div>
          <div class={styles.lp_faq_a}>
            Realizamos y entregamos actualizaciones en el mismo día o dentro de
            un plazo de 24 a 72 horas, según el tipo de necesidad.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Ofrecen garantía?</div>
          <div class={styles.lp_faq_a}>
            <strong>SÍ!</strong> Todas nuestras actualizaciones cuentan con
            garantía de hasta 3 meses.
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqDrivers;
