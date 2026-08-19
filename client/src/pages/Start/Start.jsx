import React from "react";
import styles from "./Start.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import RelatedServices from "../../components/RelatedServices/RelatedServices.jsx";
import FeaturesStart from "./components/FeaturesStart/FeaturesStart.jsx";
import Symptoms from "./components/Symptoms/Symptoms.jsx";
import DiagnosticStart from "./components/DiagnosticStart/DiagnosticStart.jsx";
import FaqStart from "./components/FaqStart/FaqStart.jsx";

const heroTexts = {
  title: "¿Tu portátil no enciende ? Descubre la causa y el costo.",
  subtitle:
    "¿Tu placa base se apaga sola, no carga o no muestra imagen? Somos un laboratorio técnico especializado en la reparación de placas base:arreglamos lo que otros desechan.",

  steps: [
    "🧾 Describe el problema",
    "🔍 Analizamos los síntomas",
    "💰 Recibí tu presupuesto gratuito",
  ],
  msj: "¡Hola!%20tengo%20un%20problema%20con%20mi%20Notebook%2C%20no%20enciende.",
};

const relatedServicesContent = {
  texts: [
    "Pantalla rota o negra",
    "puertos USB, HDMI ",
    "Daño por liquido",
    "Sobrecalentamiento",
  ],
  links: ["/screen", "/ports", "/liquid", "/overheating"],
};

const Start = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={heroTexts} />
      <FeaturesStart />
      <Symptoms />
      <DiagnosticStart />
      <FaqStart />
      <RelatedServices props={relatedServicesContent} />
    </div>
  );
};

export default Start;
