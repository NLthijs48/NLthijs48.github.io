import React from 'react';
import ActivityInformation from '../../activities/ActivityInformation';
import HighlightItem from '../../components/HighlightItem';
import Breadcrumbs from './Breadcrumbs';
import ActivityList from '../../activityList/ActivityList';
import ActivityItem from '../../activityItem/ActivityItem';
import ActivityWebsite from './ActivityWebsite';
import ActivityDescription from '../../activityItem/ActivityDescription';

interface ActivityPageProps {
	activity: ActivityInformation;
}
function ActivityPage(props: ActivityPageProps) {
	return (
		<div style={{position: 'relative'}}>
			<Breadcrumbs
				toActivity={props.activity}
				style={{paddingLeft: '1.7em', paddingRight: '1.7em', opacity: 0.7, fontSize: '1.2em'}}
			/>
			<ActivityItem activity={props.activity} hLevel={1} style={{fontSize: '2.2em', marginBottom: '0.5em'}}></ActivityItem>
			<ActivityWebsite activity={props.activity} style={{marginBottom: '0.5em'}} />
			<ActivityDescription activity={props.activity} />

			{!!props.activity.activities && (
				<div style={{marginTop: '2em'}}>
					{!!props.activity.highlights && <h2 style={{marginBottom: '0.5em'}}>Activities</h2>}
					<ActivityList activities={props.activity.activities} hLevel={3} style={{fontSize: '1.5em'}} />
				</div>
			)}

			{!!props.activity.highlights && (
				<div style={{marginTop: '2em', width: '100%'}}>
					{!!props.activity.activities && <h2 style={{marginBottom: '0.5em'}}>Highlights</h2>}
					{props.activity.highlights.map((highlight, index) => (
						<HighlightItem highlight={highlight} key={index} />
					))}
				</div>
			)}
		</div>
	);
}

export default ActivityPage;
