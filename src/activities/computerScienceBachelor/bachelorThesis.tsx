import {EducationInformation} from '../ActivityInformation';
import MemoryIcon from '@mui/icons-material/Memory';
import React from 'react';
import ActivityType from '../ActivityType';

const bachelorThesis: EducationInformation = {
	activityType: ActivityType.Education,
	slug: 'computerScienceBachelorThesis',
	name: 'Bachelor thesis: OpenCL verification',
	description: (
		<div>
			Optimization, Specification and Verification of the Prefix Sum Program in an OpenCL Environment. I got the Best Paper Award,
			which means it was chosen as the best paper of the year among students in the track Formal Methods and Software Engineering.
		</div>
	),
	from: 'February 2015',
	till: 'June 2015', // 22 June 2015 I did a presentation for it, in the 23rd Twente Student Conference on IT at the University of Twente
	Icon: MemoryIcon,
	// TODO: host the paper and link to that?
};

export default bachelorThesis;
