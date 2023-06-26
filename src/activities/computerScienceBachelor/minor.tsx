import {EducationInformation} from '../ActivityInformation';
import FlightIcon from '@mui/icons-material/Flight';
import React from 'react';
import ActivityType from '../ActivityType';

const minor: EducationInformation = {
	activityType: ActivityType.Education,
	slug: 'computerScienceMinor',
	name: 'Minor: aeronautical engineering',
	description: (
		<div>
			Minor in aeronautical engineering for half a year, where I learned about airplane industry, airplane engineering and
			aerodynamics.
		</div>
	),
	from: 'September 2014',
	till: 'January 2015',
	Icon: FlightIcon,
};

export default minor;
