import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import styles from "./Screen.module.css";
import FeaturesScreen from "./components/FeaturesScreen/FeaturesScreen.jsx";

const texts = {
  title: "Pantalla Quebrada? Cotización GRATIS a través de WhatsApp",
  subtitle:
    "Descubra si necesita reemplazar la pantalla o si hay una opción dereparación más económica, sin salir de casa.",

  steps: ["📸 Envíe foto", "🔍 Técnico analista", "💰 Reciba cotización"],
};
const Screen = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={texts} />
      <FeaturesScreen />
    </div>
  );
};

export default Screen;
