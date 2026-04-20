import React from "react";
import styles from "./FaqHinges.module.css";

const FaqHinges = () => {
  return (
    <>
      <section class={styles.lp_section}>
        <h2>❓ Preguntas frecuentes</h2>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Tienes una bisagra para mi modelo?</div>
          <div class={styles.lp_faq_a}>
            Trabajamos con la mayoría de las marcas. Envíanos el número de
            modelo exacto (se encuentra en la parte inferior del portátil) y
            comprobaremos la disponibilidad.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Cuánto cuesta?</div>
          <div class={styles.lp_faq_a}>
            Depende de si solo se trata de la bisagra o si también es necesario
            reparar la carcasa. Envíanos una foto para que podamos evaluarla y
            enviarte un presupuesto exacto.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Cuánto tiempo se demora?</div>
          <div class={styles.lp_faq_a}>
            Si tenemos la pieza en stock, la entrega suele realizarse en 24-48
            horas. Si necesita realizar un pedido, le informaremos del plazo de
            entrega antes de confirmarlo.
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqHinges;
