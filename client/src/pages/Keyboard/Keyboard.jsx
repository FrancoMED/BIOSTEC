import React from "react";
import styles from "./Keyboard.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import DiagnosticKeyboard from "./components/DiagnosticKeyboard/DiagnosticKeyboard.jsx";
import FeaturesKeyboard from "./components/FeaturesKeyboard/FeaturesKeyboard.jsx";
import FaqKeyboard from "./components/FaqKeyboard/FaqKeyboard.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";

const heroTexts = {
  title: "¿Tu teclado no funciona? ¡Lo reparamos con garantía!",
  subtitle:
    "Teclas que no responden, letras borradas o líquido derramado — nosotros lo solucionamos. Reparamos o reemplazamos el teclado de tu notebook con garantía de hasta 6 meses y piezas originales.",

  steps: [
    "🧾 Envíanos el modelo",
    "🔍 Verificamos disponibilidad",
    "💰 Recibí tu presupuesto gratuito",
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
      <FeaturesKeyboard />
      <DiagnosticKeyboard />
      <FaqKeyboard />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Keyboard;
