import {JobInformation} from '../ActivityInformation';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import React from 'react';
import ActivityType from '../ActivityType';
import battleWords from './battleWords';
import splitTheBill from './splitTheBill';
import whereabouts from './whereabouts';
import commitLog from './commitLog';
import HighlightType from '../HighlightType';

const happening: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Happening',
	slug: 'happening',
	oneliner: (
		<div>
			I was a developer at Happening, helping to improve the core of this group chat app, and writing games and tools that can be used
			in those groups.
		</div>
	),
	from: 'July 2015',
	till: 'Augustus 2016',
	Icon: QuestionAnswerIcon,
	highlights: [{type: HighlightType.Link, href: 'https://happening.im', title: 'Happening website'}],
	activities: [battleWords, commitLog, whereabouts, splitTheBill],
};

export default happening;
