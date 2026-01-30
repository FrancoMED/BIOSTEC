import React from "react";
import styles from "./Faq.module.css";

const Faq = () => {
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
          <div class={styles.lp_faq_q}>¿Cuánto demora la reparación?</div>
          <div class={styles.lp_faq_a}>
            Contamos con repuestos y componentes en stock, lo que nos permite
            realizar muchas reparaciones en el mismo día o dentro de un plazo de
            24 a 48 horas, según el tipo de falla.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Ofrecen garantía?</div>
          <div class={styles.lp_faq_a}>
            <strong>SÍ!</strong> Todas nuestras reparaciones y cambios de
            pantalla con piezas originales cuentan con garantía de hasta 6
            meses.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Y si el problema está en la placa de video o placa base?
          </div>
          <div class={styles.lp_faq_a}>
            ¡También lo solucionamos! Somos especialistas en microsoldadura y
            reparación de placas electrónicas, incluyendo tarjetas de video y
            placas madre.
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
