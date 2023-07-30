import React from 'react';
import ReactDOM from 'react-dom/client';
import PageWrapper from './PageWrapper';
import {CssBaseline, ThemeProvider} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './theme';
import {ActivitySelectProvider} from './activityItem/ActivitySelect';
import {setupSentry, ErrorBoundary} from './sentry';

setupSentry();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ErrorBoundary>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ActivitySelectProvider>
					<PageWrapper />
				</ActivitySelectProvider>
			</ThemeProvider>
		</ErrorBoundary>
	</React.StrictMode>
);
