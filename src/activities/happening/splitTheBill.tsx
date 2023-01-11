import {JobInformation} from '../ActivityInformation';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react';
import ActivityType from '../ActivityType';

const splitTheBill: JobInformation = {
	activityType: ActivityType.Job,
	name: 'SplitTheBill',
	description: (
		<div>
			App to keep track of who owes money to whom. I upgraded it from a simple initial version to a fully fledged app with transaction
			management, notifications, currency selection and automated settling.
		</div>
	),
	from: 'July 2015', // First project I worked on at Happening
	Icon: AttachMoneyIcon,
	website: 'https://github.com/Happening/SplitTheBill',
};

export default splitTheBill;
