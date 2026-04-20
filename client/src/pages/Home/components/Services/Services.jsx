import React from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div>
      <section id="Servicios" class={styles.problems_section}>
        <div class="mx-auto px-4">
          <h2 class={styles.section_title}>¿A qué problema te enfrentas?</h2>
          <p class={styles.section_subtitle}>
            Haga clic en su problema para ver soluciones y solicitar una
            cotización.
          </p>

          <div class={`flex justify-center w-full flex-wrap gap-4`}>
            {/* <!-- Reparación de notebooks --> */}
            <div class="w-72 max-w-sm items-center px-2 xs:w-full md:w-6/13 lg:w-3/13">
              <div class={styles.problem_card}>
                <div class={styles.container_card_icon}>
                  <div class={`${styles.card_icon} ${styles.card_icon_red}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                    </svg>
                  </div>
                </div>
                <h3>Piezas y Accesorios</h3>
                <text>Pantalla, teclado, bisagras, puertos y cargador</text>
                <div class={styles.btn_list}>
                  <Link to="/screen" class={styles.link}>
                    <p class={styles.btn_red}>Pantalla rota o negra</p>
                  </Link>
                  <Link to="/keyboard" class={styles.link}>
                    <p class={styles.btn_red}>Teclado defectuoso</p>
                  </Link>
                  <Link to="/hinges" class={styles.link}>
                    <p class={styles.btn_red}>Bisagras</p>
                  </Link>
                  <Link to="/ports" class={styles.link}>
                    <p class={styles.btn_red}>Puertos USB/HDMI</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* <!-- Placa madre --> */}
            <div class="w-72 max-w-sm items-center px-2 xs:w-full md:w-6/13 lg:w-3/13">
              <div class={styles.problem_card}>
                <div class={styles.container_card_icon}>
                  <div class={`${styles.card_icon} ${styles.card_icon_orange}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7z" />
                    </svg>
                  </div>
                </div>
                <h3>Placa madre</h3>
                <text>
                  Sin energía, sin imagen, cortocircuito o fuga de líquido.
                </text>
                <div class={styles.btn_list}>
                  <Link to="/notebook-not-start" class={styles.link}>
                    <p class={styles.btn_orange}>Notebook no enciende</p>
                  </Link>
                  <Link to="/liquid" class={styles.link}>
                    <p class={styles.btn_orange_solid}>🚨 Daño por líquido</p>
                  </Link>
                  <Link to="/overheating" class={styles.link}>
                    <p class={styles.btn_orange}>Sobrecalentamiento</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* <!-- Upgrades --> */}
            <div class="w-72 max-w-sm items-center px-2 xs:w-full md:w-6/13 lg:w-3/13">
              <div class={styles.problem_card}>
                <div class={styles.container_card_icon}>
                  <div class={`${styles.card_icon} ${styles.card_icon_green}`}>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {/* <!-- Círculo --> */}
                      <circle
                        cx="12"
                        cy="12"
                        r="11"
                        fill="none"
                        stroke="#28A745"
                        strokeWidth="2"
                      />

                      {/* <!-- Flecha --> */}
                      <path
                        d="M12 4 L5.5 10.5 H9 V17 H15 V10.5 H18.5 Z"
                        fill="#28A745"
                      />
                      {/*  <!-- Línea inferior --> */}
                      <rect
                        x="9"
                        y="18"
                        width="6"
                        height="1.5"
                        fill="#28A745"
                      />
                    </svg>
                  </div>
                </div>
                <h3>Actualización</h3>
                <text>Haga que su Notebook sea más rápida.</text>
                <div class={styles.btn_list}>
                  <Link to="/discs" class={styles.link}>
                    <p class={styles.btn_green}>Reemplazar un HDD por un SSD</p>
                  </Link>
                  <Link to="/ram" class={styles.link}>
                    <p class={styles.btn_green}>Ampliar memoria RAM</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* <!-- Software --> */}
            <div class="w-72 max-w-sm items-center px-2 xs:w-full md:w-6/13 lg:w-3/13">
              <div class={styles.problem_card}>
                <div class={styles.container_card_icon}>
                  <div class={`${styles.card_icon} ${styles.card_icon_blue}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                      <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
                    </svg>
                  </div>
                </div>
                <h3>Software</h3>
                <text>Sistema, drivers y configuración</text>
                <div class={styles.btn_list}>
                  <Link to="/windows" class={styles.link}>
                    <p class={styles.btn_blue}>Reinstalar Windows</p>
                  </Link>
                  <Link to="/drivers" class={styles.link}>
                    <p class={styles.btn_blue}>Drivers Wi-Fi/Bluetooth</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
