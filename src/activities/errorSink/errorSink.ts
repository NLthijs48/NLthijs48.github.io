import {HobbyInformation} from '../ActivityInformation';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import issueImage from './issue.png';
import issuesList from './issuesList.png';

const errorSink: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'ErrorSink',
	slug: 'minecraftErrorSink',
	oneliner: 'Sentry.io integration for Minecraft servers, collects rich bug reports',
	description: 'Hooks into the Log4j logging framework and Java hooks to collect all warnings, errors and exceptions.',
	from: 'May 2017',
	till: 'May 2018',
	Icon: FilterAltIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLthijs48/ErrorSink',
			title: 'GitHub repository',
			caption: 'Source code of the plugin',
		},
		{
			type: HighlightType.Link,
			href: 'https://www.spigotmc.org/resources/errorsink.41090/',
			title: 'Plugin distribution: Spigot',
			caption: 'The plugin was available for download here, it has a modest 600 downloads and 9 ratings.',
		},
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLthijs48/ErrorSink/blob/master/common/src/main/resources/config.yml',
			title: 'Extensive configuration available',
			caption:
				'MineCraft servers with a bunch of plugins are spammy, therefore this plugin offers a couple ways to filter out errors that are not relevant',
		},
		{
			type: HighlightType.Image,
			image: issuesList,
			title: 'Sentry issues list',
			caption: 'All issues from the server are grouped by Sentry, so that number of occurrences and such are tracked nicely.',
		},
		{
			type: HighlightType.Image,
			image: issueImage,
			title: 'Sentry issue example',
			caption:
				'Contains basic information like the name of the server, the warning/error/exception message. Has full stacktraces for Exceptions, and breadcrumbs showing the last few things that happened in the console. Includes a listing of all plugins and versions as well.',
			fullHeight: true,
		},
	],
};

export default errorSink;
