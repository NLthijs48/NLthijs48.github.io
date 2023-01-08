import React from 'react';
import ActivityItem from './ActivityItem';
import crisp from '.././activities/crisp/index';
import ActivityInformation from '../activities/ActivityInformation';
import homeAssistant from '.././activities/homeAssistant/index';
import computerScienceMaster from '.././activities/computerScienceMaster/index';
import computerScienceBachelor from '.././activities/computerScienceBachelor/index';

function ActivityTimeline() {
	const activities: ActivityInformation[] = [crisp, computerScienceMaster, computerScienceBachelor, homeAssistant];

	return (
		<div style={{fontSize: '2em'}}>
			{activities.map((activity, index) => (
				<ActivityItem key={index} activity={activity} last={index === activities.length - 1} />
			))}
		</div>
	);
}

export default ActivityTimeline;
