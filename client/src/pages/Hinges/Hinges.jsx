import React from "react";
import styles from "./Hinges.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FaqHinges from "./components/FaqHinges/FaqHinges.jsx";

const heroTexts = {
  title: "¿Bisagra rota? La arreglaremos antes de que empeore.",
  subtitle:
    "¿La pantalla se cae, cruje o la carcasa está agrietada? La cosa solo va a empeorar.",

  steps: [
    "🧾 Envíanos el modelo",
    "🔍 Evaluamos los daños",
    "💰 Recibí tu presupuesto gratuito",
  ],
};

const relatedServicesContent = {
  texts: [
    "Pantalla rota o negra",
    "Teclado",
    "Puertos USB/HDMI",
    "Notebook no enciende",
  ],
  links: ["/screen", "/keyboard", "/ports", "/notebook-not-start"],
};

const Hinges = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FaqHinges />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Hinges;
