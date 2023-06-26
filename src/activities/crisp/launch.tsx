import {JobInformation} from '../ActivityInformation';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ActivityType from '../ActivityType';

const launch: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Launch to the public',
	slug: 'crispLaunch',
	description:
		'Setting up the shopping app using react-native, setup of Kitchen for management of users/baskets/orders/products/etcetera, UI and UX testing. First deliveries to customer on 5 September 2018 (limited to the Randstad area), expanded to full delivery in The Netherlands on 30 October.',
	from: 'April 2018',
	till: 'September 2018', // 5 September first deliveries to customers
	Icon: RocketLaunchIcon,
};

export default launch;
