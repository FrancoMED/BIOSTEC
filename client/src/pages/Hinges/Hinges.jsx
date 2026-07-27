import React from "react";
import styles from "./Hinges.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FaqHinges from "./components/FaqHinges/FaqHinges.jsx";
import DiagnosticHinges from "./components/DiagnosticHinges/DiagnosticHinges.jsx";
import FeaturesHinges from "./components/FeaturesHinges/FeaturesHinges.jsx";

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
  links: ["/screen", "/keyboard", "/ports", "/start"],
};

const Hinges = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesHinges />
      <DiagnosticHinges />
      <FaqHinges />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Hinges;
