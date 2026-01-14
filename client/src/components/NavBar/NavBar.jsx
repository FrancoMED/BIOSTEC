import React from 'react';
import styles from './Navbar.module.css';

const NavBar = () => {
	return (
		<nav
			class={`navbar navbar-expand-lg sticky-top ${styles.bg_body_tertiary} ${styles.nav}`}
		>
			<div class="container-fluid">
				<hr />
				<button
					class={`navbar-toggler ${styles.navbar_toggler}`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
				>
					<span
						class={`navbar-toggler-icon ${styles.navbar_toggler_icon}`}
					></span>
				</button>
				<div
					class="collapse navbar-collapse justify-content-end"
					id="navbarSupportedContent"
				>
					<ul class="navbar-nav mb-2 mb-lg-0">
						<li>
							<a class={`nav-link ${styles.nav_link}`} href="#inicio">
								Inicio
							</a>
						</li>
						<li>
							<a class={`nav-link ${styles.nav_link}`} href="#servicios">
								Servicios
							</a>
						</li>
						<li>
							<a class={`nav-link ${styles.nav_link}`} href="#sobreNosotros">
								Sobre Nosotros
							</a>
						</li>
						<li>
							<a class={`nav-link ${styles.nav_link}`} href="#contacto">
								Contacto
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
