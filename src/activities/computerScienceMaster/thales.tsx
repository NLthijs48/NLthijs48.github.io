import {EducationInformation} from '../ActivityInformation';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import React from 'react';
import ActivityType from '../ActivityType';
import ExternalLink from '../../components/ExternalLink';

const thales: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Thales: chaos monkey',
	slug: 'thalesChaosMonkey',
	oneliner: (
		<div>
			Assignment at Thales to create a chaos monkey for their distributed software system, inspired by{' '}
			<ExternalLink href="https://netflix.github.io/chaosmonkey/">chaos monkey of Netflix</ExternalLink>.
		</div>
	),
	from: 'September 2016',
	till: 'February 2017',
	Icon: WhatshotIcon,
	// Source is in a private repository, will not be made public: https://github.com/NLthijs48/ThalesChaosMonkey
	website: 'https://www.thalesgroup.com/',
};

export default thales;
