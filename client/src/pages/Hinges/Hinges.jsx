import React from "react";
import styles from "./Hinges.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FaqHinges from "./components/FaqHinges/FaqHinges.jsx";
import DiagnosticHinges from "./components/DiagnosticHinges/DiagnosticHinges.jsx";
import FeaturesHinges from "./components/FeaturesHinges/FeaturesHinges.jsx";

const heroTexts = {
  title: "¿Bisagra rota? La arreglaremos antes de que sea mas grave.",
  subtitle:
    "¿La pantalla se cae, cruje o la carcasa está agrietada? Esto podría empeorar.",

  steps: [
    "🧾 Envíanos el modelo",
    "🔍 Evaluamos los daños",
    "💰 Recibí tu presupuesto gratuito",
  ],
  msj: "¡Hola!%20tengo%20un%20problema%20con%20mi%20Notebook%2C%20tiene%20la%20bisagra%20rota.",
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
