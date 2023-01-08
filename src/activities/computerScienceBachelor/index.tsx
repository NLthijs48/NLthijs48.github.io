import {EducationInformation} from '../ActivityInformation';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react';
import ActivityType from '../ActivityType';

const computerScienceMaster: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Computer Science Bachelor',
	tagline: <div>Bachelor education at the University of Twente</div>,
	from: 'September 2012', // Started 1st of September
	till: 'September 2015', // Got the diploma on the 11th
	Icon: SchoolIcon,
	website: 'https://www.utwente.nl/en/education/bachelor/programmes/technical-computer-science/',
};

export default computerScienceMaster;
