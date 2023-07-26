import {JobInformation} from '../ActivityInformation';
import BuildIcon from '@mui/icons-material/Build';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import stageTesting from './tiger/stageTesting.png';
import stageStatistics from './tiger/stageStatistics.png';
import statisticsTypeScript from './tiger/statisticsTypeScript.png';
import overview from './tiger/overview.png';

const tiger: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Tiger: CI dashboard',
	slug: 'crispTigerCiDashboard',
	oneliner: 'CI dashboard showing live patch test results, releases, and codebase statistics.',
	description: (
		<div>
			Initially created during a tech hackweek to show live CI progress on a TV that is the office. It helped a lot to improve the
			speed of CI because it gives insight into which steps take long. Later expanded with codebase statistics to set tech stack
			improvement goals.
		</div>
	),
	from: 'June 2022', // Start during the Tech Hackweek
	Icon: BuildIcon,
	highlights: [
		{
			type: HighlightType.Image,
			title: 'Staging, releases and statistics',
			image: overview,
			caption:
				'Home screen, showing the list of tested (or to-be-tested) patches, list of least recently released patches and current statistics of the live version. Obviously redacted to prevent showing all upcoming features :)',
		},
		{
			type: HighlightType.Image,
			title: 'Live test result progress',
			image: stageTesting,
			caption:
				'After uploading a new patch (pull request), or a new version of it Continuous Integration starts running. First building the required artifacts, then running linters, static analyzers, unit tests and a ton of end-2-end tests. A bar with colored segments shows the progress live!',
		},
		{
			type: HighlightType.Image,
			title: 'Codebase statistics for each patch',
			image: stageStatistics,
			caption:
				'For each patch statistics are calculated, these are meant as tech-team wide goals to improve the tech stack. Using a green color it shows if the statistic improved compared to the parent git hash.',
		},
		{
			type: HighlightType.Image,
			title: 'Statistic details',
			image: statisticsTypeScript,
			caption:
				'Tapping a statistic shows more details, like a breakdown by directory for the TypeScript one. Tap a statistic again to dive even deeper.',
		},
	],
};

export default tiger;
