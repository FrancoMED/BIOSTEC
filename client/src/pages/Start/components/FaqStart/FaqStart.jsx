import React from "react";
import styles from "./FaqStart.module.css";

const FaqStart = () => {
  return (
    <>
      <section class={styles.lp_section}>
        <h2>Preguntas frecuentes</h2>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Reparan cualquier Notebook?</div>
          <div class={styles.lp_faq_a}>
            Sí. Trabajamos con todas las marcas: Dell, HP, Lenovo, Acer, Asus,
            Samsung y también MacBooks (especializados en placas base de Apple).
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Cuánto cuesta la reparación?</div>
          <div class={styles.lp_faq_a}>
            Depende del problema. Los problemas con la GPU/chipset son más
            complejos. Siempre proporcionamos un presupuesto por adelantado. A
            menudo podemos enviarle un presupuesto aproximado por WhatsApp.
          </div>
        </div>

        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>¿Y si no se puede arreglar?</div>
          <div class={styles.lp_faq_a}>
            Si determinamos que la reparación no es factible, usted no pagará
            por el diagnóstico.
          </div>
        </div>
        <div class={styles.lp_faq_item}>
          <div class={styles.lp_faq_q}>
            ¿Necesito enviar una foto o un vídeo?
          </div>
          <div class={styles.lp_faq_a}>
            No es obligatorio, pero ayuda. Lo más importante es describir bien
            los síntomas: qué ocurre, cuándo empezó, si hubo pérdida o fuga de
            líquido.
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqStart;
