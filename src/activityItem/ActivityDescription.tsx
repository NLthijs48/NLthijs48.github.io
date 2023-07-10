import ActivityInformation from '../activities/ActivityInformation';
import React from 'react';

interface ActivityDescriptionProps {
	activity: ActivityInformation;
	style?: React.CSSProperties;
}

function ActivityDescription(props: ActivityDescriptionProps) {
	if (!props.activity.description) {
		return null;
	}

	return (
		<div
			style={{
				// Easy to read
				lineHeight: '140%',
				// Prevent too long line lengths
				maxWidth: '40em',
				...props.style,
			}}
		>
			{props.activity.description}
		</div>
	);
}

export default ActivityDescription;
