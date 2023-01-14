import {EducationInformation} from '../ActivityInformation';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import ActivityType from '../ActivityType';

const dataScienceGameTweets: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Data Science: game release tweets analysis',
	description: <div>Assignment for the Managing Big Data course in which a huge Twitter dataset is analyzed using MapReduce</div>,
	from: 'January 2016',
	till: 'January 2016',
	Icon: TwitterIcon,
	// TODO: make available a link to the paper
	// TODO: link to the results page (Github pages on the GameTweets repo?)
	website: 'https://github.com/NLthijs48/GameTweets',
};

export default dataScienceGameTweets;
