import React from "react";
import styles from "./Liquid.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FeaturesLiquid from "./components/FeaturesLiquid/FeaturesLiquid.jsx";
// import DiagnosticLiquid from "./components/DiagnosticLiquid/DiagnosticLiquid.jsx";
// import FaqLiquid from "./components/FaqLiquid/FaqLiquid.jsx";

const heroTexts = {
  title: "¿Se te derramó líquido en el portátil? ¡NO LO ENCIENDAS!",
  subtitle:
    "Café, agua, refrescos: estos líquidos siguen corroyendo los circuitos AHORA MISMO, incluso cuando el aparato está apagado. Cuanto antes lo trates, mayores serán las posibilidades de salvarlo.",

  steps: [
    "🧾 Describe el problema",
    "🔍 Analizamos los síntomas",
    "💰 Recibí tu presupuesto gratuito",
  ],
};

const relatedServicesContent = {
  texts: [
    "Teclado defectuoso",
    "puertos USB, HDMI ",
    "Notebook no enciende",
    "Sobrecalentamiento",
  ],
  links: ["/keyboard", "/ports", "/start", "/overheating"],
};

const Liquid = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesLiquid />
      {/* <DiagnosticLiquid /> */}
      {/* <FaqLiquid /> */}
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Liquid;
