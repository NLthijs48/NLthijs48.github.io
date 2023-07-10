import SvgIcon from '@mui/material/SvgIcon';
import * as React from 'react';
import ActivityType from './ActivityType';
import Highlight from './Highlight';

interface ActivityInformationBase {
	activityType: ActivityType;

	/** Unique identifier used in the url */
	slug: string;

	/**
	 * Name of the activity
	 * - with proper capitalization
	 */
	name: string;

	/**
	 * Single line that describes it
	 */
	oneliner: React.ReactNode;

	/**
	 * Description of the project
	 * - anything that does not have a dedicated field for it
	 */
	description?: React.ReactNode;

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

	// TODO: move this to the 'highlights' list instead? Or a dedicated urls list
	/** Website that is most relevant */
	website?: string;

	/** Activities done during this activity */
	activities?: ActivityInformation[];

	/** Highlights about this activity */
	highlights?: Highlight[];
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
