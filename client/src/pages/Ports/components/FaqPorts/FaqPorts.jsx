import React from "react";
import styles from "./FaqPorts.module.css";

const FaqPorts = () => {
  return (
    <>
      <section class={styles.lp_section}>
        <h2>❓ Preguntas frecuentes</h2>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Cobran por proporcionar un presupuesto?
          </div>
          <div class={styles.lp_faq_a}>
            Si podemos evaluar el problema mediante foto o WhatsApp, no cobramos
            . Si se requiere desmontaje, solo cobramos si se rechaza el
            servicio.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Cuánto tiempo se tarda?</div>
          <div class={styles.lp_faq_a}>
            De 3 a 7 días hábiles , dependiendo del artículo y su complejidad.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Tiene garantía?</div>
          <div class={styles.lp_faq_a}>
            ¡Sí! Todas las reparaciones de puertas están garantizadas.
          </div>
        </div>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Puedo usar mi portátil con un puerto roto?
          </div>
          <div class={styles.lp_faq_a}>
            Si es USB y tienes otros puertos, entonces sí. Si es un puerto de
            carga con una mala conexión, entonces NO ; podría dañar el circuito
            de carga y resultar mucho más caro.
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPorts;
