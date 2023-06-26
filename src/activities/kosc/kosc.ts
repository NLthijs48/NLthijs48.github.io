import {HobbyInformation} from '../ActivityInformation';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ActivityType from '../ActivityType';

const kosc: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'KOSC',
	slug: 'kosc',
	description: 'Website and surrounding systems for a soccer club, as a volunteer as part of the IT committee.',
	from: 'May 2011', // Joined as a volunteer
	till: 'April 2018',
	Icon: SportsSoccerIcon,
	// Got replaced by a newer version
	website: 'https://kosc.nl/',
};

export default kosc;
