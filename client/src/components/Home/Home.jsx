import React from 'react';
import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';
import Features from '../Features/Features.jsx';

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<NavBar />
			<LandingPage />
			<Features />
		</div>
	);
};

export default Home;
