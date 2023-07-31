import {JobInformation} from '../ActivityInformation';
import FlagIcon from '@mui/icons-material/Flag';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

const international: JobInformation = {
	activityType: ActivityType.Job,
	name: 'International: Belgium',
	slug: 'crispInternational',
	oneliner: 'Set up the expansion to Belgium, from the warehouse and last-mile perspective.',
	from: 'January 2022', // Start of the first preparations
	till: 'June 2022', // Launch of the Belgium warehouse
	Icon: FlagIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://crisp.app/',
			title: 'Belgium Crisp home page',
			caption: 'Translated to have Belgium copy, slogan, etcetera.',
		},
	],
};

export default international;
