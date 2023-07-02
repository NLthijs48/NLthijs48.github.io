import React from 'react';
import ActivityInformation from '../activities/ActivityInformation';
import ActivityTitle from '../activityList/ActivityTitle';
import HighlightItem from '../components/HighlightItem';
import TimePeriodIndicator from '../activityList/TimePeriodIndicator';

// TODO: home page button
// TODO: breadcrumbs (if any)

interface ActivityPageProps {
	activity: ActivityInformation;
}
function ActivityPage(props: ActivityPageProps) {
	return (
		<div>
			<div style={{fontSize: '2em'}}>
				<ActivityTitle activity={props.activity} hLevel={1} />
				<div style={{paddingLeft: '2.5em'}}>
					<TimePeriodIndicator activity={props.activity} />
				</div>
			</div>

			<div style={{lineHeight: '130%', marginTop: '1em', fontSize: '1.5em'}}>{props.activity.description}</div>

			{!!props.activity.highlights &&
				props.activity.highlights.map((highlight, index) => <HighlightItem highlight={highlight} key={index} />)}
		</div>
	);
}

export default ActivityPage;
