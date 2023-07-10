import {HobbyInformation} from '../ActivityInformation';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ActivityType from '../ActivityType';

const errorSink: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'ErrorSink',
	slug: 'minecraftErrorSink',
	oneliner:
		'Collect Minecraft server errors on Sentry.io, making available rich bug reports to Sentry, with plenty of configuration to fine-tune it.',
	from: 'May 2017',
	till: 'May 2018',
	Icon: FilterAltIcon,
	website: 'https://github.com/NLthijs48/ErrorSink',
};

export default errorSink;
