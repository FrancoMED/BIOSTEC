import React from "react";
import styles from "./FaqDiscs.module.css";

const FaqDiscs = () => {
  return (
    <>
      <section class={styles.lp_section}>
        <h2>❓ Preguntas frecuentes</h2>
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
            Contamos con repuestos y componentes en stock, lo que nos permite
            realizar muchas actualizaciones en el mismo día o dentro de un plazo
            de 24 a 72 horas, según el tipo de necesidad.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Ofrecen garantía?</div>
          <div class={styles.lp_faq_a}>
            <strong>SÍ!</strong> Todas nuestras actualizaciones con piezas
            originales cuentan con garantía de hasta 1 año.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Y si el problema está en la placa madre?
          </div>
          <div class={styles.lp_faq_a}>
            ¡También lo solucionamos! Somos especialistas en microsoldadura y
            reparación de placas electrónicas, incluyendo placas de video y
            placas madre.
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqDiscs;
