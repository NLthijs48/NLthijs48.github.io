import {JobInformation} from '../ActivityInformation';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ActivityType from '../ActivityType';

const multiWarehouse: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Multi-warehouse support',
	slug: 'crispMultiWarehouse',
	oneliner: (
		<div>
			Added support for multiple warehouses in a single country, supporting major growth of the company. I tackled this project
			together with Tristan, Hoang, Ronald, later joined by Joeri as Product Owner.
		</div>
	),
	from: 'December 2021', // Start of the first technical preparations
	till: 'November 2022', // Launch of the Breda warehouse
	Icon: WarehouseIcon,
};

export default multiWarehouse;
