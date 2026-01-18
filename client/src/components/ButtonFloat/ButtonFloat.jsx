import React from 'react';
import styles from './ButtonFloat.module.css';

const ButtonFloat = () => {
	return (
		<div class={styles.floating_whatsapp}>
			<a
				href="https://wa.me/5491130508080?text=¡Hola!%20tengo%20un%20problema%20con%20mi%20equipo,%20¿Podrían%20ayudarme?"
				class={styles.whatsapp_float_btn}
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
				<span>WhatsApp</span>
			</a>
		</div>
	);
};

export default ButtonFloat;
