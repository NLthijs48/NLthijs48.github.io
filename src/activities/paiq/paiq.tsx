import {JobInformation} from '../ActivityInformation';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import frontPage from './frontpage.jpg';
import mainScreen from './mainscreen.jpg';
import speeddate from './speeddate.jpg';
import questions from './questions.jpg';
import photosquares from './photosquares.jpg';
import takequiz from './takequiz.jpg';
import matchInfo from './matchInfo.jpg';
import logo from './logo.png';
import React from 'react';

const paiq: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Paiq',
	slug: 'paiq',
	oneliner: 'Dating platform that was big on connecting people through technology, instead of awful marketing.',
	description: (
		<div>
			<div>
				<img src={logo} alt="Paiq logo: letters with a couple of hearts above it" style={{height: 100}} />
			</div>
			I helped with a new font-end using a reactive framework and an updated online SpeedDate system. It consists of a website,
			Android app and iOS app.
		</div>
	),
	from: 'August 2016',
	till: 'January 2017',
	Icon: FavoriteIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://paiq.nl',
			title: 'Paiq website',
			caption: 'Online version of the dating platform',
		},
		{
			type: HighlightType.Link,
			href: 'https://play.google.com/store/apps/details?id=com.paiq.android&hl=en',
			title: 'Android app',
		},
		{
			type: HighlightType.Link,
			href: 'https://apps.apple.com/nl/app/paiq/id672460638',
			title: 'iOS app',
		},
		{
			type: HighlightType.Image,
			image: frontPage,
			title: 'Frontpage (at that time)',
			caption: 'The design was updated during my time at Paiq to be more modern.',
		},
		{
			type: HighlightType.Image,
			image: mainScreen,
			title: 'Main screen of your account',
			caption: 'Options to connect with new people are on the left, and a contact list is shown on the right.',
		},
		{
			type: HighlightType.Image,
			image: speeddate,
			title: 'Speeddate: connect with others live',
			caption:
				'Quick chat with others, while photos are revealed step-by-step. Decide on continuing a few times before becoming a more permanent contact of each other.',
		},
		{
			type: HighlightType.Image,
			image: questions,
			title: 'Questions used for receiving automatic matches',
			caption:
				'A set of common traits to answer about yourself, and about a potential partner. Also offers options to give more or less weight to certain topics.',
		},
		{
			type: HighlightType.Image,
			image: photosquares,
			title: 'Photo tournament of 16 possible matches',
			caption:
				'Tournament of 16 possible matches for you, rate them 1-2-3-4 each time, and end up with a final top-4 list. After the tournament you can decide to contact one of the finalists.',
		},
		{
			type: HighlightType.Image,
			image: takequiz,
			title: 'Quiz back and forth',
			caption:
				'Take quizzes from possible matches, first answer 3 multiple choice questions, if they are correct you can continue with 3 open questions of which the answers will go to the other person.',
		},
		{
			type: HighlightType.Image,
			image: matchInfo,
			title: 'Match information',
			caption: 'Popup shown for new matches, after more chatting the photos unlock.',
		},
	],
};

export default paiq;
