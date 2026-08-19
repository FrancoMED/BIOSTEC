import React from "react";
import styles from "./FaqOverheating.module.css";

const FaqOverheating = () => {
  return (
    <>
      <section class={styles.lp_section}>
        <h2>Preguntas frecuentes</h2>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿El sobrecalentamiento siempre se soluciona simplemente con una
            limpieza?
          </div>
          <div class={styles.lp_faq_a}>
            La mayoría de las veces, sí. Pero la limpieza debe ser minuciosa y
            con pasta térmica y almohadillas de buena calidad.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Cuánto tiempo dura el mantenimiento térmico?
          </div>
          <div class={styles.lp_faq_a}>
            Normalmente, de 1 a 2 días hábiles. Si se trata de reparaciones
            electrónicas, puede que tarde un poco más; le avisaremos con
            antelación.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Necesitas reemplazar el ventilador?
          </div>
          <div class={styles.lp_faq_a}>
            Solo si muestra signos de desgaste, ruido o pérdida de rendimiento.
            Siempre buscamos la solución más eficiente.
          </div>
        </div>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Y si el problema está en la placa base?
          </div>
          <div class={styles.lp_faq_a}>
            Disponemos de un laboratorio de microelectrónica y realizamos
            reparaciones a nivel de componentes para solucionar problemas de
            sobrecalentamiento.
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqOverheating;
