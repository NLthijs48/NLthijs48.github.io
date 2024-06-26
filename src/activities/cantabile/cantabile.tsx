import {JobInformation} from '../ActivityInformation';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import members from './members.png';
import contact from './contact.png';
import logo from './logo.png';
import React from 'react';

const cantabile: JobInformation = {
	activityType: ActivityType.Job,
	slug: 'cantabile',
	name: 'Cantabilé',
	oneliner: 'Website for a female choir, worked together with designer Stef Heerink.',
	description: (
		<div>
			<img src={logo} alt="Cantabile logo: simple wordmark with handwritten font" style={{height: 80}} />
			<p>
				Simple website using the Joomla CMS with a custom template styled for the choir. It contained some static pages, but also a
				calendar with events, book for guests to write in and a photos section.
			</p>
		</div>
	),
	from: 'May 2012',
	till: 'June 2012',
	Icon: MusicNoteIcon,
	// Website got replaced by another one
	highlights: [
		{type: HighlightType.Image, image: members, title: 'Members page', caption: 'Shows a list of the members in the choir'},
		{type: HighlightType.Image, image: contact, title: 'Contact page'},
	],
};

export default cantabile;
