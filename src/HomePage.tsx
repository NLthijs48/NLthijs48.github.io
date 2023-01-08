import React from 'react';
import icon from './images/icon-animated.svg';
import Header from './components/Header';
import Link from '@mui/material/Link';
import ActivityTimeline from './timeline/ActivityTimeline';

function HomePage() {
	return (
		<div style={{height: '100%', backgroundColor: '#EEE', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<Header />
			<main style={{width: '100%', maxWidth: 1000, paddingLeft: '2em', paddingRight: '2em'}}>
				<div style={{display: 'flex', flexDirection: 'row', marginBottom: '4em'}}>
					<img src={icon} className="App-logo" alt="Logo" style={{marginTop: '2em', height: '5em', width: '5em'}} />

					<div style={{flex: 1, marginLeft: '2em'}}>
						<h1 style={{marginBottom: '0.5em'}}>Hey, I'm Thijs!</h1>
						<div style={{fontSize: 24, lineHeight: '110%'}}>
							A full stack Software developer working at{' '}
							<Link href="https://crisp.nl" target="_blank" rel="noopener noreferrer">
								Crisp
							</Link>
						</div>
					</div>
				</div>

				<ActivityTimeline />
			</main>
		</div>
	);
}

export default HomePage;
