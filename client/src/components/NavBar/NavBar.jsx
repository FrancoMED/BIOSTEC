import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {
	return (
		<nav
			// class={`navbar navbar-expand-lg bg-body-tertiary sticky-top nav_container ${styles.nav}`}
			class={`navbar navbar-expand-lg sticky-top nav_container`}
		>
			<div class="container-fluid">
				<a class={`navbar-brand  ${styles.nav}`}></a>
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
						<Link to="/home">
							<li class={`nav_item ${styles.nav_item}`}>
								<p class={`nav_link ${styles.nav_link}`}>Home</p>
							</li>
						</Link>
						<Link to="/service">
							<li class={`nav_item ${styles.nav_item}`}>
								<p class={`nav_link ${styles.nav_link}`}>Servicios</p>
							</li>
						</Link>
						<Link to="/about">
							<li class={`nav_item ${styles.nav_item}`}>
								<p class={`nav_link ${styles.nav_link}`}>Sobre Nosotros</p>
							</li>
						</Link>
						<Link to="/contact">
							<li class={`nav_item ${styles.nav_item}`}>
								<p class={`nav_link ${styles.nav_link}`}>Contacto</p>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
		// <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
		// 	<div class="container-fluid">
		// 		<a class="navbar-brand"></a>
		// 		<button
		// 			class="navbar-toggler"
		// 			type="button"
		// 			data-bs-toggle="collapse"
		// 			data-bs-target="#navbarSupportedContent"
		// 		>
		// 			<span class="navbar-toggler-icon"></span>
		// 		</button>
		// 		<div
		// 			class="collapse navbar-collapse justify-content-end"
		// 			id="navbarSupportedContent"
		// 		>
		// 			<ul class="navbar-nav mb-2 mb-lg-0">
		// 				<li class="nav-item">
		// 					<a class="nav-link" href="#home">
		// 						Home
		// 					</a>
		// 				</li>
		// 				<li class="nav-item">
		// 					<a class="nav-link" href="#problemas">
		// 						Serviços
		// 					</a>
		// 				</li>
		// 				<li class="nav-item">
		// 					<a class="nav-link" href="#sobre">
		// 						Sobre Nós
		// 					</a>
		// 				</li>
		// 				<li class="nav-item">
		// 					<a class="nav-link" href="#contato">
		// 						Contato
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	);
};

export default NavBar;
