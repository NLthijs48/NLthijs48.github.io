import {JobInformation} from '../ActivityInformation';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

import appHome from './appHome.png';
import appHotel from './appHotel.png';
import appChat from './appChat.png';

const stayingGuestsApp: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Guests app',
	slug: 'stayingGuestsApp',
	oneliner: 'App for guests to view their stay, information provided by the hotel and chat with the front desk.',
	description: <div>Created with react-native, published in the Google Play Store and iOS App Store</div>,
	from: 'February 2017',
	till: 'March 2018',
	Icon: PhoneAndroid,
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

export default stayingGuestsApp;
