import {JobInformation} from '../ActivityInformation';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import ActivityType from '../ActivityType';

const crisp: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Crisp',
	description: (
		<div>
			Revamping the food logistics chain from{' '}
			<AgricultureIcon style={{opacity: 0.6, fontSize: '130%', marginBottom: '-0.2em', marginRight: '0.1em'}} />
			supplier to <PersonIcon style={{opacity: 0.6, fontSize: '130%', marginBottom: '-0.2em'}} />
			customer.
			<div style={{marginTop: '0.5em'}}>
				I worked on the consumer grocery ordering app (initial setup and recipe feature in particular), the internal portal for
				managing all data, and have built a bit set of warehouse tools (product availability calculation, automatic purchasing,
				label printing, multiple picking system iterations).
			</div>
		</div>
	),
	from: 'April 2018',
	Icon: BakeryDiningIcon,
	website: 'https://crisp.nl',
};

export default crisp;
