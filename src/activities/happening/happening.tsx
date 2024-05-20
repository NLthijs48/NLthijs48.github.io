import {JobInformation} from '../ActivityInformation';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import React from 'react';
import ActivityType from '../ActivityType';
import battleWords from './battleWords';
import splitTheBill from './splitTheBill';
import whereabouts from './whereabouts';
import commitLog from './commitLog';
import HighlightType from '../HighlightType';
import logo from './logo.png';
import conquest from '../computerScienceBachelor/conquest';

const happening: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Happening',
	slug: 'happening',
	oneliner: 'Supercharged group chat app with tools, games and more',
	description: (
		<div>
			<div>
				<img src={logo} alt="Happening logo: robotic smiley face in white on a blue background" style={{height: 80}} />
			</div>
			<p>
				I was a developer at Happening, helping to improve the core of this group chat app, and writing games and tools that can be
				used in those groups. See the projects below for a couple of the plugins I wrote.
			</p>
		</div>
	),
	from: 'July 2015',
	till: 'Augustus 2016',
	Icon: QuestionAnswerIcon,
	highlights: [{type: HighlightType.Link, href: 'https://happening.im', title: 'Happening website'}],
	activities: [battleWords, commitLog, whereabouts, splitTheBill, conquest],
};

export default happening;
