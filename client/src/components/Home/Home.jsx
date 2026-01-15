import React from 'react';
import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';
import Features from '../Features/Features.jsx';
import Cards from '../Cards/Cards.jsx';
import Services from '../Services/Services.jsx';
import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import ButtonFloat from '../ButtonFloat/ButtonFloat.jsx';
import styles from './Home.module.css';

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<NavBar />
			<LandingPage />
			<Features />
			<Cards />
			<div class={styles.section_divider}></div>
			<Services />
			<div class={styles.section_divider}></div>
			<About />
			<div class={styles.section_divider}></div>
			<Contact />
			<Footer />
			<ButtonFloat />
		</div>
	);
};

export default Home;
