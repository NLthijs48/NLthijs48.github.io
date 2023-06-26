import {HobbyInformation} from '../ActivityInformation';
import AppsIcon from '@mui/icons-material/Apps';
import ActivityType from '../ActivityType';
import goCraftPlugin from './goCraftPlugin';
import goCraftWebsite from './goCraftWebsite';
import goCraftDevOps from './goCraftDevOps';

const goCraft: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'Go-Craft',
	slug: 'goCraft',
	description:
		'Minecraft server network I have managed for years with a few friends, it had grown from a single server to a big server network with a ton of custom plugins.',
	from: 'January 2013', // Not sure about exact timing, but at this point I was involved with Go-Craft in some way
	till: 'May 2018', // Development slowed the year before that already
	Icon: AppsIcon,
	activities: [goCraftPlugin, goCraftWebsite, goCraftDevOps],
};

export default goCraft;
