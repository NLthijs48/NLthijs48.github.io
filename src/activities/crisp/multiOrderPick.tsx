import {JobInformation} from '../ActivityInformation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ActivityType from '../ActivityType';

const multiOrderPick: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Warehouse: multi-order pick',
	slug: 'crispMultiOrderPick',
	oneliner: (
		<div>
			New order picking system: collect products for boxes of multiple orders at once, split picking process by delivery temperature.
			This increased efficiency immensely, especially because it was in-time before the move to a bigger warehouse.
		</div>
	),
	from: 'August 2020', // Start of development
	// 2020-11-27: move to Plimsollweg 4 Amsterdam warehouse, and full use of multi-order pick
	till: 'December 2020', // Project 'done', fully in use and smoothly running
	Icon: ShoppingCartIcon,
};

export default multiOrderPick;
