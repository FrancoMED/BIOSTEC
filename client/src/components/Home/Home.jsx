import React from 'react';
import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<NavBar />
			<LandingPage />
		</div>
	);
};

export default Home;
