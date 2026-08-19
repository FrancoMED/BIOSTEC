import React from "react";
import styles from "./Ports.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FeaturesPorts from "./components/FeaturesPorts/FeaturesPorts.jsx";
import DiagnosticPorts from "./components/DiagnosticPorts/DiagnosticPorts.jsx";
import FaqPorts from "./components/FaqPorts/FaqPorts.jsx";

const heroTexts = {
  title: "¿El puerto USB, HDMI o del cargador no funcionan correctamente?",
  subtitle:
    "Ofrecemos servicios de diagnóstico y reparación con soldadura profesional.",

  steps: [
    "🧾 Envíanos el modelo",
    "🔍 Evaluamos los daños",
    "💰 Recibí tu presupuesto gratuito",
  ],
  msj: "¡Hola!%20tengo%20un%20problema%20con%20mi%20Notebook%2C%20no%20funciona%20un%20puerto%20correctamente.",
};

const relatedServicesContent = {
  texts: [
    "Pantalla rota o negra",
    "Teclado",
    "Bisagras",
    "Notebook no enciende",
  ],
  links: ["/screen", "/keyboard", "/hinges", "/start"],
};

const Ports = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesPorts />
      <DiagnosticPorts />
      <FaqPorts />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Ports;
