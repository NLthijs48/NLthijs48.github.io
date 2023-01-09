import ActivityInformation from '../activities/ActivityInformation';
import {PlayArrow, SportsScore} from '@mui/icons-material';
import React from 'react';

function TimePeriodIndicator(props: {activity: ActivityInformation}) {
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
			<PlayArrow style={{opacity: 0.8, marginLeft: '-0.2em', fontSize: 'inherit'}} /> {props.activity.from}
			{!!props.activity.till && (
				<React.Fragment>
					<SportsScore style={{marginLeft: '0.5em', opacity: 0.8, fontSize: 'inherit'}} /> {props.activity.till}
				</React.Fragment>
			)}
		</div>
	);
}

export default TimePeriodIndicator;
