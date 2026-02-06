import React, { useRef, useEffect } from "react";
import styles from "./Header.module.css";
import network from "./netWork.js";

function Header() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cleanup = network(canvas);
    // Cleanup al desmontar el componente
    return cleanup;
  }, []);

  return (
    <header id="Inicio" class={styles.header}>
      <canvas ref={canvasRef} />
    </header>
  );
}

export default Header;
