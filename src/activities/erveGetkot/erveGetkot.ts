import {JobInformation} from '../ActivityInformation';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import ActivityType from '../ActivityType';

const websiteErveGetkot: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Erve Getkot',
	slug: 'erveGetkot',
	description: 'Website for a place that rents out rural holiday apartments. Worked together with the designer Stef Heerink.',
	from: 'October 2013',
	till: 'June 2014', // Not sure when exactly it was finished
	Icon: NightShelterIcon,
	website: 'https://www.ervegetkot.nl/',
};

export default websiteErveGetkot;
