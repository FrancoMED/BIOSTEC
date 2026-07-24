import React from "react";
import styles from "./Ports.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
// import FaqPorts from "./components/FaqPorts/FaqPorts.jsx";
// import DiagnosticPorts from "./components/DiagnosticPorts/DiagnosticPorts.jsx";
// import FeaturesPorts from "./components/FeaturesPorts/FeaturesPorts.jsx";

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
    "Bisagras",
    "Notebook no enciende",
  ],
  links: ["/screen", "/keyboard", "/hinges", "/notebook-not-start"],
};

const Ports = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      {/* <FeaturesPorts />
      <DiagnosticPorts />
      <FaqPorts /> */}
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Ports;
