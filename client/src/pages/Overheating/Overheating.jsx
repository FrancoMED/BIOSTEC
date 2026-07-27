import React from "react";
import styles from "./Overheating.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FeaturesOverheating from "./components/FeaturesOverheating/FeaturesOverheating.jsx";
import DiagnosticOverheating from "./components/DiagnosticOverheating/DiagnosticOverheating.jsx";
import FaqOverheating from "./components/FaqOverheating/FaqOverheating.jsx";

const heroTexts = {
  title:
    "¿ Tu portátil se sobrecalienta ? Soluciona el problema con un mantenimiento adecuado.",
  subtitle:
    "¿Tu ventilador funciona a máxima velocidad, se congela o se apaga solo? Realizamos una limpieza completa, aplicamos pasta térmica de alta calidad y ajustamos el sistema de refrigeración. Si esto no soluciona el problema, reparamos la placa base.",

  steps: [
    "🧾 Describe el problema",
    "🔍 Analizamos los síntomas",
    "💰 Recibí tu presupuesto gratuito",
  ],
};

const relatedServicesContent = {
  texts: [
    "Pantalla rota o negra",
    "puertos USB, HDMI ",
    "Notebook no enciende",
    "Daño por liquido",
  ],
  links: ["/screen", "/ports", "/start", "/liquid"],
};

const Overheating = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesOverheating />
      <DiagnosticOverheating />
      <FaqOverheating />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Overheating;
