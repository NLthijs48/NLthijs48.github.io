import ActivityInformation from '../activities/ActivityInformation';
import {useActivitySelect} from './ActivitySelect';
import Button from '@mui/material/Button';
import React from 'react';

interface ActivityDetailsButtonProps {
	activity: ActivityInformation;
}

function ActivityDetailsButton(props: ActivityDetailsButtonProps) {
	// TODO: redesign
	const {setActivity} = useActivitySelect();
	return (
		<Button variant="outlined" onClick={() => setActivity(props.activity)} style={{marginTop: '0.5em', backgroundColor: 'white'}}>
			View details
		</Button>
	);
}

export default ActivityDetailsButton;
