import React, {CSSProperties, useContext} from 'react';
import ActivityItem from '../activityItem/ActivityItem';
import ActivityInformation from '../activities/ActivityInformation';
import {FilterContext} from './Filters';
import ActivityType from '../activities/ActivityType';

export interface ActivityListProps {
	activities: ActivityInformation[];
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
	renderChildActivities?: boolean;
	style?: CSSProperties;
}
function ActivityList(props: ActivityListProps) {
	// Automatically filter if one is provided through context
	const activityTypeFilter = useContext(FilterContext);
	const activities = React.useMemo(
		() => props.activities.filter((activity) => activityMatchesFilter(activity, activityTypeFilter)),
		[props.activities, activityTypeFilter]
	);

	return (
		<div style={props.style}>
			{activities.map((activity, index) => (
				<ActivityItem
					key={index}
					activity={activity}
					hLevel={props.hLevel}
					renderChildActivities={props.renderChildActivities}
					style={{marginBottom: '0.5em'}}
				/>
			))}
		</div>
	);
}

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

export default ActivityList;
