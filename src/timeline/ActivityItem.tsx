import Paper from '@mui/material/Paper';
import React from 'react';
import ActivityInformation from '../activities/ActivityInformation';
import {PlayArrow, SportsScore} from '@mui/icons-material';

interface ActivityItemProps {
	activity: ActivityInformation;
	/** Indicate this activity is the last one, hiding the connector */
	last?: boolean;
}
function ActivityItem(props: ActivityItemProps) {
	// Different colors for hobby/job/study?
	return (
		<div style={{marginBottom: '0.4em', display: 'flex'}}>
			<div style={{zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<div
					style={{
						width: '2em',
						height: '2em',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#ec623d', // Orange
						marginTop: 0,
						marginBottom: '0.4em',
						borderRadius: '50%',
						color: 'white',
					}}
				>
					<props.activity.Icon style={{fontSize: '1.4em'}} />
				</div>
				{!props.last && <div style={{width: '0.2em', backgroundColor: '#a9a9a9', flex: 1}} />}
			</div>

			<div
				style={{
					fontSize: 'inherit',
					marginBottom: '0.5em',
					paddingTop: 0,
					paddingBottom: '0.5em',
					paddingLeft: '0.5em',
					paddingRight: '0.5em',
					flex: 1,
					minWidth: 0,
				}}
			>
				<Paper
					elevation={3}
					style={{
						backgroundColor: 'white',
						padding: '0em 0.5em 0em 2.5em',
						height: '2em',
						borderRadius: '1em',
						marginLeft: '-2.5em',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<h3
						style={{
							fontSize: '1.1em',
							margin: 0,
							padding: 0,
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
						fontSize: '0.5em',
						opacity: 0.8,
						height: '2em',
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
				<div style={{fontSize: '0.6em', marginTop: '0.5em'}}>{props.activity.tagline}</div>
			</div>
		</div>
	);
}

export default ActivityItem;