import {JobInformation} from '../ActivityInformation';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import ActivityType from '../ActivityType';
import launch from './launch';
import pickIntoPackaging from './pickIntoPackaging';
import recipes from './recipes';
import multiOrderPick from './multiOrderPick';
import multiWarehouse from './multiWarehouse';
import international from './international';
import tiger from './tiger';

const crisp: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Crisp',
	slug: 'crisp',
	oneliner: (
		<div>
			Revamping the food logistics chain from{' '}
			<AgricultureIcon style={{opacity: 0.6, fontSize: '130%', marginBottom: '-0.2em', marginRight: '0.1em'}} />
			supplier to <PersonIcon style={{opacity: 0.6, fontSize: '130%', marginBottom: '-0.2em'}} />
			customer.
			<div style={{marginTop: '0.5em'}}>
				I worked on the consumer grocery ordering app (initial setup and recipe feature in particular), the internal portal for
				managing all data, and a ton of warehouse and logistics tools (product availability calculation, automatic purchasing, label
				printing, multiple picking system iterations).
			</div>
		</div>
	),
	from: 'April 2018',
	Icon: BakeryDiningIcon,
	website: 'https://crisp.nl',
	activities: [tiger, multiWarehouse, international, multiOrderPick, recipes, pickIntoPackaging, launch],
};

export default crisp;
