import React from "react";
import styles from "./CompatibilityRam.module.css";
import image from "../../../../assets/Images/ram_compatible.jpg";

const CompatibilityRam = () => {
  return (
    <section class={styles.lp_section}>
      <div className="mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div class="w-full">
            <h2>Compatibilidad (algo que poca gente comprueba)</h2>
            <ul class={styles.lp_list}>
              <li>Tipos: DDR3, DDR4, DDR5 (no son compatibles entre sí).</li>
              <li>
                Velocidades: dentro del mismo tipo existen varias (por ejemplo,
                DDR4-2400 frente a DDR4-3200).
              </li>
              <li>
                Cada portátil admite ciertas velocidades dependiendo de la
                tarjeta gráfica; lo comprobamos previamente.
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <img
              src={image}
              alt="Memória RAM Micron - compatibilidade garantida"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityRam;
