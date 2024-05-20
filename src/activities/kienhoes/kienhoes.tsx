import {JobInformation} from '../ActivityInformation';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import home from './home.jpg';
import contact from './contact.jpg';
import logo from './logo.png';
import React from 'react';

const kienhoes: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Kienhoes',
	slug: 'kienhoes',
	oneliner: 'Website for farm apartments that are for rental',
	description: (
		<div>
			<img src={logo} alt="Kienhoes logo: wordmark with a farm house on a hill next to it" style={{height: 200}} />
			<p>Built using the Joomla CMS and a custom template, worked together with designer Stef Heerink.</p>
		</div>
	),
	from: 'July 2012',
	till: 'October 2012',
	Icon: NightShelterIcon,
	// Website got replaced by another one
	highlights: [
		{
			type: HighlightType.Image,
			image: home,
			title: 'Home page',
			caption: 'Styled home page fitting the brand of the apartments for rent',
		},
		{
			type: HighlightType.Image,
			image: contact,
			title: 'Contact page',
			caption: 'Simple contact page with all essentials',
		},
	],
};

export default kienhoes;
