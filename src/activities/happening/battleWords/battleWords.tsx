import {JobInformation} from '../../ActivityInformation';
import ExplicitIcon from '@mui/icons-material/Explicit';
import React from 'react';
import ActivityType from '../../ActivityType';
import theGameImage from './theGame.png';
import creatingWordsImage from './creatingWords.png';
import swappingLettersImage from './swappingLetters.png';
import endOfRoundImage from './endOfRound.png';
import scoreboardImage from './scoreboard.png';
import settingsImage from './settings.png';
import previousRoundsImage from './previousRounds.png';
import HighlightType from '../../HighlightType';

const battleWords: JobInformation = {
	activityType: ActivityType.Job,
	name: 'BattleWords',
	slug: 'happeningBattleWords',
	oneliner: <div>A Scrabble-like game for big groups, battling by making the best words.</div>,
	description: (
		<div>
			Works round-by-round, revealing the moves of each player after a round is complete by showing a fully animated playing board.
			Built using Coffeescript (flavor of JavaScript) in the front-end, in combination with an in-house reactive framework for
			rendering. The backend uses Coffeescript as well, which meant the complete game logic was shared between front-end and backend
			to verify moves and calculate scores.
		</div>
	),

	from: 'February 2016', // This is a guess
	till: 'April 2016', // This is a guess
	Icon: ExplicitIcon, // Looks like a letter tile of the game

	highlights: [
		{
			type: HighlightType.Image,
			image: theGameImage,
			title: 'The game',
			caption:
				'The main screen of the game shows the board where you play on. A square of the board can have a tile on it, either a start tile (green), empty, a letter, a multiplier (the yellow x3 tile, visible by anyone) or a thief (only visible to yourself). The shelf at the bottom shows the letter you have. Your letters can be dragged on the board, with which you can create words.',
		},
		{
			type: HighlightType.Image,
			image: creatingWordsImage,
			title: 'Creating words',
			caption:
				'When you place letters on the board the game immediately checks which words have been formed (in horizontal and vertical direction from your letters). The words you have formed are displayed in the corner at the left top. The green check mark indicates the word is found in the dictionary and is correct, the red cross means it is incorrect. You can only save the word if all formed words are correct, therefore the save button is red in the picture below.',
		},
		{
			type: HighlightType.Image,
			image: swappingLettersImage,
			title: 'Swapping letters',
			caption:
				"For each round you do not play you get a joker. The joker is given to keep player that miss a round in the game, and give them a chance to get back on track. When clicking the button with '1 joker' on it you can swap your tiles for others. If you select only one tile to swap (by tapping it) you can select another tile you want to get back, if you select more then you will receive random tiles back. Each swap costs one joker.",
		},
		{
			type: HighlightType.Image,
			image: endOfRoundImage,
			title: 'End of the round',
			caption:
				'At the end of the round all words of all players are applied to the board. But when two words intersect, only the world with the highest score survives. Players can see how a round turned out with an interactive animation that shows each word getting put down on the board, and possibly words getting blown away by others. The animation also shows the thiefs and multipliers in action.',
		},
		{
			type: HighlightType.Image,
			image: scoreboardImage,
			title: 'Scoreboard',
			caption:
				'By clicking the blue bar at the top you can check the scoreboard of this game. The scoreboard shows how many points each player has received this game.',
		},
		{
			type: HighlightType.Image,
			image: previousRoundsImage,
			title: 'Previous rounds',
			caption:
				'After opening the scoreboard you can navigate to the Previous rounds tab. There you can see how many points each player received in a round, and you can also watch the animation of the round.',
		},
		{
			type: HighlightType.Image,
			image: settingsImage,
			title: 'Game settings',
			caption:
				'As admin you can set how large the board should be, and how long a round should last. You can also manually end the round or game.',
		},
	],
};

export default battleWords;
