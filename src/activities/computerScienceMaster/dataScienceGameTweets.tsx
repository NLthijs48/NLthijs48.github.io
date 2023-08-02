import {EducationInformation} from '../ActivityInformation';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

const dataScienceGameTweets: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Data Science: game release tweets analysis',
	slug: 'dataScienceGameTweets',
	oneliner: <div>Assignment for the Managing Big Data course in which a huge Twitter dataset is analyzed using MapReduce</div>,
	from: 'January 2016',
	till: 'January 2016',
	Icon: TwitterIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLthijs48/GameTweets',
			title: 'GitHub repository',
			caption: 'Contains the MapReduce code, visualization website code and the paper (LaTeX)',
		},
		{
			type: HighlightType.Link,
			href: '/files/gameTweetsPaper.pdf',
			title: 'Paper (pdf)',
		},
		// TODO: link to the results page (Github pages on the GameTweets repo?)
	],
};

export default dataScienceGameTweets;
