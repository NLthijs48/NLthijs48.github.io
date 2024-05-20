import {JobInformation} from '../ActivityInformation';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import frontpage from './frontpage.png';
import projects from './projects.png';
import news from './news.png';
import logo from './logo.png';

const robKemperink: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Rob Kemperink Gardener',
	slug: 'robKemperink',
	oneliner: 'Website for a gardening company to show their work',
	description: (
		<div>
			<img src={logo} alt="Rob Kempering logo: wordmark in red with a green gardener icon next to it" style={{height: 80}} />
			<p>
				Rob Kemperink is a landscaping business, I have made a website for them to show their skills. The website adapts to any
				screen size to make it good to use on mobile phones. The company can add content themselves through the Joomla content
				management system. The site has been designed by HeerINC and build by me.
			</p>
		</div>
	),
	from: 'November 2012',
	till: 'January 2013', // Not sure when exactly it was finished
	Icon: LocalFloristIcon,
	// Website got replaced by another one
	highlights: [
		{
			type: HighlightType.Image,
			image: frontpage,
			title: 'Front page',
			caption: 'Simple informational front page with a pleasant design',
		},
		{
			type: HighlightType.Image,
			image: projects,
			title: 'Projects page',
			caption: 'A page for showcasing their previous projects, including image galleries',
		},
		{
			type: HighlightType.Image,
			image: news,
			title: 'News page',
			caption: 'A news page with simple blog articles about their latest gardening tips',
		},
	],
};

export default robKemperink;
