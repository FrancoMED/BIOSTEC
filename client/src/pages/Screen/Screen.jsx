import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import styles from "./Screen.module.css";
import FeaturesScreen from "./components/FeaturesScreen/FeaturesScreen.jsx";
import DiagnosticScreen from "./components/DiagnosticScreen/DiagnosticScreen.jsx";
import FaqScreen from "./components/FaqScreen/FaqScreen.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";

const heroTexts = {
  title:
    "¿Se te rompió la pantalla? ¡No te preocupes! Cotización GRATIS a través de WhatsApp",
  subtitle:
    "Descubra si necesita reemplazar la pantalla o si hay una opción de reparación más económica, sin salir de casa.",

  steps: ["📸 Envíe foto", "🔍 Técnico analiza", "💰 Reciba cotización"],

  msj: "¡Hola!%20tengo%20un%20problema%20con%20mi%20Notebook%2C%20tiene%20la%20pantalla%20rota.",
};

const relatedServicesContent = {
  texts: [
    "Teclado defectuoso",
    "Bisagras",
    "Puertos USB/HDMI",
    "Notebook no enciende",
  ],
  links: ["/keyboard", "/hinges", "/ports", "/start"],
};

const Screen = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesScreen />
      <DiagnosticScreen />
      <FaqScreen />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Screen;
