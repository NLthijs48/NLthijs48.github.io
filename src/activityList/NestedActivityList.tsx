import React from 'react';
import Filters, {FilterContext} from './Filters';
import ActivityType from '../activities/ActivityType';
import allActivities from '../activities/allActivities';
import ActivityList from './ActivityList';

function NestedActivityList() {
	const [activityTypeFilter, setActivityTypeFilter] = React.useState<null | ActivityType>(null);

	return (
		<div style={{fontSize: '2em'}}>
			<Filters activityType={activityTypeFilter} setActivityType={setActivityTypeFilter} style={{marginBottom: '1em'}} />

			<FilterContext.Provider value={activityTypeFilter}>
				<ActivityList activities={allActivities} hLevel={2} />
			</FilterContext.Provider>
		</div>
	);
}

export default NestedActivityList;
