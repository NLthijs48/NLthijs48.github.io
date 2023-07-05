import ActivityInformation from '../activities/ActivityInformation';
import React from 'react';

interface ActivityTitleProps {
	activity: ActivityInformation;
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

function ActivityTitleText(props: ActivityTitleProps) {
	// Use the h component suitable for the nesting level
	// - TypeScript does not get this logic
	const HeaderComponent: any = `h${props.hLevel}`;

	return (
		<HeaderComponent
			style={{
				fontSize: '1em',
				margin: 0,
				padding: '0.4em 0.5em 0.4em 0.5em',
				textAlign: 'left',
			}}
		>
			{props.activity.name}
		</HeaderComponent>
	);
}

export default ActivityTitleText;
