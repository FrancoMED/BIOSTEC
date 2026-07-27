import React from "react";
import styles from "./FaqLiquid.module.css";

const FaqLiquid = () => {
  return (
    <>
      <section class={styles.lp_section}>
        <h2>❓ Preguntas frecuentes</h2>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            Mi portátil se enciende con normalidad... ¿Aún necesito traerlo?
          </div>
          <div class={styles.lp_faq_a}>
            ¡SÍ, URGENTE! El líquido sigue causando daños internos incluso con
            el motor en marcha. Podría dejar de funcionar en cualquier momento.
            Cuanto antes lo limpies, mejor.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            Derramé la leche hace dos días, ¿aún hay esperanza?
          </div>
          <div class={styles.lp_faq_a}>
            Depende del líquido y de si se adhirió posteriormente. El agua pura
            daña menos el café o los refrescos (que contienen azúcar y ácidos).
            Tráigalo para que lo evaluemos; a menudo podemos recuperarlo.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Cuánto cuesta la recuperación?</div>
          <div class={styles.lp_faq_a}>
            La limpieza ultrasónica cuesta a partir de ARS$25.000 y soluciona la
            mayoría de los problemas. Si es necesario reemplazar componentes, el
            precio aumenta según el daño; siempre es recomendable solicitar un
            presupuesto con antelación. ¿Reemplazar la placa en un taller de
            reparación convencional? Fácilmente más de ARS$100.000.
          </div>
        </div>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Y si no se puede arreglar?</div>
          <div class={styles.lp_faq_a}>
            Si el daño es irreversible, no se cobra por el diagnóstico. Solo
            cobramos si existe una posibilidad real de recuperación.
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqLiquid;
