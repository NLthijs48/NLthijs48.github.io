import {JobInformation} from '../ActivityInformation';
import ExplicitIcon from '@mui/icons-material/Explicit';
import React from 'react';
import ActivityType from '../ActivityType';

const battleWords: JobInformation = {
	activityType: ActivityType.Job,
	name: 'BattleWords',
	description: (
		<div>
			A Scrabble-like game for big groups. Works round-by-round, revealing the moves of each player after a round is complete by
			showing a fully animated playing board
		</div>
	),
	from: 'February 2016', // This is a guess
	Icon: ExplicitIcon, // Looks like a letter tile of the game
};

export default battleWords;
