import Paper from '@mui/material/Paper';
import React, {CSSProperties} from 'react';
import ActivityInformation from '../activities/ActivityInformation';
import TimePeriodIndicator from './TimePeriodIndicator';
import {activityTypeColors, activityTypeDescriptions} from '../activities/ActivityType';
import Tooltip from '@mui/material/Tooltip';
import ActivityList from './ActivityList';
import ActivityTitle from './ActivityTitle';

interface ActivityItemProps {
	activity: ActivityInformation;
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
	style?: CSSProperties;
}

function ActivityItem(props: ActivityItemProps) {
	const iconColor = activityTypeColors[props.activity.activityType];
	return (
		<div style={{marginBottom: '0.5em', display: 'flex', flexDirection: 'column', ...props.style}}>
			<Paper
				elevation={3}
				style={{
					backgroundColor: 'white',
					padding: 0,
					height: '2em',
					borderRadius: '1em',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<Tooltip title={activityTypeDescriptions[props.activity.activityType]}>
					<div
						style={{
							width: '2em',
							height: '2em',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: iconColor,
							marginTop: 0,
							borderRadius: '50%',
							color: 'white',
						}}
					>
						<props.activity.Icon style={{fontSize: '1.3em'}} />
					</div>
				</Tooltip>

				<ActivityTitle activity={props.activity} hLevel={props.hLevel} />
			</Paper>

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
			</div>
		</div>
	);
}

export default ActivityItem;
