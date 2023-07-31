import {JobInformation} from '../ActivityInformation';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

const launch: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Launch to the public',
	slug: 'crispLaunch',
	oneliner:
		'Setting up the shopping app using react-native, setup of Kitchen for management of users/baskets/orders/products/etcetera, UI and UX testing. First deliveries to customer on 5 September 2018 (limited to the Randstad area), expanded to full delivery in The Netherlands on 30 October.',
	from: 'April 2018',
	till: 'September 2018', // 5 September first deliveries to customers
	Icon: RocketLaunchIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://www.culy.nl/restaurants/boodschappen-thuis-eten/crisp-online-verssupermarkt/',
			title: 'Launch coverage by Curly (in Dutch)',
		},
	],
};

export default launch;
