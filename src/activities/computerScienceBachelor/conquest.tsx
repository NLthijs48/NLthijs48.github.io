import {EducationInformation} from '../ActivityInformation';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react';
import ActivityType from '../ActivityType';

const commitLog: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Happening: Conquest',
	description: (
		<div>
			Happening game in which you capture beacons by going to the location in real life. Made for a half year assignment at the
			university in combination with Happening and 5 other students.
		</div>
	),
	from: 'February 2015',
	till: 'July 2015', // End of the project, I did some more updates later though
	Icon: PlaceIcon,
	// Original repository: https://github.com/VincentSmit/cappening
	// - after I started working at Happening I updated it further in my own repo
	website: 'https://github.com/NLthijs48/cappening',
};

export default commitLog;
