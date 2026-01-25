import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import imageIG from '../../../../assets/Images/IG.jpg';

const About = () => {
	return (
		<div id="sobreNosotros" class={styles.about_instagram_section}>
			<div class="container">
				<div class={styles.about_instagram_grid}>
					<div class={styles.about_box}>
						<h2>¿Qué hacemos?</h2>
						<p>
							Somos un laboratorio técnico especializado en reparación de
							notebooks, consolas y placas de video, con amplia experiencia en
							microsoldadura electrónica y reparación de placas base.
						</p>
						<p>
							Brindamos un servicio técnico profesional orientado a la
							reparación a nivel de componentes, utilizando microscopio,
							estaciones de soldadura profesional y equipamiento de diagnóstico
							avanzado para resolver fallas complejas en equipos electrónicos.
						</p>
						<p>
							A diferencia de los servicios técnicos tradicionales, ofrecemos
							reparación de placas electrónicas, recuperación de equipos con
							fallas críticas y soluciones donde otros técnicos no intervienen.
						</p>
						<p>
							Reparamos lo que otros descartan. Si su equipo puede repararse,
							encontramos la solución.
						</p>
						{/* <p>
							Somos un <strong> laboratorio técnico especializado </strong> en
							reparación de notebooks y MacBooks, centrándose en
							<strong> Microsoldadura y reparación de placas base </strong>.
						</p>
						<p>
							A diferencia de los talleres de reparación típicos, trabajamos a
							nivel de componentes con un microscopio, una estación de soldadura
							profesional y un equipo de diagnóstico avanzado.
						</p>
						<p>
							Reparamos lo que otros desechan. Si su equipo se puede reparar,
							encontraremos la solución.
						</p> */}
					</div>

					<div class={styles.instagram_box_v2}>
						<div class={styles.instagram_header}>
							<img src={imageIG} alt="Instagram BiosTec" />
							<div>
								<h3>@Biostec.Oficial</h3>
								<p>Vea nuestras reparaciones</p>
							</div>
						</div>
						<div class={styles.instagram_preview}>
							<p>
								Sigue nuestros trabajos, consejos de mantenimiento y
								reparaciones en tiempo real en Instagram.
							</p>
						</div>
						<Link
							to="https://www.instagram.com/biostec.oficial/?hl=es"
							target="_blank"
							rel="noreferrer"
							class={styles.btn_instagram_v2}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								{/* <!-- Marco cuadrado redondeado --> */}
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />

								{/* <!-- Círculo central --> */}
								<circle cx="12" cy="12" r="5" />

								{/* <!-- Punto superior derecho separado --> */}
								<circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
							</svg>
							Seguinos en Instagram
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
