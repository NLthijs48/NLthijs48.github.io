import {JobInformation} from '../ActivityInformation';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

import appHome from './appHome.png';
import appHotel from './appHotel.png';
import appChat from './appChat.png';
import portalChat from './portalChat.jpg';
import portalContent from './portalContent.jpg';
import portalBookings from './portalBookings.jpg';
import masterThesis from '../computerScienceMaster/masterThesis';

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
	activities: [masterThesis],
	// TODO: break up into child activity for the app and portal?
	highlights: [
		// App for guests
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

		// Portal for hotel owners
		{
			type: HighlightType.Image,
			title: 'Hotel owner portal bookings',
			image: portalBookings,
			caption:
				'Portal to create and manage guest stays, with easy to share links to send to guests. Shows the progress for each invite link, to let the hotel know if the app has been downloaded.',
		},
		{
			type: HighlightType.Image,
			title: 'Hotel owner portal content',
			image: portalContent,
			caption:
				'Portal page to manage the content visible for guests in the app. Shows a live preview of the app to make it easy to see the result. Supports multi-language content.',
		},
		{
			type: HighlightType.Image,
			title: 'Hotel owner portal chat',
			image: portalChat,
			caption:
				'Web page to easily answer chat messages from customers. There is also an app for hotel owners to reply while on-the-go.',
		},

		// TODO: screenshots of the app for hotel owners?
	],
};

export default staying;
