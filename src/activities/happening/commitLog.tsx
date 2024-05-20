import {HobbyInformation} from '../ActivityInformation';
import CommitIcon from '@mui/icons-material/Commit';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import commits from './commitLog/commits.png';
import filters from './commitLog/filters.png';

const commitLog: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'CommitLog',
	slug: 'happeningCommitLog',
	oneliner: <div>Happening plugin to view commits made in a GitHub or BitBucket repository.</div>,
	description:
		'Created as a way to notify a group of people of changes in a project. I used it to notify other Minecraft server administrators about changes to internal plugins. It worked with GitHub and BitBucket repositories, relying on their webhooks for updates. Using webhooks meant it was easy to set up, and also worked for private repositories without hard to configure authentication.',
	from: 'December 2015',
	till: 'July 2017', // Last updates
	Icon: CommitIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLthijs48/CommitLog',
			title: 'Source code on GitHub',
		},
		{
			type: HighlightType.Image,
			image: commits,
			title: 'Most recent commits from a repository',
			caption:
				'Shows a list of commits from all connected repositories (GoCraft and ErrorSink are repositories). It shows the author and commit message as well.',
		},
		{
			type: HighlightType.Image,
			image: filters,
			title: 'Filters can be applied on the commit list',
			caption: 'Filter by repository and/or author to view specific changes, simply tap a repository or author name.',
		},
	],
};

export default commitLog;
