import {EducationInformation} from '../ActivityInformation';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react';
import ActivityType from '../ActivityType';
import masterThesis from './masterThesis';
import dataScienceTimeTabling from './dataScienceTimeTabling';
import dataScienceGameTweets from './dataScienceGameTweets';
import bachelorThesisFollowUp from './bachelorThesisFollowUp';
import thales from './thales';

const computerScienceMaster: EducationInformation = {
	activityType: ActivityType.Education,
	slug: 'computerScienceMaster',
	name: 'Computer Science Master',
	oneliner: <div>Master education at the University of Twente.</div>,
	from: 'September 2015', // Started on the 1st
	till: 'March 2018', // Presentation and diploma on the 7th
	Icon: SchoolIcon,
	website: 'https://www.utwente.nl/en/education/master/programmes/computer-science/',
	activities: [masterThesis, bachelorThesisFollowUp, thales, dataScienceTimeTabling, dataScienceGameTweets],
};

export default computerScienceMaster;
