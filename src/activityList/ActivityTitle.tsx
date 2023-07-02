import ActivityInformation from '../activities/ActivityInformation';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import {activityTypeColors, activityTypeDescriptions} from '../activities/ActivityType';
import ActivityTitleText from './ActivityTitleText';
import React from 'react';

type ActivityTitleProps = {
	activity: ActivityInformation;
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
};

function ActivityTitle(props: ActivityTitleProps) {
	const iconColor = activityTypeColors[props.activity.activityType];
	return (
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
						flexShrink: 0,
					}}
				>
					<props.activity.Icon style={{fontSize: '1.3em'}} />
				</div>
			</Tooltip>

			<ActivityTitleText activity={props.activity} hLevel={props.hLevel} />
		</Paper>
	);
}

export default ActivityTitle;
