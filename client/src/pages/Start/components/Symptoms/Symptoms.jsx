import React from "react";
import styles from "./Symptoms.module.css";

const Symptoms = () => {
  return (
    <section class={styles.lp_section}>
      <h2>¿Cuál es tu situación?</h2>
      <p class={styles.lp_section_intro}>
        Describe lo que sucede y podremos hacernos una idea del problema:
      </p>

      <div class={styles.lp_diagnosis_grid}>
        <div class={styles.lp_diagnosis_card}>
          <h3>No da señales de vida</h3>
          <ul class={styles.lp_diagnosis_list}>
            <li>El LED de encendido no se ilumina.</li>
            <li>No se escucha ningún sonido al pulsar el botón.</li>
            <li>Completamente "muerto".</li>
          </ul>
          <div class={styles.lp_diagnosis_solution}>
            <strong>Posible causa:</strong> Circuito de entrada de alimentación,
            cortocircuito o conector de CC.
          </div>
        </div>

        <div class={styles.lp_diagnosis_card}>
          <h3>Se enciende y se apaga solo</h3>
          <ul class={styles.lp_diagnosis_list}>
            <li>Se apaga después de unos segundos.</li>
            <li>Se reinicia en un bucle.</li>
            <li>Detente en la pantalla de inicio.</li>
          </ul>
          <div class={styles.lp_diagnosis_solution}>
            <strong>Posible causa:</strong> Cortocircuito, sobrecalentamiento o
            fallo de alimentación en la placa.
          </div>
        </div>

        <div class={styles.lp_diagnosis_card}>
          <h3>🖥️ Se enciende pero no muestra imagen</h3>
          <ul class={styles.lp_diagnosis_list}>
            <li>El ventilador gira, pero la pantalla está en negro.</li>
            <li>Los LED se encienden con normalidad.</li>
            <li>El monitor externo tampoco muestra imagen.</li>
          </ul>
          <div class={styles.lp_diagnosis_solution}>
            <strong>Posible causa:</strong> GPU, chipset o BIOS dañados.
          </div>
        </div>

        <div class={styles.lp_diagnosis_card}>
          <h3>La batería no carga</h3>
          <ul class={styles.lp_diagnosis_list}>
            <li>El cargador funciona pero no carga.</li>
            <li>El LED de carga no se enciende.</li>
            <li>Solo funciona cuando está enchufado.</li>
          </ul>
          <div class={styles.lp_diagnosis_solution}>
            <strong>Posible causa:</strong> Circuito de carga de la batería
            (BQ24780, ISL9239, etc.)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
