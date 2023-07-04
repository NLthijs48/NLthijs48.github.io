import icon from '../images/icon-animated.svg';
import Link from '@mui/material/Link';
import FilteredActivityList from '../activityList/FilteredActivityList';
import React from 'react';

function HomePage() {
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginBottom: '4em',
				}}
			>
				<img src={icon} className="App-logo" alt="Logo" style={{height: '5em', width: '5em', marginTop: '0.2em'}} />

				<div style={{flex: 1, marginLeft: '2em'}}>
					<h1 style={{marginTop: 0, marginBottom: '0.5em'}}>Hey, I'm Thijs!</h1>
					<div style={{fontSize: 24, lineHeight: '110%'}}>
						A full stack Software developer working at{' '}
						<Link href="https://crisp.nl" target="_blank" rel="noopener noreferrer">
							Crisp
						</Link>
					</div>
				</div>
			</div>

			<FilteredActivityList />
		</>
	);
}

export default HomePage;
