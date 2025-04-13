import {HobbyInformation} from '../ActivityInformation';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import home from './home.jpg';
import gameResults from './upcomingGames.jpg';
import logo from './logo.jpg';
import React from 'react';

const kosc: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'KOSC soccer club',
	slug: 'kosc',
	oneliner: 'Website and surrounding systems for a soccer club, as a volunteer as part of the IT committee.',
	from: 'May 2011', // Joined as a volunteer
	till: 'April 2018',
	Icon: SportsSoccerIcon,
	description: (
		<div>
			<img
				src={logo}
				alt="KOSC logo: wordmark with the KOSC letters, where the O is a soccer ball. 1933 is the start date of the club, located in Ootmarsum."
				style={{height: 150}}
			/>
			<p>Built using the Joomla CMS and a custom template, migrated from a custom CMS that was used before.</p>
			<p>
				During the rollout of the new website a lot of content curation has been handed to other teams. This was important to ensure
				everything is kept up-to-date, and to focus the IT committee on improving the setup of the website itself.
			</p>
		</div>
	),
	highlights: [
		{
			type: HighlightType.Image,
			title: 'Home page',
			image: home,
			caption:
				'Home page with access to all teams and important club information. The center is filled with news about the latest events. Sponsors are displayed in carousels that rotate through all fo them. Upcoming activities also have their spot.',
		},
		{
			type: HighlightType.Image,
			title: 'Upcoming games page',
			image: gameResults,
			caption:
				'With development of this site an integration with data providers has been set up, so that all current standings of the teams can be shown. All upcoming games, and the results of previous games are also shown. There are overview pages for each, and individual team pages with all information for them.',
		},
		{
			type: HighlightType.Link,
			href: 'https://kosc.nl',
			title: 'Current website of the club (not made by me)',
			caption:
				'After a good run of improving the online presence of the club, and proving more and more features, the Joomla based site got replaced by a WordPress based one and a more morden new design.',
		},
	],
};

export default kosc;
