import {JobInformation} from '../ActivityInformation';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

import appHome from './appHome.png';
import appHotel from './appHotel.png';
import appChat from './appChat.png';

const staying: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Staying',
	slug: 'staying',
	oneliner:
		'Service to let hotel guests communicate with the front desk: before, during and after their stay to have all information they need about the accommodation and surroundings.',
	description: (
		<div>
			The parts that made up the company:
			<ul>
				<li>Web portal for hotels to set up their hotel + chat with guests</li>
				<li>App for guests to view their stay, information provided by the hotel and chat with the front desk</li>
				<li>App for the hotel to chat with their guests</li>
				<li>Website to onboard new customers</li>
			</ul>
			<div style={{marginTop: '0.5em'}}>
				I worked parttime on the hotel portal and react-native apps, while working on my Master thesis in the remaining time at the
				same company.
			</div>
		</div>
	),
	from: 'February 2017',
	till: 'March 2018',
	Icon: RoomServiceIcon,
	highlights: [
		{
			type: HighlightType.Image,
			title: 'Guest app home screen',
			image: appHome,
			caption: 'Home screen of the app for guests, showing the reservation they have at a hotel.',
		},
		{
			type: HighlightType.Image,
			title: 'Guest app hotel overview',
			image: appHotel,
			caption:
				'Hotel page in the app for guests, showing all items the hotel configured. Can be HTML content, pdfs, map views, external links and more.',
		},
		{
			type: HighlightType.Image,
			title: 'Guest app chat',
			image: appChat,
			caption: 'Chat in the app for guests to contact the hotel about their reservation or any other questions about their stay.',
		},
	],
};

export default staying;
