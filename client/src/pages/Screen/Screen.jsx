import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import styles from "./Screen.module.css";
import FeaturesScreen from "./components/FeaturesScreen/FeaturesScreen.jsx";
import DiagnosticScreen from "./components/DiagnosticScreen/DiagnosticScreen.jsx";
import Faq from "./components/Faq/Faq.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";

const heroTexts = {
  title: "Pantalla Quebrada? Cotización GRATIS a través de WhatsApp",
  subtitle:
    "Descubra si necesita reemplazar la pantalla o si hay una opción dereparación más económica, sin salir de casa.",

  steps: ["📸 Envíe foto", "🔍 Técnico analista", "💰 Reciba cotización"],
};

const relatedServicesContent = {
  texts: [
    "Teclado defectuoso",
    "Bisagras",
    "Puertos USB/HDMI",
    "Notebook no enciende",
  ],
  links: ["/keyboard", "/hinges", "/ports", "/notebook-not-start"],
};

const Screen = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesScreen />
      <DiagnosticScreen />
      <Faq />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Screen;
