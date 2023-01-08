import React from 'react';
import ActivityItem from './ActivityItem';
import Filters from './Filters';
import ActivityType from '../activities/ActivityType';
import allActivities from '../activities/allActivities';

function ActivityTimeline() {
	const [activityTypeFilter, setActivityTypeFilter] = React.useState<null | ActivityType>(null);
	const activities = allActivities.filter((activity) => {
		return activityTypeFilter === null || activityTypeFilter === activity.activityType;
	});

	return (
		<div style={{fontSize: '2em'}}>
			<Filters activityType={activityTypeFilter} setActivityType={setActivityTypeFilter} style={{marginBottom: '1em'}} />

			{activities.map((activity, index) => (
				<ActivityItem key={index} activity={activity} last={index === activities.length - 1} />
			))}
		</div>
	);
}

export default ActivityTimeline;
