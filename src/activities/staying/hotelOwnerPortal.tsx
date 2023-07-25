import {JobInformation} from '../ActivityInformation';
import Laptop from '@mui/icons-material/Laptop';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

import portalBookings from './hotelOwnerPortal/bookings.jpg';
import portalContent from './hotelOwnerPortal/content.jpg';
import portalChat from './hotelOwnerPortal/chat.jpg';

const hotelOwnerPortal: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Hotel owner portal',
	slug: 'stayingHotelOwnerPortal',
	oneliner:
		'Portal for the hotel owner to create and sent invites to guests, manage content shown in the app, and chat with their guests.',
	description: <div>Created with React, features a live-chat and content management including a live app-preview.</div>,
	from: 'February 2017',
	till: 'March 2018',
	Icon: Laptop,
	highlights: [
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
	],
};

export default hotelOwnerPortal;
