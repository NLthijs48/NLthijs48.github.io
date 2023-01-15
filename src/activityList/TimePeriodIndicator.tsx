import ActivityInformation from '../activities/ActivityInformation';
import PlayArrow from '@mui/icons-material/PlayArrow';
import SportsScore from '@mui/icons-material/SportsScore';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import AllInclusive from '@mui/icons-material/AllInclusive';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';

function TimePeriodIndicator(props: {activity: ActivityInformation}) {
	// Only showing 1 date when from and till are the same
	const oneDate = props.activity.from === props.activity.till;
	const FromIcon = oneDate ? CalendarMonth : PlayArrow;
	return (
		<div
			style={{
				fontSize: '0.5em',
				opacity: 0.8,
				marginTop: '0.5em',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Tooltip title={oneDate ? 'Started and finished on' : 'Started on'}>
				<span style={{display: 'flex', alignItems: 'center'}}>
					<FromIcon
						style={{opacity: 0.8, marginLeft: oneDate ? 0 : '-0.2em', marginRight: oneDate ? '0.2em' : 0, fontSize: 'inherit'}}
					/>{' '}
					{props.activity.from}
				</span>
			</Tooltip>

			{!!props.activity.till && !oneDate && (
				<Tooltip title="Finished on">
					<span style={{display: 'flex', alignItems: 'center'}}>
						<SportsScore style={{marginLeft: '1em', opacity: 0.8, fontSize: 'inherit'}} /> {props.activity.till}
					</span>
				</Tooltip>
			)}
			{!props.activity.till && (
				<React.Fragment>
					<AllInclusive style={{marginLeft: '1em', marginRight: '0.2em', opacity: 0.8, fontSize: 'inherit'}} /> Ongoing
				</React.Fragment>
			)}
		</div>
	);
}

export default TimePeriodIndicator;
