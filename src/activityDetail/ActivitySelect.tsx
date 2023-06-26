import React, {createContext, ReactNode, useContext, useState} from 'react';
import ActivityInformation from '../activities/ActivityInformation';
import allActivities from '../activities/allActivities';

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

	const setActivityAndUrl = React.useCallback(
		(newActivity: null | ActivityInformation) => {
			const url = new URL(window.location.href);
			if (newActivity) {
				setActivity(newActivity);
				url.searchParams.set(URL_PARAMETER, newActivity.slug);
			} else {
				setActivity(null);
				url.searchParams.delete(URL_PARAMETER);
			}

			// Update the url parameter in-place, without reloading the page
			window.history.replaceState({}, 'Home', url);
		},
		[setActivity]
	);

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
