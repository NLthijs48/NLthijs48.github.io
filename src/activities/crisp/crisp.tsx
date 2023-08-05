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
import HighlightType from '../HighlightType';
import logo from './logo.png';

const crisp: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Crisp',
	slug: 'crisp',
	oneliner: 'Full stack developer and tech-lead of the tech-warehouse team, supercharging warehouse, hub and last-mile tools.',
	description: (
		<div>
			<div>
				<img src={logo} alt="Crisp logo: wordmark in white on top of a dark blue/green background" style={{height: 100}} />
			</div>
			Crisp is revamping the food logistics chain from{' '}
			<AgricultureIcon style={{opacity: 0.6, fontSize: '130%', marginBottom: '-0.2em', marginRight: '0.1em'}} />
			supplier to <PersonIcon style={{opacity: 0.6, fontSize: '130%', marginBottom: '-0.2em'}} />
			customer.
			<div style={{marginTop: '0.5em'}}>
				I worked on the consumer grocery ordering app (initial setup and recipe feature in particular), the internal portal for
				managing all data, and a ton of warehouse and logistics tools (product availability calculation, automatic purchasing, label
				printing, multiple picking system iterations).
			</div>
			<div style={{marginTop: '0.5em'}}>
				Currently leading the tech-warehouse team consisting of 5 developers and a product owner. Together we are scaling up the
				operations from receiving products at warehouses, logistic tools to pick orders, tools to transfer those orders to delivery
				vehicles and hubs.
			</div>
		</div>
	),
	from: 'April 2018',
	Icon: BakeryDiningIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://crisp.nl',
			title: 'Crisp homepage',
		},
		{
			type: HighlightType.Link,
			href: 'https://www.linkedin.com/company/crispnl/',
			title: 'Crisp LinkedIn',
		},
	],
	activities: [tiger, multiWarehouse, international, multiOrderPick, recipes, pickIntoPackaging, launch],
};

export default crisp;
