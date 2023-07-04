import React, {CSSProperties} from 'react';
import ActivityInformation from '../activities/ActivityInformation';
import TimePeriodIndicator from './TimePeriodIndicator';
import ActivityList from '../activityList/ActivityList';
import ActivityDetailsButton from './ActivityDetailsButton';
import ActivityTitle from './ActivityTitle';
import ButtonBase from '@mui/material/ButtonBase';
import Tooltip from '@mui/material/Tooltip';
import {useActivitySelect} from './ActivitySelect';
import ActivityDescription from './ActivityDescription';

interface ActivityItemProps {
	activity: ActivityInformation;
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
	style?: CSSProperties;
	/** Render a list of child activities, defaults to false */
	renderChildActivities?: boolean;
}

function ActivityItem(props: ActivityItemProps) {
	const {setActivity, activity: activeActivity} = useActivitySelect();

	let title = <ActivityTitle activity={props.activity} hLevel={props.hLevel} />;
	if (props.activity !== activeActivity) {
		title = (
			<Tooltip title="View details">
				<ButtonBase
					onClick={() => setActivity(props.activity)}
					style={{
						textDecoration: 'underline',
						width: '100%',
						display: 'block',
						fontSize: 'inherit',
						borderRadius: '1em',
					}}
				>
					{title}
				</ButtonBase>
			</Tooltip>
		);
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column', ...props.style}}>
			{title}

			<div
				style={{
					fontSize: 'inherit',
					paddingTop: 0,
					paddingLeft: '2.5em',
					paddingRight: '0.5em',
					flex: 1,
					minWidth: 0,
				}}
			>
				<TimePeriodIndicator activity={props.activity} style={{marginBottom: '0.5em'}} />
				<ActivityDescription activity={props.activity} style={{fontSize: '0.6em'}} />
				{!!props.renderChildActivities && !!props.activity.activities && (
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
