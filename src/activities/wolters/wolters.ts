import {JobInformation} from '../ActivityInformation';
import PaletteIcon from '@mui/icons-material/Palette';
import ActivityType from '../ActivityType';

const wolters: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Wolters',
	slug: 'wolters',
	description: 'Website for a painting company, first paid website I created.',
	from: 'October 2011', // First contact and planning
	till: 'December 2011', // Rough date around which the website launched
	Icon: PaletteIcon,
	website: 'https://schildersbedrijfwolters.nl/',
};

export default wolters;
