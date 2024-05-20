import {EducationInformation} from '../ActivityInformation';
import PlaceIcon from '@mui/icons-material/Place';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import setupSettings from './conquest/setupSettings.png';
import setupArea from './conquest/setupArea.png';
import setupBeacons from './conquest/setupBeacons.png';
import gameMain from './conquest/gameMain.png';
import events from './conquest/events.png';
import leaderBoard from './conquest/leaderboard.png';
import capturingProgress from './conquest/capturingProgress.png';
import capturedProgess from './conquest/capturedProgress.png';

const conquest: EducationInformation = {
	activityType: ActivityType.Education,
	slug: 'happeningConquest',
	name: 'Happening: Conquest',
	oneliner: 'Happening game in which you capture beacons by going to the location in real life.',
	description:
		'Made for a half year assignment at the University of Twente in collaboration with Happening and 5 other students. After this project I started working part-time at Happening next to my Master education.',
	from: 'February 2015',
	till: 'July 2015', // End of the project, I did some more updates later though
	Icon: PlaceIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://github.com/VincentSmit/cappening',
			title: 'GitHub repository used during the project',
		},
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLthijs48/cappening',
			title: 'GitHub repository of my fork',
			caption: 'Includes later updates from when I started working at Happening',
		},
		{
			type: HighlightType.Image,
			image: setupSettings,
			title: 'Number of teams and game length',
			caption:
				'The game is played with 2-6 teams, each team has their own color. A game can run for a short time like a few hours (meant for a small game area or event), or run for months for a long-running game.',
		},
		{
			type: HighlightType.Image,
			image: setupArea,
			title: 'Game area setup in which beacons are located',
			caption:
				'Limits the area in which beacons can be found, could be just a city block for a small/short game, or a whole country for a longer running game.',
		},
		{
			type: HighlightType.Image,
			image: setupBeacons,
			title: 'Beacons setup to capture',
			caption:
				'The goal of the game is to capture and remain in control of as many beacons as possible with your team. Beacons are physical locations with a certain range, as setup during when starting the game.',
		},
		{
			type: HighlightType.Image,
			image: gameMain,
			title: 'Main game',
			caption:
				'Start capturing as many beacons as possible with your team by physically going to those places. Here you can see team orange captured this beacon. The map shows how far away you are from the beacon based on your GPS location.',
		},
		{
			type: HighlightType.Image,
			image: events,
			title: 'Events page',
			caption:
				'The Events page has a list of events that happened in the game, which includes beacon captured, ranking switches and the final winner.',
		},
		{
			type: HighlightType.Image,
			image: leaderBoard,
			title: 'Ranking page',
			caption:
				'The Ranking page shows all the teams, and how many points they have collected. It also shows how many points, captures and neutralizes each team member has.',
		},
		{
			type: HighlightType.Image,
			image: capturingProgress,
			title: 'Capturing progress',
			caption:
				'Capturing beacons takes 30 seconds from the point where you enter the area, the progress is shown in a capture bar at the top of the screen. If a beacon is owned by another team, then it first takes 30 seconds to neutralize before it can be captured. If multiple people are at the beacon the strongest team wins!',
		},
		{
			type: HighlightType.Image,
			image: capturedProgess,
			title: 'Capturing complete',
			caption: 'Once a beacon is captured it changes color to your teams color',
		},
	],
};

export default conquest;
