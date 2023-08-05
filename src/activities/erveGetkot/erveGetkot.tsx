import {JobInformation} from '../ActivityInformation';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import home from './home.png';
import pictures from './pictures.png';
import logo from './logo.png';
import React from 'react';

const websiteErveGetkot: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Erve Getkot',
	slug: 'erveGetkot',
	oneliner: 'Website for a place that rents out rural holiday apartments.',
	description: (
		<div>
			This is a project done for Erve Getkot, which has a couple of apartments in the middle of nature. The website for Erve Getkot
			shows the possibilities that they offer and showcases the apartments. The website is responsive, suitable for mobile phones and
			tablets. The design has been made by Stef Heerink (HeerINC), and build by me using Joomla with a custom template.
			<div>
				<img
					src={logo}
					alt="Erve Getkot logo: free flowing written wordmark logo, with a wavy line underneath"
					style={{height: 100, marginTop: '0.5em'}}
				/>
			</div>
		</div>
	),
	from: 'October 2013',
	till: 'June 2014', // Not sure when exactly it was finished
	Icon: NightShelterIcon,
	highlights: [
		{type: HighlightType.Link, href: 'https://www.ervegetkot.nl/', title: 'Erve Getkot Website'},
		{
			type: HighlightType.Image,
			image: home,
			title: 'Home page',
			caption: 'Shows the outdoor feel of the location and provides contact information.',
		},
		{
			type: HighlightType.Image,
			image: pictures,
			title: 'Pictures page',
			caption: 'Shows pictures of the available apartments, after selecting one a viewer of the pictures shows up.',
		},
	],
};

export default websiteErveGetkot;
