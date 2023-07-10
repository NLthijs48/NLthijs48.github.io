import {HobbyInformation} from '../ActivityInformation';
import ChatIcon from '@mui/icons-material/Chat';
import ActivityType from '../ActivityType';

const interactiveMessenger: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'InteractiveMessenger',
	slug: 'interactiveMessenger',
	oneliner: 'Message translation and formatting library for Minecraft server plugins',
	// Started this project with https://github.com/PhoenixIV, shout him out in the full description later
	from: 'November 2014',
	// End of active development
	till: 'December 2017',
	Icon: ChatIcon,
	website: 'https://github.com/NLthijs48/InteractiveMessenger',
};

export default interactiveMessenger;
