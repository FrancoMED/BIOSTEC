import React from "react";
import styles from "./FaqKeyboard.module.css";

const FaqKeyboard = () => {
  return (
    <>
      <section class={styles.lp_section}>
        <h2>❓ Preguntas frecuentes</h2>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Qué hacer si se derramó líquido sobre el teclado?
          </div>
          <div class={styles.lp_faq_a}>
            Se recomienda apagar el notebook de inmediato y evitar encenderlo
            durante varias horas. El líquido puede generar corrosión en los
            componentes, pero en muchos casos es posible recuperar el teclado
            mediante limpieza especializada. Lo ideal es llevar el equipo lo
            antes posible para una evaluación técnica detallada.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Por qué algunas teclas fallan de forma intermitente?
          </div>
          <div class={styles.lp_faq_a}>
            Las fallas intermitentes suelen indicar problemas de mal contacto o
            defectos aleatorios en el teclado. Con equipamientos profesionales
            de diagnóstico, es posible identificar la causa exacta y aplicar la
            solución adecuada.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Vale la pena reparar o es mejor comprar un notebook nuevo?
          </div>
          <div class={styles.lp_faq_a}>
            Reparar casi siempre es la mejor opción. Con más de 2 años de
            experiencia en mantenimiento de notebooks, los especialistas
            solucionan alrededor del 90% de las fallas de teclado por un costo
            muy inferior al precio de un equipo nuevo. Además, las reparaciones
            cuentan con garantía de hasta 6 meses, devolviendo al notebook su
            funcionamiento original.
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqKeyboard;
