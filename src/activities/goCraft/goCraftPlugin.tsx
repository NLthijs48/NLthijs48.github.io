import {HobbyInformation} from '../ActivityInformation';
import ExtensionIcon from '@mui/icons-material/Extension';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import ExternalLink from '../../components/ExternalLink';

const goCraftPlugin: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'Spigot server plugin',
	slug: 'goCraftPlugin',
	oneliner: 'Plugin with tons of customizations for the Minecraft server experience of Go-Craft',
	description: (
		<div>
			Contains hacking detection, monitoring and prevention. Contains game mechanic tweaks for combat and such, in-game shops and
			analytics. Next to that it helps with running a multi-server (
			<ExternalLink href="https://www.spigotmc.org/wiki/bungeecord/">BungeeCord</ExternalLink>) setup by providing central
			configuration and plugin update management.
		</div>
	),
	from: 'June 2013', // Started somewhere after my first Java programming courses in the Bachelor Computer Science
	till: 'May 2018', // Development slowed the year before that already
	Icon: ExtensionIcon,
	highlights: [{type: HighlightType.Link, href: 'https://github.com/NLthijs48/GoCraftPlugin', title: 'Source code on GitHub'}],
};

export default goCraftPlugin;
