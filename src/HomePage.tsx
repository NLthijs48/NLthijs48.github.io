import React from 'react';
import icon from './images/icon-animated.svg';
import Header from './components/Header';
import Link from '@mui/material/Link';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PersonIcon from '@mui/icons-material/Person';

function HomePage() {
	return (
		<div className="App">
			<Header />
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<main style={{width: '100%', maxWidth: 1000, paddingLeft: '2em', paddingRight: '2em'}}>
					<h1>Hey, I'm Thijs!</h1>
					<div style={{fontSize: 24, lineHeight: '110%'}}>
						A full stack Software developer working at{' '}
						<Link href="https://crisp.nl" target="_blank" rel="noopener noreferrer">
							Crisp
						</Link>
						{', '}
						revamping the food logistics chain from{' '}
						<AgricultureIcon style={{opacity: 0.6, fontSize: '130%', marginBottom: '-0.2em', marginRight: '0.1em'}} />
						supplier to <PersonIcon style={{opacity: 0.6, fontSize: '130%', marginBottom: '-0.2em'}} />
						customer
					</div>

					<img src={icon} className="App-logo" alt="Logo" style={{marginTop: '2em'}} />
				</main>
			</div>
		</div>
	);
}

export default HomePage;
