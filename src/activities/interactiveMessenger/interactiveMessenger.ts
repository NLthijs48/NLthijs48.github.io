import {HobbyInformation} from '../ActivityInformation';
import ChatIcon from '@mui/icons-material/Chat';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

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
	highlights: [
		{type: HighlightType.Link, href: 'https://github.com/NLthijs48/InteractiveMessenger', title: 'Source code on GitHub'},
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLthijs48/InteractiveMessenger/blob/master/Specifications%20%26%20Guidelines.md',
			title: 'Message specification',
			caption: 'Examples of inputs and the messages they produce in MineCraft',
		},
		{type: HighlightType.Link, href: 'https://interactivemessenger.wiefferink.me/', title: 'JavaDoc of the library'},
	],
};

export default interactiveMessenger;
