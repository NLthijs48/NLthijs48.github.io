import {EducationInformation} from '../ActivityInformation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

const dataScienceTimeTabling: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Data Science: timetable analysis',
	slug: 'dataScienceTimeTabling',
	oneliner: (
		<div>
			Analyzed timetable data of the University of Twente for the Data Science course together with another student. Used
			XQuery/XML/SQL as per instructions of the course.
		</div>
	),
	from: 'January 2016',
	till: 'February 2016',
	Icon: CalendarMonthIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLthijs48/UTTimetabling',
			title: 'GitHub repository',
			caption: 'Contains the code for analyzing the data, the visualization website and the paper (LaTeX)',
		},
		// TODO: compile the LaTeX paper and link that here
		// (see first try on Overleaf, layout is broken though)
		// TODO: link to the results page
	],
};

export default dataScienceTimeTabling;
