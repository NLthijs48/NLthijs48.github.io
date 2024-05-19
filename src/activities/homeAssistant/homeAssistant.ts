import {HobbyInformation} from '../ActivityInformation';
import HomeIcon from '@mui/icons-material/Home';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import home from './home.png';

const homeAssistant: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'Home Assistant dashboard',
	slug: 'homeAssistant',
	oneliner: 'Automating my home: lighting, home cinema, electricity usage, and a ton more.',
	from: '2020',
	Icon: HomeIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLThijs48/home-assistant',
			title: 'GitHub source code for my Home Assistant configuration',
		},
		{
			type: HighlightType.Image,
			image: home,
			title: 'My Home Assistant home screen',
			caption:
				'Example of what my home screen looks like: it highlights all the things important at this time (example where everything is happening at once). Tracking washing machine cycles, home cinema automation, grocery delivery tracking, air quality, electricity usage, weather forecasting, plant care, robot vacuum.',
			fullHeight: true,
		},
	],
};

export default homeAssistant;
