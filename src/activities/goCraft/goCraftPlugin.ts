import {HobbyInformation} from '../ActivityInformation';
import ExtensionIcon from '@mui/icons-material/Extension';
import ActivityType from '../ActivityType';

const goCraftPlugin: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'Spigot server plugin',
	slug: 'goCraftPlugin',
	description:
		'Plugin with tons of customizations for the Minecraft server experience: shops, anti-hacking, analytics, game mechanics, configuration and plugin update management, etcetera.',
	from: 'June 2013', // Started somewhere after my first Java programming courses in the Bachelor Computer Science
	till: 'May 2018', // Development slowed the year before that already
	Icon: ExtensionIcon,
	website: 'https://github.com/NLthijs48/GoCraftPlugin',
};

export default goCraftPlugin;
