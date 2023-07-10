import {JobInformation} from '../ActivityInformation';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ActivityType from '../ActivityType';

const cantabile: JobInformation = {
	activityType: ActivityType.Job,
	slug: 'cantabile',
	name: 'Cantabilé',
	oneliner: 'Website for a female choir, worked together with designer Stef Heerink.',
	from: 'May 2012',
	till: 'June 2012',
	Icon: MusicNoteIcon,
	// Website got replaced by another one
};

export default cantabile;
