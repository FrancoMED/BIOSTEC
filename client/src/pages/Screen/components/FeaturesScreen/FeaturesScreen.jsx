import React from "react";
import styles from "./FeaturesScreen.module.css";

const FeaturesScreen = () => {
  return (
    <>
      <section class={styles.lp_section}>
        <h2>🔍 Es caro reparar la pantalla de una notebook?</h2>
        <p class={styles.lp_section_intro}>
          <strong>Buena noticia:</strong> ¡No siempre es necesario reemplazar la
          pantalla completa! Aquí te explicamos cómo identificarla:
        </p>

        <div class={styles.lp_diagnosis_grid}>
          <div class={`${styles.lp_diagnosis_card} ${styles.bad}`}>
            <h3>❌ Cuándo es necesario cambiar la pantalla</h3>
            <ul class={styles.lp_diagnosis_list}>
              <li>Vidrio roto o agrietado</li>
              <li>Manchas tipo “fuga de tinta”</li>
              <li>Rayones profundos en el panel</li>
              <li>Zonas negras luego de un golpe</li>
            </ul>
            <div class={styles.lp_diagnosis_solution}>
              <strong class={styles.strong_bad}>
                💰 Costo: Entre $75.000 y $350.000
              </strong>
              <br />
              <small>(Varia conforme a la marca y modelo de la notebook)</small>
            </div>
          </div>

          <div class={`${styles.lp_diagnosis_card} ${styles.good}`}>
            <h3>✅ Cuándo se puede reparar la pantalla (más económico)</h3>
            <ul class={styles.lp_diagnosis_list}>
              <li>Líneas verticales u horizontales</li>
              <li>Pantalla negra, pero el equipo enciende</li>
              <li>Brillo muy bajo o inexistente</li>
              <li>Imagen que parpadea al mover la tapa</li>
              <li>Pantalla totalmente blanca</li>
            </ul>
            <div class={styles.lp_diagnosis_solution}>
              <strong class={styles.strong_good}>
                🔧 Reparación electrónica: <br />
                Puede costar hasta menos de la mitad del valor de una pantalla
                nueva, dependiendo del diagnóstico.
              </strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesScreen;
