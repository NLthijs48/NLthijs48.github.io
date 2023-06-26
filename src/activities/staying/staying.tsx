import {JobInformation} from '../ActivityInformation';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import React from 'react';
import ActivityType from '../ActivityType';

const staying: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Staying',
	slug: 'staying',
	description: (
		<div>
			Service to let hotel guests communicate with the front desk: before, during and after their stay to have all information they
			need about the accommodation and surroundings.
			<div style={{marginTop: '0.5em'}}>
				I worked parttime on the React admin portal and react-native app, while also doing my Master thesis here.
			</div>
		</div>
	),
	from: 'February 2017',
	till: 'March 2018',
	Icon: RoomServiceIcon,
};

export default staying;
