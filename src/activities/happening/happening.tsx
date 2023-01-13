import {JobInformation} from '../ActivityInformation';
import ChatIcon from '@mui/icons-material/Chat';
import React from 'react';
import ActivityType from '../ActivityType';
import battleWords from './battleWords';
import splitTheBill from './splitTheBill';
import whereabouts from './whereabouts';

const happening: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Happening',
	description: (
		<div>
			I was a developer at Happening, helping to improve the core of this group chat app, and writing games and tools that can be used
			in those groups.
		</div>
	),
	from: 'July 2015',
	till: 'Augustus 2016',
	Icon: ChatIcon,
	website: 'https://happening.im',
	activities: [battleWords, whereabouts, splitTheBill],
};

export default happening;
