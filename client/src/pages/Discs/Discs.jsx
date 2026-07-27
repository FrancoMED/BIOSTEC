import React from "react";
import styles from "./Discs.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FeaturesDiscs from "./components/FeaturesDiscs/FeaturesDiscs.jsx";
import DiagnosticDiscs from "./components/DiagnosticDiscs/DiagnosticDiscs.jsx";
// import FaqDiscs from "./components/FaqDiscs/FaqDiscs.jsx";

const heroTexts = {
  title: "Tu portátil será 10 veces más rápido en tan solo 24 horas.",
  subtitle:
    "Deja de perder el tiempo esperando a que tu ordenador se encienda. Actualización profesional de SSD con copia de seguridad de datos y 1 año de garantía.",

  steps: [
    "🧾 Describe el problema",
    "🔍 Compatibilidad con SSD",
    "💰 Recibí tu presupuesto gratuito",
  ],
};

const relatedServicesContent = {
  texts: [
    "Notebook no enciende",
    "Ampliar memoria RAM",
    "Reinstalar Windows",
    "Drivers Wi-Fi/Bluetooth",
  ],
  links: ["/start", "/ram", "/windows", "/drivers"],
};

const Discs = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesDiscs />
      <DiagnosticDiscs />
      {/* <FaqDiscs /> */}
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Discs;
