import React, {CSSProperties, useContext} from 'react';
import ActivityItem from './ActivityItem';
import ActivityType from '../activities/ActivityType';
import ActivityInformation from '../activities/ActivityInformation';
import {FilterContext} from './Filters';

function activityMatchesFilter(activity: ActivityInformation, filter: null | ActivityType): boolean {
	// No filter to apply
	if (filter === null) {
		return true;
	}

	// Activity itself matches
	if (filter === activity.activityType) {
		return true;
	}

	// Nested activity matches
	if (activity.activities && activity.activities.find((nestedActivity) => activityMatchesFilter(nestedActivity, filter))) {
		return true;
	}

	return false;
}

interface ActivityListProps {
	activities: ActivityInformation[];
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
	style?: CSSProperties;
}
function ActivityList(props: ActivityListProps) {
	const activityTypeFilter = useContext(FilterContext);
	const activities = props.activities.filter((activity) => activityMatchesFilter(activity, activityTypeFilter));

	return (
		<div style={props.style}>
			{activities.map((activity, index) => (
				<ActivityItem key={index} activity={activity} hLevel={props.hLevel} />
			))}
		</div>
	);
}

export default ActivityList;
