import {HobbyInformation} from '../ActivityInformation';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import ActivityType from '../ActivityType';

const playerWarps: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'PlayerWarps',
	slug: 'minecraftPlayerWarps',
	oneliner: 'Minecraft server plugin to let players teleport to a list of saved in-game locations',
	from: 'January 2016', // Estimate, first commit in July 2016, but the plugin has been created and used before that
	till: 'October 2017', // End of active development
	Icon: AirlineStopsIcon,
	website: 'https://github.com/NLthijs48/PlayerWarps',
};

export default playerWarps;
