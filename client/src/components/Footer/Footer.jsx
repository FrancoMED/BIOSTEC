import React from 'react';
import styles from './Footer.module.css';
import logoBiostec from '../../Images/logoBiostec.png';

const Footer = () => {
	return (
		<footer>
			<div class="container">
				<div class={styles.footer_content}>
					<img src={logoBiostec} alt="InfoSquad" class={styles.footer_logo} />
					<div class={styles.footer_links}>
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
