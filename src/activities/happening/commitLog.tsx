import {HobbyInformation} from '../ActivityInformation';
import CommitIcon from '@mui/icons-material/Commit';
import React from 'react';
import ActivityType from '../ActivityType';

const commitLog: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'CommitLog',
	slug: 'happeningCommitLog',
	description: (
		<div>Happening plugin to view commits made in a GitHub or BitBucket repository, receives updates using webhooks from them.</div>
	),
	from: 'December 2015',
	till: 'July 2017', // Last updates
	Icon: CommitIcon,
	website: 'https://github.com/NLthijs48/CommitLog',
};

export default commitLog;
