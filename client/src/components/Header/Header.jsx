import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import LogoHeader from '../../assets/Images/logoBiostec.png';
import network from './netWork.js';

function Header() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const cleanup = network(canvas);

		// Cleanup al desmontar el componente
		return cleanup;
	}, []);

	return (
		<header id="inicio" class={styles.header}>
			<canvas ref={canvasRef} />
			<Link to="/">
				<img src={LogoHeader} alt="Logo InfoSquad" class={styles.logo} />
			</Link>
		</header>
	);
}

export default Header;
