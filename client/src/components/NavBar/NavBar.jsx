import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			// Si hay un hash en la URL (ej: #inicio)
			const element = document.getElementById(location.hash.substring(1)); // Busca el elemento por ID
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente
			}
		}
	}, [location]);

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
							<Link class={`nav-link ${styles.nav_link}`} to="/#inicio">
								Inicio
							</Link>
						</li>
						<li>
							<Link class={`nav-link ${styles.nav_link}`} to="/#servicios">
								Servicios
							</Link>
						</li>
						<li>
							<Link class={`nav-link ${styles.nav_link}`} to="/#sobreNosotros">
								Sobre Nosotros
							</Link>
						</li>
						<li>
							<Link class={`nav-link ${styles.nav_link}`} to="/#contacto">
								Contacto
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
