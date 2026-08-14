import React from "react";
import styles from "./Ram.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FeaturesRam from "./components/FeaturesRam/FeaturesRam.jsx";
import DiagnosticRam from "./components/DiagnosticRam/DiagnosticRam.jsx";
import CompatibilityRam from "./components/CompatibilityRam/CompatibilityRam.jsx";
import FaqRam from "./components/FaqRam/FaqRam.jsx";

const heroTexts = {
  title: "Tu portátil será 10 veces más rápido con más RAM.",
  subtitle:
    "Deja de sufrir bloqueos y un rendimiento lento. Multiplica el rendimiento de tu portátil con una actualización de RAM profesional.",

  steps: [
    "🧾 Describe el problema",
    "🔍 Memoria RAM compatible",
    "💰 Recibí tu presupuesto gratuito",
  ],
};

const relatedServicesContent = {
  texts: [
    "Notebook no enciende",
    "Reemplazar un HDD por un SSD",
    "Reinstalar Windows",
    "Drivers Wi-Fi/Bluetooth",
  ],
  links: ["/start", "/discs", "/windows", "/drivers"],
};

const Ram = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesRam />
      <DiagnosticRam />
      <CompatibilityRam />
      <FaqRam />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Ram;
