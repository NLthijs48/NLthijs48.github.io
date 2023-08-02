import {EducationInformation} from '../ActivityInformation';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

const thales: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Thales: chaos monkey',
	slug: 'thalesChaosMonkey',
	oneliner: 'Assignment at Thales to create a chaos monkey for their distributed software system.',
	description: 'The data and code used during the project is not available publicly, it is restricted by Thales.',
	from: 'September 2016',
	till: 'February 2017',
	Icon: WhatshotIcon,
	// Source is in a private repository, will not be made public: https://github.com/NLthijs48/ThalesChaosMonkey
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://www.thalesgroup.com/',
			title: 'Thales website',
		},
		{
			type: HighlightType.Link,
			href: 'https://netflix.github.io/chaosmonkey/',
			title: 'Netflix Chaos Monkey',
			caption: 'This served as inspiration for this project',
		},
	],
};

export default thales;
