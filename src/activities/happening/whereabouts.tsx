import {JobInformation} from '../ActivityInformation';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react';
import ActivityType from '../ActivityType';

const whereabouts: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Whereabouts',
	slug: 'happeningWhereabouts',
	description: <div>App to see the whereabouts of other members, displays the locations of all users in a Happening group on a map.</div>,
	from: 'August 2015',
	till: 'September 2015',
	Icon: PlaceIcon,
	website: 'https://github.com/Happening/Whereabouts',
};

export default whereabouts;
