import {JobInformation} from '../ActivityInformation';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ActivityType from '../ActivityType';

const recipes: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Recipes in the app',
	slug: 'crispRecipes',
	oneliner:
		'Added Christmas recipes in the app, and more flexible recipes after that. Included ingredient scaling based on portion count.',
	from: 'December 2020', // Start of development
	till: 'June 2020', // Rolled out and couple rounds of improvements applied
	Icon: RestaurantIcon,
};

export default recipes;
