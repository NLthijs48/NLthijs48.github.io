import ActivityInformation from '../activities/ActivityInformation';
import React from 'react';

interface ActivityTitleProps {
	activity: ActivityInformation;
	hLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

function ActivityTitle(props: ActivityTitleProps) {
	// Use the h component suitable for the nesting level
	// - TypeScript does not get this logic
	const HeaderComponent: any = `h${props.hLevel}`;

	const header = (
		<HeaderComponent
			style={{
				fontSize: '1em',
				margin: 0,
				padding: '0em 0.5em 0em 0.5em',
				whiteSpace: 'nowrap',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				flex: 1,
			}}
		>
			{props.activity.name}
		</HeaderComponent>
	);
	// Add link to the website
	if (props.activity.website) {
		return (
			<a href={props.activity.website} target="_blank" rel="noopener noreferrer" style={{color: 'inherit'}}>
				{header}
			</a>
		);
	}

	return header;
}

export default ActivityTitle;
