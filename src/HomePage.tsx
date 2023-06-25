import React from 'react';
import icon from './images/icon-animated.svg';
import Link from '@mui/material/Link';
import NestedActivityList from './activityList/NestedActivityList';
import Header from './components/Header';

export enum LayoutMode {
	Desktop,
	Mobile,
}

function HomePage() {
	const layoutMode = useLayoutMode();
	const sideSpace = layoutMode === LayoutMode.Mobile ? '1em' : '2em';

	return (
		<div style={{height: '100%', width: '100%', backgroundColor: '#EEE', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}}>
			<div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
				<Header layoutMode={layoutMode} />
				<div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<main style={{width: '100%', maxWidth: 1000, paddingLeft: sideSpace, paddingRight: sideSpace, paddingBottom: '8em'}}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginBottom: '4em',
								marginTop: sideSpace,
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

						<NestedActivityList />
					</main>
				</div>
			</div>
		</div>
	);
}
function getLayoutMode(): LayoutMode {
	if (window.innerWidth <= 800) {
		return LayoutMode.Mobile;
	}
	return LayoutMode.Desktop;
}

function useLayoutMode(): LayoutMode {
	const [layoutMode, setLayoutMode] = React.useState<LayoutMode>(getLayoutMode);
	const timerR = React.useRef<number | undefined>();

	React.useEffect(() => {
		const onResize = () => {
			// Debounce for a bit
			window.clearTimeout(timerR.current);
			timerR.current = window.setTimeout(() => setLayoutMode(getLayoutMode()), 100);
		};

		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [setLayoutMode, timerR]);

	return layoutMode;
}

export default HomePage;
