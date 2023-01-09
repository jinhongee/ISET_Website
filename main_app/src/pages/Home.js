import React from 'react';
import './Home.scss';
import MainSlide from '../components/MainSlide';
import Intro from '../components/Intro';
import Stat from '../components/Stat';
import Activities from '../components/Activities';
import Contacts from '../components/Contacts';

function Home() {
	return (
		<div className="home">
			<MainSlide />
			<Intro />
			<Stat />
			<Activities />
			<Contacts />
		</div>
	);
}

export default Home;