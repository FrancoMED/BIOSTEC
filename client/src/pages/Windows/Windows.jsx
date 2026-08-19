import React from "react";
import styles from "./Windows.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FeaturesWindows from "./components/FeaturesWindows/FeaturesWindows.jsx";
import DiagnosticWindows from "./components/DiagnosticWindows/DiagnosticWindows.jsx";
import Backup from "./components/Backup/Backup.jsx";
import FaqWindows from "./components/FaqWindows/FaqWindows.jsx";

const heroTexts = {
  title:
    "¿Tu PC funciona lento, se bloquea o está infectada con un virus? Reinstalamos Windows en 24 horas.",
  subtitle:
    "Sistema operativo limpio y optimizado. Eliminamos virus, errores y ralentizaciones. Tus archivos están protegidos con copias de seguridad profesionales.",

  steps: [
    "💾 Copia de seguridad completa",
    "🔄 Reinstalación de Windows",
    "⚙️ Drivers + programas",
  ],
  msj: "¡Hola!%20quiero%20reinstalar%20el%20Windows%20de%20mi%20Notebook.",
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
      <DiagnosticWindows />
      <Backup />
      <FaqWindows />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Windows;
