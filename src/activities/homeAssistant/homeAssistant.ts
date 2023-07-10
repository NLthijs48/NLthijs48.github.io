import {HobbyInformation} from '../ActivityInformation';
import HomeIcon from '@mui/icons-material/Home';
import ActivityType from '../ActivityType';

const homeAssistant: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'Home Assistant dashboard',
	slug: 'homeAssistant',
	oneliner: 'Automating my home: lighting, home cinema, electricity usage.',
	from: '2020',
	Icon: HomeIcon,
	website: 'https://github.com/NLThijs48/home-assistant',
};

export default homeAssistant;
