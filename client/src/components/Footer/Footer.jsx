import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import logoBiostec from "../../assets/Images/logoBiostec.png";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Si hay un hash en la URL (ej: #inicio)
      const element = document.getElementById(location.hash.substring(1)); // Busca el elemento por ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Desplaza suavemente
      }
    }
  }, [location]);

  return (
    <footer>
      <div>
        <div class={styles.footer_content}>
          <img src={logoBiostec} alt="biostec" class={styles.footer_logo} />
          {/* <div class={styles.footer_links}>
						<a href="#servicios">Servicios</a>
						<a href="#sobreNosotros">Sobre Nosotros</a>
						<a href="#contacto">Contacto</a>
						<a
							href="https://links.infosquadbrasil.com"
							target="_blank"
							rel="noreferrer"
						>
							Cursos
						</a>
					</div> */}
          <div class={styles.footer_links}>
            <Link to="/#Servicios">Servicios</Link>
            <Link to="/#Sobre Nosotros">Sobre Nosotros</Link>
            <Link to="/#Contacto">Contacto</Link>
            <Link
              to="https://links.infosquadbrasil.com"
              target="_blank"
              rel="noreferrer"
            >
              Cursos
            </Link>
          </div>

          <p class={styles.footer_copy}>
            © 2026 BiosTec - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
