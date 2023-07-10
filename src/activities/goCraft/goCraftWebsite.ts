import {HobbyInformation} from '../ActivityInformation';
import WebIcon from '@mui/icons-material/Web';
import ActivityType from '../ActivityType';

const goCraftPlugin: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'Website',
	slug: 'goCraftWebsite',
	oneliner:
		'Website showing maps of the in-game world, live-views of players in the game, and related features. Using a React+TypeScript front-end, WordPress backend for content, websocket api for in-game data.',
	from: 'April 2017',
	till: 'June 2018',
	Icon: WebIcon,
	website: 'https://github.com/NLthijs48/GoCraftWebsite',
};

export default goCraftPlugin;
