import React from 'react';
import ActivityInformation from '../../activities/ActivityInformation';
import Button from '@mui/material/Button';

interface ActivityWebsiteProps {
	activity: ActivityInformation;
	style?: React.CSSProperties;
}

function ActivityWebsite(props: ActivityWebsiteProps) {
	if (!props.activity.website) {
		return null;
	}

	return (
		<div style={props.style}>
			<Button
				variant="outlined"
				size="large"
				href={props.activity.website}
				target="_blank"
				rel="noopener noreferrer"
				style={{backgroundColor: 'white'}}
			>
				Website: {props.activity.website}
			</Button>
		</div>
	);
}

export default ActivityWebsite;
