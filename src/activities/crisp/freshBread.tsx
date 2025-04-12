import {JobInformation} from '../ActivityInformation';
import ActivityType from '../ActivityType';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import HighlightType from '../HighlightType';

const freshBread: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Fresh bread: late insertion at hubs',
	slug: 'crispFreshBread',
	oneliner: 'Created tools a bakery to print Crisp shipping labels, to facilitate baking bread just-in-time to deliver it to hubs.',
	description: (
		<div>
			Baking bread just-in-time is challenging because it needs time to cool before it can be packaged. If after baking it still needs
			to be moved to a warehouse, then packaged into orders, then moved to all hubs (locations with just delivery vehicles), and
			finally to the customer it takes too long. It would either be too late, or be less fresh than it should be.
			<div style={{marginTop: '0.5em'}}>
				To solve this problem, we created a tool for the baker to directly print shipping labels, combined with product information
				(ingredients and such). This means the bread can directly be brought to the hubs, instead of going to warehouses first.
				Below the main components are described.
			</div>
		</div>
	),
	from: 'December 2024', // Start of development
	till: 'March 2025', // Full launch complete
	Icon: BreakfastDiningIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: '/files/crispFreshBreadPressRelease.pdf',
			title: 'The press release: "Online supermarkt Crisp introduceert dagvers gebakken desembrood van Jordy’s Bakery"',
		},
		{
			type: HighlightType.Text,
			title: 'Purchasing adjustments',
			text: 'Usually products bought from a supplier should be delivered to a warehouse, but for this bread that is not the case. This required some adjustments to work smoothly.',
		},
		{
			type: HighlightType.Text,
			title: 'Printing tool for the baker',
			text: 'A page that shows the number of breads of each type required, and offering buttons to print the combined shipping+product labels. The same reliable Zebra printers as we use in the warehouse are used, connected directly to our infrastructure.',
		},
		{
			type: HighlightType.Text,
			title: 'Hub sorting by delivery route',
			text: 'The people at the hub sort the bread by delivery route, so that the driver can easily add it to the vehicle next to the regular grocery boxes.',
		},
	],
};

export default freshBread;
