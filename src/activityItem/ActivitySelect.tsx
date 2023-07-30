import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import ActivityInformation from '../activities/ActivityInformation';
import allActivities from '../activities/allActivities';
import {ACTIVITY_TYPE_FILTER_PARAMETER} from '../activityList/FilteredActivityList';

const URL_PARAMETER = 'activity';

/** Selected activity to show on a detail page */
const ActivitySelectContext = createContext<{
	activity: null | ActivityInformation;
	setActivity: (activity: null | ActivityInformation) => void;
}>({activity: null, setActivity: () => {}});

interface ActivitySelectProps {
	children?: ReactNode;
}
export function ActivitySelectProvider(props: ActivitySelectProps) {
	const [activity, setActivity] = useState<null | ActivityInformation>(getActivityFromUrl());

	// Setter for updating the url and React state
	const setActivityAndUrl = React.useCallback(
		(newActivity: null | ActivityInformation) => {
			const url = new URL(window.location.href);
			url.searchParams.delete(ACTIVITY_TYPE_FILTER_PARAMETER);
			if (newActivity) {
				setActivity(newActivity);
				url.searchParams.set(URL_PARAMETER, newActivity.slug);
			} else {
				setActivity(null);
				url.searchParams.delete(URL_PARAMETER);
			}

			// Update the url parameter, adding a history entry
			const title = newActivity ? newActivity.name : 'Home';
			window.history.pushState({activity: newActivity ? newActivity.slug : null}, title, url);
			// Update the title (pushState title is not used in most browsers)
			document.title = title;
			// Scroll to the top
			if (newActivity) {
				window.scrollTo({top: 0});
			}
		},
		[setActivity]
	);

	// Update when user browser forward/back
	useEffect(() => {
		const onPopstate = (event: PopStateEvent) => {
			const newActivitySlug = event.state?.activity ?? null;
			const newActivity = newActivitySlug ? getActivityBySlug(newActivitySlug) : null;
			// TODO: update title?
			setActivity(newActivity);
		};
		window.addEventListener('popstate', onPopstate);
		return () => window.removeEventListener('popstate', onPopstate);
	}, [setActivity]);

	return (
		<ActivitySelectContext.Provider value={{activity, setActivity: setActivityAndUrl}}>{props.children}</ActivitySelectContext.Provider>
	);
}

function getActivityFromUrl(): null | ActivityInformation {
	const parameters = new URLSearchParams(window.location.search);
	const activityParameter = parameters.get(URL_PARAMETER);
	if (!activityParameter) {
		return null;
	}

	return getActivityBySlug(activityParameter);
}

function getActivityBySlug(activitySlug: string): null | ActivityInformation {
	const recursiveReducer = (matchingActivity: null | ActivityInformation, activityCandidate: ActivityInformation) => {
		// Already found
		if (matchingActivity) {
			return matchingActivity;
		}

		// Match itself
		if (activityCandidate.slug === activitySlug) {
			return activityCandidate;
		}

		// Match children
		return activityCandidate.activities?.reduce<null | ActivityInformation>(recursiveReducer, null) ?? null;
	};
	return allActivities.reduce<null | ActivityInformation>(recursiveReducer, null);
}

export function useActivitySelect() {
	return useContext(ActivitySelectContext);
}
