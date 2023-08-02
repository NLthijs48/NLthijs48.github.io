import {EducationInformation} from '../ActivityInformation';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

const conquest: EducationInformation = {
	activityType: ActivityType.Education,
	slug: 'happeningConquest',
	name: 'Happening: Conquest',
	oneliner: (
		<div>
			Happening game in which you capture beacons by going to the location in real life. Made for a half year assignment at the
			university in combination with Happening and 5 other students.
		</div>
	),
	from: 'February 2015',
	till: 'July 2015', // End of the project, I did some more updates later though
	Icon: PlaceIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://github.com/VincentSmit/cappening',
			title: 'GitHub repository used during the project',
		},
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLthijs48/cappening',
			title: 'GitHub repository of my fork',
			caption: 'Includes later updates from when I started working at Happening',
		},
	],
};

export default conquest;
