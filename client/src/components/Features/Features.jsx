import React from 'react';
import styles from './Features.module.css';

const Features = () => {
	return (
		<div>
			<section class={styles.social_proof_bar}>
				<div class="container">
					<div class={styles.proof_grid}>
						<div class={styles.proof_item}>
							<div class={styles.proof_number}>+15000</div>
							<div class={styles.proof_label}>Equipos reparados</div>
						</div>
						<div class={styles.proof_item}>
							<div class={styles.proof_number}>20</div>
							<div class={styles.proof_label}>Años de experiencia</div>
						</div>
						<div class={styles.proof_item}>
							<div class={styles.proof_number}>⭐ 4.9</div>
							<div class={styles.proof_label}>Reseña de Google</div>
						</div>
						<div class={styles.proof_item}>
							<div class={styles.proof_number}>6</div>
							<div class={styles.proof_label}>Meses de garantía</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Features;
