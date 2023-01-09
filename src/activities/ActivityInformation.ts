import SvgIcon from '@mui/material/SvgIcon';
import * as React from 'react';
import ActivityType from './ActivityType';

interface ActivityInformationBase {
	activityType: ActivityType;
	/**
	 * Name of the activity
	 * - with proper capitalization
	 */
	name: string;
	/**
	 * Single line that describes it
	 */
	description: React.ReactNode;
	/**
	 * Icon that represents the activity
	 * https://mui.com/material-ui/material-icons/
	 */
	Icon: typeof SvgIcon;

	/**
	 * Start date
	 * - year
	 * - year-month
	 */
	from: string;
	/**
	 * End date (if not still ongoing)
	 * - missing: ongoing activity
	 * - year
s	 * - year-month
	 */
	till?: string;

	/** Website that is most relevant */
	website?: string;

	/** Activities done during this activity */
	activities?: ActivityInformation[];
}

export interface EducationInformation extends ActivityInformationBase {
	activityType: ActivityType.Education;
}

export interface JobInformation extends ActivityInformationBase {
	activityType: ActivityType.Job;
}

export interface HobbyInformation extends ActivityInformationBase {
	activityType: ActivityType.Hobby;
}

type ActivityInformation = JobInformation | EducationInformation | HobbyInformation;

export default ActivityInformation;
