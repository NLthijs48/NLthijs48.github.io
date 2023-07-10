import ActivityInformation from '../activities/ActivityInformation';
import React from 'react';

interface ActivityOnelinerProps {
	activity: ActivityInformation;
	style?: React.CSSProperties;
}

function ActivityOneliner(props: ActivityOnelinerProps) {
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
			{props.activity.oneliner}
		</div>
	);
}

export default ActivityOneliner;
