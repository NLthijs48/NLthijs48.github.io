import React from 'react';
import Filters, {FilterContext} from './Filters';
import ActivityType from '../activities/ActivityType';
import allActivities from '../activities/allActivities';
import ActivityList from './ActivityList';

function FilteredActivityList() {
	const [activityTypeFilter, setActivityTypeFilter] = React.useState<null | ActivityType>(getActivityTypeFromUrl());

	const setActivityType = React.useCallback(
		(newActivityType: null | ActivityType) => {
			setActivityTypeFilter(newActivityType);

			// Update the url parameter in-place, without reloading the page
			const url = new URL(window.location.href);
			if (newActivityType) {
				url.searchParams.set('activityType', newActivityType);
			} else {
				url.searchParams.delete('activityType');
			}
			window.history.replaceState({}, 'Home', url);
		},
		[setActivityTypeFilter]
	);

	return (
		<div style={{fontSize: '2em'}}>
			<Filters activityType={activityTypeFilter} setActivityType={setActivityType} style={{marginBottom: '1em'}} />

			<FilterContext.Provider value={activityTypeFilter}>
				<ActivityList activities={allActivities} hLevel={2} renderChildActivities />
			</FilterContext.Provider>
		</div>
	);
}

function getActivityTypeFromUrl(): null | ActivityType {
	const parameters = new URLSearchParams(window.location.search);
	const activityTypeParameter = parameters.get('activityType');
	if (!activityTypeParameter) {
		return null;
	}

	if (!Object.values(ActivityType).includes(activityTypeParameter as ActivityType)) {
		return null;
	}

	return activityTypeParameter as ActivityType;
}

export default FilteredActivityList;
