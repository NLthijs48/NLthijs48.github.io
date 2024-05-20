import {EducationInformation} from '../ActivityInformation';
import MemoryIcon from '@mui/icons-material/Memory';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import prefixSum from './bachelorThesis/prefixSum.png';
import prefixSumParallel from './bachelorThesis/prefixSumParallel.png';

const bachelorThesis: EducationInformation = {
	activityType: ActivityType.Education,
	slug: 'computerScienceBachelorThesis',
	name: 'Bachelor thesis: OpenCL verification',
	oneliner: 'Formal verification of a prefix sum calculation program using VerCors',
	description:
		"By using the verifier VerCors made by staff at the University of Twente I wrote a program and it's specification to verify the results formally. For my paper, the underlying work to help improve the results of VerCors and my presentation I got the Best Paper Award. This was given to me as the best paper of the year among students in the track Formal Methods and Software Engineering.",
	from: 'February 2015',
	till: 'June 2015', // 22 June 2015 I did a presentation for it, in the 23rd Twente Student Conference on IT at the University of Twente
	Icon: MemoryIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: '/files/bachelorThesisPaper.pdf',
			title: 'The paper: Optimization, Specification and Verification of the Prefix Sum Program in an OpenCL Environment (pdf)',
		},
		{
			type: HighlightType.Link,
			href: 'https://vercors.ewi.utwente.nl/',
			title: 'VerCors project website',
		},
		{
			type: HighlightType.Link,
			href: 'https://github.com/utwente-fmt/vercors',
			title: 'VerCors GitHub repository',
		},
		{
			type: HighlightType.Image,
			image: prefixSum,
			title: 'Prefix sum calculation',
			caption:
				'X₀ till Xₙ are the inputs of the calculation, could by any numbers, but in this case is simply an increasing number for the example. Y₀ till Yₙ are the outputs of the prefix sum, each output is the sum off all inputs that came before it.',
		},
		{
			type: HighlightType.Image,
			image: prefixSumParallel,
			title: 'Parallel prefix sum calculation',
			caption:
				'The simplest way to calculate a prefix sum is going through the inputs 1-by-1, which has O(N) run time. To speed up to O(Nlog(N)) a parallel calculation using a tree structure can be used, as shown in the image. The bottom row contains all inputs initially, after which intermediate sums are calculated from the bottom level to the top level. Afterwards those sums are moved down again to reach the outputs in lowest layer. See the paper for a more extensive example.',
		},
	],
};

export default bachelorThesis;
