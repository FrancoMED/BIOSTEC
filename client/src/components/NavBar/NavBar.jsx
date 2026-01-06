import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
			<div class="container-fluid">
				{/* <a class={styles.navbar_brand}></a>
				<button
					class={styles.navbar_toggler}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
				>
					<span class={styles.navbar_toggler_icon}></span>
				</button> */}
				<div
				// class="collapse navbar-collapse justify-content-end"
				// id="navbarSupportedContent"
				>
					{/* <ul> */}
					<Link to="/home">
						{/* <li class={styles.nav_item}> */}
						<p class={styles.nav_link}>Home</p>
						{/* </li> */}
					</Link>
					<Link to="/service">
						{/* <li class={styles.nav_item}> */}
						<p class={styles.nav_link}>Servicios</p>
						{/* </li> */}
					</Link>
					<Link to="/about">
						{/* <li class={styles.nav_item}> */}
						<p class={styles.nav_link}>Sobre Nosotros</p>
						{/* </li> */}
					</Link>
					<Link to="/contact">
						{/* <li class={styles.nav_item}> */}
						<p class={styles.nav_link}>Contacto</p>
						{/* </li> */}
					</Link>
					{/* </ul> */}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
