import {JobInformation} from '../ActivityInformation';
import FlagIcon from '@mui/icons-material/Flag';
import ActivityType from '../ActivityType';

const international: JobInformation = {
	activityType: ActivityType.Job,
	name: 'International: Belgium',
	slug: 'crispInternational',
	oneliner: <div>Setup the expansion to Belgium, from the warehouse and last-mile perspective.</div>,
	from: 'January 2022', // Start of the first preparations
	till: 'June 2022', // Launch of the Belgium warehouse
	Icon: FlagIcon,
	// Belgium version of the frontpage
	website: 'https://crisp.app/',
};

export default international;
