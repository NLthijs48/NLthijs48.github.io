import ActivityInformation from '../activities/ActivityInformation';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import {activityTypeColors, activityTypeDescriptions} from '../activities/ActivityType';
import ActivityTitleText from './ActivityTitleText';
import React from 'react';

interface ActivityTitleProps {
	activity: ActivityInformation;
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
	style?: React.CSSProperties;
}

function ActivityTitle(props: ActivityTitleProps) {
	const iconColor = activityTypeColors[props.activity.activityType];
	return (
		<Paper
			elevation={3}
			style={{
				backgroundColor: 'white',
				padding: 0,
				minHeight: '2em', // One line of text in ActivityTitleText
				borderRadius: '1em',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'stretch',
				// Prevent big line height caused by hX, which stretches the height of this container
				lineHeight: 'normal',
				...props.style,
			}}
		>
			<Tooltip title={activityTypeDescriptions[props.activity.activityType]}>
				<div
					style={{
						width: '2em',
						minHeight: '2em',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: iconColor,
						marginTop: 0,
						borderRadius: '1em',
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
