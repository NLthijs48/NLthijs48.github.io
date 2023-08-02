import {EducationInformation} from '../ActivityInformation';
import MemoryIcon from '@mui/icons-material/Memory';
import React from 'react';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';

const bachelorThesisFollowUp: EducationInformation = {
	activityType: ActivityType.Education,
	name: 'Parallel prefix sum verification with VerCors',
	slug: 'computerSciencePrefixSum',
	oneliner: (
		<div>
			As follow-up of my Bachelor paper I continued with the verification of the parallel prefix sum verification with the VerCors
			tool, and succeeded!
		</div>
	),
	from: 'July 2017',
	till: 'February 2018', // Gave a final presentation about the results on 8 February 2018
	Icon: MemoryIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://github.com/NLthijs48/PrefixSumVerification',
			title: 'GitHub repository',
			caption: 'Contains the verification specification results, the report LaTeX and presentation',
		},
		{
			type: HighlightType.Link,
			// TODO: add a file-loader to Webpack and move this file in the src/activities/ folder instead of in public/
			// (need to eject from react-scripts for that first)
			href: '/files/bachelorThesisFollowUpPaper.pdf',
			title: 'Paper (pdf)',
		},
	],
};

export default bachelorThesisFollowUp;
