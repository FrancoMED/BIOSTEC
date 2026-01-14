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
						href="https://wa.me/5521976724708?text=Oi!%20Meu%20notebook%20está%20com%20problema.%20Podem%20me%20ajudar?"
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
								Rua India, 2 - Campo Grande
								<br />
								Rio de Janeiro/RJ
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
								<a href="mailto:infosquadbrasil@gmail.com">
									infosquadbrasil@gmail.com
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
									href="https://www.instagram.com/infosquadbrasil/"
									target="_blank"
									rel="noreferrer"
								>
									@infosquadbrasil
								</a>
							</p>
						</div>
					</div>
				</div>

				{/* <!-- Mapa --> */}
				<div class={styles.map_container}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.5971916002823!2d-43.53071845792422!3d-22.92529505117007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be6d18b8d09ed%3A0xff4732df8385822b!2sRua%20India%2C%202%20-%20Campo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023017-070!5e0!3m2!1spt-BR!2sbr!4v1741785033396!5m2!1spt-BR!2sbr"
						title="Mapa de nuestra sucursal"
						loading="lazy"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
