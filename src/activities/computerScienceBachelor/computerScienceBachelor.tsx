import {EducationInformation} from '../ActivityInformation';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react';
import ActivityType from '../ActivityType';
import conquest from './conquest';
import bachelorThesis from './bachelorThesis';
import minor from './minor';

const computerScienceBachelor: EducationInformation = {
	activityType: ActivityType.Education,
	slug: 'computerScienceBachelor',
	name: 'Computer Science Bachelor',
	description: <div>Bachelor education at the University of Twente.</div>,
	from: 'September 2012', // Started 1st of September
	till: 'September 2015', // Got the diploma on the 11th
	Icon: SchoolIcon,
	website: 'https://www.utwente.nl/en/education/bachelor/programmes/technical-computer-science/',
	activities: [bachelorThesis, conquest, minor],
};

export default computerScienceBachelor;
