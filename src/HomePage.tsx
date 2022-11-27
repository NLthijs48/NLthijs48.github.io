import React from 'react';
import icon from './images/icon-animated.svg';
import Button from '@mui/material/Button';
import Header from './components/Header';

function HomePage() {
	return (
		<div className="App">
			<Header />
			<main>
				<img src={icon} className="App-logo" alt="Logo" />
				<p>Hello world, this is the website of Thijs</p>

				<Button variant="contained">Hello World</Button>
			</main>
		</div>
	);
}

export default HomePage;
