import {HobbyInformation} from '../ActivityInformation';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import ActivityType from '../ActivityType';

const areaShop: HobbyInformation = {
	activityType: ActivityType.Hobby,
	slug: 'areashop',
	name: 'AreaShop',
	description: 'Minecraft server plugin to sell and rent out ingame areas for ingame currency.',
	from: 'January 2014', // Guess, first commit March 2014 with initial released version (have been developing and using it privately before that)
	till: 'August 2019', // End of active development
	Icon: HolidayVillageIcon,
	website: 'https://github.com/NLthijs48/AreaShop',
};

export default areaShop;
