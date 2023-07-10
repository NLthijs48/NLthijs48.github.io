import React, {CSSProperties} from 'react';
import ActivityInformation from '../activities/ActivityInformation';
import TimePeriodIndicator from './TimePeriodIndicator';
import ActivityList from '../activityList/ActivityList';
import ActivityTitle from './ActivityTitle';
import ButtonBase from '@mui/material/ButtonBase';
import {useActivitySelect} from './ActivitySelect';
import ActivityOneliner from './ActivityOneliner';
import {styled} from '@mui/material';
import ActivityHighlightsPreview from './ActivityHighlightsPreview';

interface ActivityItemProps {
	activity: ActivityInformation;
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
	style?: CSSProperties;
	className?: string;
	/** Render a list of child activities, defaults to false */
	renderChildActivities?: boolean;
	/** Show the oneliner, default false */
	showOneliner?: boolean;
}

function ActivityItem(props: ActivityItemProps) {
	const {setActivity, activity: activeActivity} = useActivitySelect();

	const isOnActivityPage = props.activity === activeActivity;

	const showOneliner = props.showOneliner ?? true;
	let content = (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<ActivityTitle
				activity={props.activity}
				hLevel={props.hLevel}
				style={isOnActivityPage ? {} : {textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.4)'}}
			/>

			<div
				style={{
					paddingLeft: '2.5em',
					paddingRight: '0.5em',
					flex: 1,
					minWidth: 0,
				}}
			>
				<TimePeriodIndicator activity={props.activity} style={{marginBottom: '0.5em'}} />
				{showOneliner && <ActivityOneliner activity={props.activity} style={{fontSize: '0.6em', marginBottom: '0.5em'}} />}
				{!isOnActivityPage && (
					<ActivityHighlightsPreview activity={props.activity} style={{marginTop: '0.2em', marginBottom: '0.5em'}} />
				)}
			</div>
		</div>
	);

	// Add click action
	if (!isOnActivityPage) {
		content = (
			<ButtonBase
				onClick={() => setActivity(props.activity)}
				style={{
					width: '100%',
					display: 'block',
					fontSize: 'inherit',
					borderRadius: '1em',
					textAlign: 'left',
				}}
			>
				{content}
			</ButtonBase>
		);
	}

	return (
		<div style={{borderRadius: '1em', ...props.style}} className={isOnActivityPage ? undefined : props.className}>
			{content}

			{!!props.renderChildActivities && !!props.activity.activities && (
				<div style={{paddingLeft: '2.5em'}}>
					<ActivityList
						activities={props.activity.activities}
						style={{fontSize: '0.7em', marginTop: '0.5em'}}
						hLevel={Math.min(6, props.hLevel + 1) as any}
					/>
				</div>
			)}
		</div>
	);
}

// Hover styling
const ActivityItemHover = styled(ActivityItem)<ActivityItemProps>(() => ({
	'& .MuiButtonBase-root': {
		// Always needs to be active to work
		transition: 'background-color 150ms ease-in-out',
		'&:hover': {
			// Slight dark color for hover
			backgroundColor: 'rgba(0, 0, 0, 0.08)',
		},
	},
}));

export default ActivityItemHover;
