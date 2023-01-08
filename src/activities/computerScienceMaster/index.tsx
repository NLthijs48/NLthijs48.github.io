import {EducationInformation} from '../ActivityInformation';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react';
import ActivityType from '../ActivityType';

const computerScienceMaster: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Computer Science Master',
	tagline: <div>Master education at the University of Twente</div>,
	from: 'September 2015', // Started on the 1st
	till: 'March 2018', // Presentation and diploma on the 7th
	Icon: SchoolIcon,
	website: 'https://www.utwente.nl/en/education/master/programmes/computer-science/',
};

export default computerScienceMaster;
