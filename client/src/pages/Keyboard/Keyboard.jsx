import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import styles from "./Keyboard.module.css";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";

const heroTexts = {
  title: "¿Tu teclado no funciona? ¡Lo reparamos con garantía!",
  subtitle:
    "Teclas que no responden, letras borradas o líquido derramado — nosotros lo solucionamos. Reparamos o reemplazamos el teclado de tu notebook con garantía de hasta 6 meses y piezas originales.",

  steps: [
    "🧾 1. Envíanos el modelo",
    "🔍 2. Verificamos disponibilidad",
    "💰 3. Recibí tu presupuesto gratuito",
  ],
};

const relatedServicesContent = {
  texts: [
    "Pantalla rota o negra",
    "Bisagras",
    "Puertos USB/HDMI",
    "Notebook no enciende",
  ],
  links: ["/screen", "/hinges", "/ports", "/notebook-not-start"],
};

const Keyboard = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Keyboard;
