import React from "react";
import styles from "./Card2.module.css";
import image from "../../assets/Images/reloj.jpg";

const Card2 = () => {
  return (
    <div class={styles.contatiner_Card}>
      {/* <div class={styles.bg}>
        <h1>Kiberbash</h1>
      </div> */}
      <div class={styles.nft}>
        <div class={styles.main}>
          <div class={styles.feature_card}>
            <img className={styles.tokenImage} src={image} alt="NFT" />
            {/* <div class={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
              </svg>
            </div> */}
            <h4>Diagnóstico Rápido</h4>
            <p>
              Envía una foto/vídeo por WhatsApp y recibe una valoración inicial
              en minutos
            </p>
          </div>
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
};

export default Card2;
