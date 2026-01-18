import React from 'react';
import LandingPage from '../LandingPage/LandingPage.jsx';
import Features from '../Features/Features.jsx';
import Cards from '../Cards/Cards.jsx';
import Services from '../Services/Services.jsx';
import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import styles from './Home.module.css';

const Home = () => {
	return (
		<div className="Home">
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
		</div>
	);
};

export default Home;
