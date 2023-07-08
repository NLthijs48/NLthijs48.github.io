import {init as sentryInit, BrowserTracing, Replay, ErrorBoundary as SentryErrorBoundary} from '@sentry/react';
import React from 'react';

const isDevelopment = process.env?.NODE_ENV === 'development';

export function setupSentry() {
	// Disable in development
	if (isDevelopment) {
		return;
	}

	// Start Sentry
	sentryInit({
		dsn: 'https://cedab47c1039451d80dff13543e6e485@o82874.ingest.sentry.io/4505494208839680',
		environment: isDevelopment ? 'development' : 'production',
		// TODO: set 'release' to commit hash somehow?
		integrations: [
			new BrowserTracing({
				// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
				tracePropagationTargets: ['localhost', 'https:yourserver.io/api/'],
			}),
			new Replay(),

			// TODO investigate: https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/plugin/#reportingobserver
		],
		// Performance Monitoring
		// - 100% in development
		// - 10% in production
		tracesSampleRate: isDevelopment ? 1.0 : 0.1,
		// Session Replay
		// - 100% in development
		// - 10% in production
		replaysSessionSampleRate: isDevelopment ? 1 : 0.1,
		// Always track when there is a bug
		replaysOnErrorSampleRate: 1.0,
	});
}

export function ErrorBoundary(props: {children: React.ReactNode}) {
	return (
		<SentryErrorBoundary
			fallback={
				<div>
					<h1>An error occurred</h1>
					<p>Try reloading to see if that fixes it, or email me!</p>
				</div>
			}
		>
			{props.children}
		</SentryErrorBoundary>
	);
}
