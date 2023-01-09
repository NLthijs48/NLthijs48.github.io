import Paper from '@mui/material/Paper';
import React from 'react';
import ActivityInformation from '../activities/ActivityInformation';
import TimePeriodIndicator from './TimePeriodIndicator';
import {activityTypeColors, activityTypeDescriptions} from '../activities/ActivityType';
import Tooltip from '@mui/material/Tooltip';

interface ActivityItemProps {
	activity: ActivityInformation;
}

function ActivityItem(props: ActivityItemProps) {
	const iconColor = activityTypeColors[props.activity.activityType];

	return (
		<div style={{marginBottom: '0.4em', display: 'flex', flexDirection: 'column'}}>
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
						<props.activity.Icon style={{fontSize: '1.4em'}} />
					</div>
				</Tooltip>

				<h3
					style={{
						fontSize: '1em',
						margin: 0,
						padding: '0em 0.5em 0em 0.5em',
						whiteSpace: 'nowrap',
						textOverflow: 'ellipsis',
						overflow: 'hidden',
					}}
				>
					{props.activity.name}
				</h3>
			</Paper>

			<div
				style={{
					fontSize: 'inherit',
					marginBottom: '0.5em',
					paddingTop: 0,
					paddingBottom: '0.5em',
					paddingLeft: '2.5em',
					paddingRight: '0.5em',
					flex: 1,
					minWidth: 0,
				}}
			>
				<TimePeriodIndicator activity={props.activity} />
				<div style={{fontSize: '0.6em', marginTop: '0.5em'}}>{props.activity.description}</div>
			</div>
		</div>
	);
}

export default ActivityItem;
