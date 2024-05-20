import {JobInformation} from '../ActivityInformation';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import logo from './launch/logo.png';
import React from 'react';

const launch: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Launch to the public',
	slug: 'crispLaunch',
	oneliner: 'An eventful half year in which the initial team was formed and went from a slidedeck to the first delivery',
	description: (
		<div>
			<img
				src={logo}
				alt="Historic Crisp logo, wordmark in white with a seaweed (blue/green) background, uses a red pepper icon instead of 'i'"
				style={{height: 120}}
			/>
			<p>
				Setting up the shopping app using react-native, setup of Kitchen for management of users/baskets/orders/products/etcetera,
				UI and UX testing. A brand guide and such was made as well, giving Crisp the look it mostly still has to this day. First
				deliveries to customer on 5 September 2018 (limited to the Randstad area), expanded to full delivery in The Netherlands on
				30 October.
			</p>
		</div>
	),
	from: 'April 2018',
	till: 'September 2018', // 5 September first deliveries to customers
	Icon: RocketLaunchIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://www.culy.nl/restaurants/boodschappen-thuis-eten/crisp-online-verssupermarkt/',
			title: 'Launch coverage by Curly (in Dutch)',
		},
	],
};

export default launch;
