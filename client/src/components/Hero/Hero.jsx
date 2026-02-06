import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ props }) => {
  return (
    <section class={styles.lp_hero}>
      <h1>{props.title}</h1>
      <p class={styles.lp_hero_subtitle}>{props.subtitle}</p>

      {/* <!-- Proceso en 3 pasos --> */}
      <div class={styles.lp_steps}>
        <span class={styles.lp_step}>{props.steps[0]}</span>
        <span class={styles.lp_step_arrow}>→</span>
        <span class={styles.lp_step}>{props.steps[1]}</span>
        <span class={styles.lp_step_arrow}>→</span>
        <span class={styles.lp_step}>{props.steps[2]}</span>
      </div>

      <div class={styles.btn_container}>
        <a
          class={styles.lp_cta_main}
          href="https://wa.me/5491130508080?text=¡Hola!%20tengo%20un%20problema%20con%20mi%20equipo,%20¿Podrían%20ayudarme?"
          target="_blank"
          rel="noreferrer"
        >
          📱 Enviar foto ahora GRATIS!
        </a>
      </div>
      <div class={styles.lp_urgency_badge}>
        ⚡ Respuesta en menos de 5 minutos
      </div>

      <p class={styles.lp_hero_trust}>
        🛡️ 2 años de experiencia <span>·</span> Garantía de 6 meses
        <span>·</span> Piezas originales
      </p>
    </section>
  );
};

export default Hero;
