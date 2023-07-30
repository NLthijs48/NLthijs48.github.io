import React, {useMemo} from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import {useActivitySelect} from './activityItem/ActivitySelect';
import ActivityPage from './pages/activityPage/ActivityPage';
import NotFoundPage from './pages/NotFoundPage';

export enum LayoutMode {
	Desktop,
	Mobile,
}

function PageWrapper() {
	const layoutMode = useLayoutMode();
	const sideSpace = layoutMode === LayoutMode.Mobile ? '1em' : '2em';

	const {activity} = useActivitySelect();

	const notFound = useMemo(() => {
		const url = new URL(window.location.href);
		if (url.searchParams.get('page') !== '404') {
			return null;
		}

		return {
			href: url.searchParams.get('href'),
		};
	}, []);

	let page: React.ReactNode;
	let isHome = false;
	if (notFound) {
		page = <NotFoundPage href={notFound.href} />;
	} else if (activity) {
		page = <ActivityPage activity={activity} />;
	} else {
		isHome = true;
		page = <HomePage />;
	}

	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				backgroundColor: '#EEE',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'stretch',
			}}
		>
			<div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
				<Header layoutMode={layoutMode} isHome={isHome} />
				<div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<main
						style={{
							width: '100%',
							maxWidth: 1000,
							paddingLeft: sideSpace,
							paddingRight: sideSpace,
							paddingTop: sideSpace,
							paddingBottom: '8em',
						}}
					>
						{page}
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

export default PageWrapper;
