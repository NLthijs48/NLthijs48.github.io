import theme from '../theme';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import HandymanIcon from '@mui/icons-material/Handyman';
import SvgIcon from '@mui/material/SvgIcon';

enum ActivityType {
	/** Jobs and other paid projects */
	Job = 'job',
	/** Education: studies and courses */
	Education = 'education',
	/** Hobby/unpaid projects */
	Hobby = 'hobby',
}

export const activityTypeColors: {[D in ActivityType]: string} = {
	[ActivityType.Job]: theme.palette.primary.main,
	[ActivityType.Education]: '#2477dd',
	[ActivityType.Hobby]: '#018f04',
};

export const activityTypeDescriptions: {[D in ActivityType]: string} = {
	[ActivityType.Job]: 'Job or other paid project',
	[ActivityType.Education]: 'Study or course',
	[ActivityType.Hobby]: 'Hobby or other unpaid project',
};

export const activityTypeIcons: {[D in ActivityType]: typeof SvgIcon} = {
	[ActivityType.Job]: WorkIcon,
	[ActivityType.Education]: SchoolIcon,
	[ActivityType.Hobby]: HandymanIcon,
};

export default ActivityType;
