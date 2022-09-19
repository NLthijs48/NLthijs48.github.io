import React from 'react';
import icon from './images/icon-animated.svg';
import Button from '@mui/material/Button';
import Header from './components/Header';

function HomePage() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={icon} className="App-logo" alt="logo" />
				<p>
					Hello world, this is the website of Thijs
				</p>

				<Button variant="contained">Hello World</Button>
			</header>
		</div>
	);
}

export default HomePage;
