import React from "react";
import styles from "./Cards.module.css";
import reloj from "../../../../assets/Images/reloj.jpg";
import garantia from "../../../../assets/Images/garantia.jpg";
import micro from "../../../../assets/Images/micro.jpg";

const Cards = () => {
  return (
    <div class={styles.features_section}>
      <div class={styles.features_grid}>
        <div class={styles.container_card}>
          <div class={styles.feature_card}>
            <img src={reloj} alt="reloj" />
            <h4>Diagnóstico Rápido</h4>
            <p>
              Envía una foto/vídeo por WhatsApp y recibe una valoración inicial
              en minutos
            </p>
          </div>
        </div>
        <div class={styles.container_card}>
          <div class={styles.feature_card}>
            <img src={micro} alt="micro" />
            <h4>Reparación a Nivel de Componente</h4>
            <p>
              Microscopio, estación de soldadura profesional y equipo
              especializado
            </p>
          </div>
        </div>
        <div class={styles.container_card}>
          <div class={styles.feature_card}>
            <img src={garantia} alt="garantia" />
            <h4>Garantía de 6 Meses</h4>
            <p>
              Todas las reparaciones están garantizadas. Si no se puede reparar,
              no paga el diagnóstico
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
