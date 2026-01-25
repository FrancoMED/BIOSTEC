import React from 'react';
import LandingPage from '../../components/LandingPage/LandingPage.jsx';
import Features from '../../components/Features/Features.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import Services from '../../components/Services/Services.jsx';
import About from '../../components/About/About.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx';
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
