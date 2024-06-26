import {EducationInformation} from '../ActivityInformation';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

const masterThesis: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Master thesis: Analytics funnels',
	slug: 'computerScienceMasterThesis',
	oneliner: <div>Analyzing user flows using funnels to figure out which paths users take.</div>,
	from: 'February 2017',
	till: 'March 2018',
	Icon: FilterAltIcon,
	highlights: [
		{
			type: HighlightType.Link,
			// Permanent link to my thesis on the University of Twente website
			href: 'https://purl.utwente.nl/essays/74681',
			title: 'Publication on the University of Twente website',
		},
		{
			type: HighlightType.Link,
			href: '/files/masterThesis.pdf',
			title: 'Paper (pdf)',
		},
	],
};

export default masterThesis;
