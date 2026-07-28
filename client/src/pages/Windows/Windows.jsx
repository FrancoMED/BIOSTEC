import React from "react";
import styles from "./Windows.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FeaturesWindows from "./components/FeaturesWindows/FeaturesWindows.jsx";
// import DiagnosticWindows from "./components/DiagnosticWindows/DiagnosticWindows.js";

const heroTexts = {
  title:
    "¿Tu PC funciona lento, se bloquea o está infectado con un virus? Reinstalamos Windows en 24 horas.",
  subtitle:
    "Sistema operativo limpio y optimizado. Eliminamos virus, errores y ralentizaciones. Tus archivos están protegidos con copias de seguridad profesionales.",

  steps: [
    "💾 Copia de seguridad completa",
    "🔄 Limpiar ventanas",
    "⚙️ Drivers + programas",
  ],
};

const relatedServicesContent = {
  texts: [
    "Notebook no enciende",
    "Reemplazar un HDD por un SSD",
    "Ampliar memoria RAM",
    "Drivers Wi-Fi/Bluetooth",
  ],
  links: ["/start", "/discs", "/ram", "/drivers"],
};

const Windows = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesWindows />
      {/* <DiagnosticWindows /> */}
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Windows;
