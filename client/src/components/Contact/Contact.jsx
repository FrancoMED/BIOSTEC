import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
	return (
		<div id="contacto" class={styles.contact_simple}>
			<div class="container">
				{/* <!-- CTA Principal --> */}
				<div class={styles.contact_cta_box}>
					<h2>📱 Hablanos ahora!</h2>
					<p>
						Describe tu problema vía WhatsApp y recibe una valoración inicial.
					</p>
					<a
						href="https://wa.me/5491130508080?text=¡Hola!%20tengo%20un%20problema%20con%20mi%20equipo,%20¿Podrían%20ayudarme?"
						class={styles.cta_whatsapp}
						target="_blank"
						rel="noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z" />
						</svg>
						Llamar por whatsapp
					</a>
				</div>

				{/* <!-- Info de contacto --> */}
				<div class={styles.contact_info_grid}>
					<div class={styles.contact_info_item}>
						<div class={styles.icon}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
							</svg>
						</div>
						<div>
							<h4>Dirección</h4>
							<p>
								Gurruchaga 1010 - Zeballos
								<br />
								Florencio Varela
							</p>
						</div>
					</div>

					<div class={styles.contact_info_item}>
						<div class={styles.icon}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Z" />
							</svg>
						</div>
						<div>
							<h4>Email</h4>
							<p>
								<a href="mailto:Agustincardz@gmail.com">
									Agustincardz@gmail.com
								</a>
							</p>
						</div>
					</div>

					<div class={styles.contact_info_item}>
						<div class={styles.icon}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
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
						</div>
						<div>
							<h4>Instagram</h4>
							<p>
								<a
									href="https://www.instagram.com/biostec.oficial/?hl=es"
									target="_blank"
									rel="noreferrer"
								>
									@Biostec.Oficial
								</a>
							</p>
						</div>
					</div>
				</div>

				{/* <!-- Mapa --> */}
				<div class={styles.map_container}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.778282521093!2d-58.24370552314288!3d-34.81151956850411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32906cbd2d14d%3A0x4090f8ea0f72ef6a!2sFrancisco%20Gurruchaga%201010%2C%20B1888%20Zeballos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1768577069341!5m2!1ses-419!2sar"
						title="Mapa de nuestra sucursal"
						loading="lazy"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
