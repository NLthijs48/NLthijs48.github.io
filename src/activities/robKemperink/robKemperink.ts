import {JobInformation} from '../ActivityInformation';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ActivityType from '../ActivityType';

const robKemperink: JobInformation = {
	activityType: ActivityType.Job,
	name: 'Rob Kemperink',
	description: 'Website for a gardening company to show their work, worked together with designer Stef Heerink.',
	from: 'November 2012',
	till: 'January 2013', // Not sure when exactly it was finished
	Icon: LocalFloristIcon,
	// Website got replaced by another one
};

export default robKemperink;
