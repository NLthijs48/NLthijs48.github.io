import React, {CSSProperties} from 'react';
import ActivityInformation from '../activities/ActivityInformation';
import TimePeriodIndicator from './TimePeriodIndicator';
import ActivityList from './ActivityList';
import ActivityDetailsButton from './ActivityDetailsButton';
import ActivityTitle from './ActivityTitle';
import {ButtonBase} from '@mui/material';

interface ActivityItemProps {
	activity: ActivityInformation;
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
	style?: CSSProperties;
}

function ActivityItem(props: ActivityItemProps) {
	let title = <ActivityTitle activity={props.activity} hLevel={props.hLevel} />;

	// Add link to the website
	if (props.activity.website) {
		title = (
			<ButtonBase
				href={props.activity.website}
				target="_blank"
				rel="noopener noreferrer"
				style={{display: 'block', textDecoration: 'underline', borderRadius: '1em'}}
			>
				{title}
			</ButtonBase>
		);
	}

	return (
		<div style={{marginBottom: '0.5em', display: 'flex', flexDirection: 'column', ...props.style}}>
			{title}

			<div
				style={{
					fontSize: 'inherit',
					marginBottom: '0.5em',
					paddingTop: 0,
					paddingLeft: '2.5em',
					paddingRight: '0.5em',
					flex: 1,
					minWidth: 0,
				}}
			>
				<TimePeriodIndicator activity={props.activity} />
				<div style={{fontSize: '0.6em', marginTop: '0.5em'}}>{props.activity.description}</div>
				{!!props.activity.activities && (
					<ActivityList
						activities={props.activity.activities}
						style={{fontSize: '0.7em', marginTop: '0.5em'}}
						hLevel={Math.min(6, props.hLevel + 1) as any}
					/>
				)}
				{!!props.activity.highlights && <ActivityDetailsButton activity={props.activity}></ActivityDetailsButton>}
			</div>
		</div>
	);
}

export default ActivityItem;
