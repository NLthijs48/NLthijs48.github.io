import {EducationInformation} from '../ActivityInformation';
import MemoryIcon from '@mui/icons-material/Memory';
import React from 'react';
import ActivityType from '../ActivityType';

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
	// TODO: host the paper and link to that?
	website: 'https://github.com/NLthijs48/PrefixSumVerification',
};

export default bachelorThesisFollowUp;
