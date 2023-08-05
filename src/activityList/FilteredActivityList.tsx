import React from 'react';
import Filters, {FilterContext} from './Filters';
import ActivityType from '../activities/ActivityType';
import allActivities from '../activities/allActivities';
import ActivityList from './ActivityList';
import {LayoutMode} from '../PageWrapper';

export const ACTIVITY_TYPE_FILTER_PARAMETER = 'activityType';

function FilteredActivityList(props: {layoutMode: LayoutMode}) {
	const [activityTypeFilter, setActivityTypeFilter] = React.useState<null | ActivityType>(getActivityTypeFromUrl());

	const setActivityType = React.useCallback(
		(newActivityType: null | ActivityType) => {
			setActivityTypeFilter(newActivityType);

			// Update the url parameter in-place, without reloading the page
			const url = new URL(window.location.href);
			if (newActivityType) {
				url.searchParams.set(ACTIVITY_TYPE_FILTER_PARAMETER, newActivityType);
			} else {
				url.searchParams.delete(ACTIVITY_TYPE_FILTER_PARAMETER);
			}
			window.history.replaceState({}, 'Home', url);
		},
		[setActivityTypeFilter]
	);

	return (
		<div style={{fontSize: props.layoutMode === LayoutMode.Desktop ? '2em' : '1.5em'}}>
			<Filters activityType={activityTypeFilter} setActivityType={setActivityType} style={{marginBottom: '1em'}} />

			<FilterContext.Provider value={activityTypeFilter}>
				<ActivityList activities={allActivities} hLevel={2} renderChildActivities />
			</FilterContext.Provider>
		</div>
	);
}

function getActivityTypeFromUrl(): null | ActivityType {
	const parameters = new URLSearchParams(window.location.search);
	const activityTypeParameter = parameters.get(ACTIVITY_TYPE_FILTER_PARAMETER);
	if (!activityTypeParameter) {
		return null;
	}

	if (!Object.values(ActivityType).includes(activityTypeParameter as ActivityType)) {
		return null;
	}

	return activityTypeParameter as ActivityType;
}

export default FilteredActivityList;
