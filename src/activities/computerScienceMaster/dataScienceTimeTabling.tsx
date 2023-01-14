import {EducationInformation} from '../ActivityInformation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react';
import ActivityType from '../ActivityType';

const dataScienceTimeTabling: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Data Science: timetable analysis',
	description: (
		<div>
			Analyzed timetable data of the University of Twente for the Data Science course together with another student. Used
			XQuery/XML/SQL as per instructions of the course.
		</div>
	),
	from: 'January 2016',
	till: 'February 2016',
	Icon: CalendarMonthIcon,
	// TODO: make available a link to the paper
	// TODO: link to the results page
	website: 'https://github.com/NLthijs48/UTTimetabling',
};

export default dataScienceTimeTabling;
