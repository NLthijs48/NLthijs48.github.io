import {HobbyInformation} from '../ActivityInformation';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

const playerWarps: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'PlayerWarps',
	slug: 'minecraftPlayerWarps',
	oneliner: 'Minecraft server plugin to let players teleport to a list of saved in-game locations',
	description: 'Mostly only used for my own Minecraft server, but made open source for others to use as well.',
	from: 'January 2016', // Estimate, first commit in July 2016, but the plugin has been created and used before that
	till: 'October 2017', // End of active development
	Icon: AirlineStopsIcon,
	highlights: [{type: HighlightType.Link, href: 'https://github.com/NLthijs48/PlayerWarps', title: 'Source code on GitHub'}],
};

export default playerWarps;
