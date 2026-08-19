import React from "react";
import styles from "./Drivers.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FeaturesDrivers from "./components/FeaturesDrivers/FeaturesDrivers.jsx";
import DiagnosticDrivers from "./components/DiagnosticDrivers/DiagnosticDrivers.jsx";
import FaqDrivers from "./components/FaqDrivers/FaqDrivers.jsx";

const heroTexts = {
  title:
    "¿Problemas con Wi-Fi, Bluetooth o audio? Instalamos los controladores correctos en 24 horas.",
  subtitle:
    "Instalamos los controladores oficiales del fabricante. Identificamos el hardware exacto y nos aseguramos de que todo vuelva a funcionar perfectamente.",

  steps: [
    "🔍 Identificar el hardware",
    "💾 Driver correcto",
    "✅ Prueba de funcionalidad",
  ],
  msj: "¡Hola!%20tengo%20un%20problema%20con%20mi%20Notebook%2C%20sobre%20drivers/Wi-Fi/Bluetooth.",
};

const relatedServicesContent = {
  texts: [
    "Notebook no enciende",
    "Reemplazar un HDD por un SSD",
    "Ampliar memoria RAM",
    "Reinstalar Windows",
  ],
  links: ["/start", "/discs", "/ram", "/windows"],
};

const Drivers = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesDrivers />
      <DiagnosticDrivers />
      <FaqDrivers />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Drivers;
