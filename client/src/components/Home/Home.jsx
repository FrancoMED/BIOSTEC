import React from 'react';
import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';
import Features from '../Features/Features.jsx';
import Cards from '../Cards/Cards.jsx';

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<NavBar />
			<LandingPage />
			<Features />
			<Cards />
		</div>
	);
};

export default Home;
