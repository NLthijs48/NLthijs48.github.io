import {JobInformation} from '../ActivityInformation';
import AppleIcon from '@mui/icons-material/Apple';
import ActivityType from '../ActivityType';

const pickIntoPackaging: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Warehouse: pick into packaging',
	slug: 'crispPickIntoPackaging',
	description:
		'Revamp the warehouse order fulfillment process by calculating required boxes and directly placing products into the right box while collecting them.',
	from: 'September 2019', // Start of development
	till: 'February 2020', // Fully in use after moving to warehouse #2
	Icon: AppleIcon,
};

export default pickIntoPackaging;
