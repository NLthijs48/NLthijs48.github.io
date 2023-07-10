import {HobbyInformation} from '../ActivityInformation';
import StorageIcon from '@mui/icons-material/Storage';
import ActivityType from '../ActivityType';

const goCraftPlugin: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'Dev-ops',
	slug: 'goCraftDevOps',
	oneliner:
		'Initially managing a rented virtual machine running CentOS, later running a bought dedicated server. For that I managed the hardware, hypervisor, virtual machines running Ubuntu, and things like backups.',
	from: 'January 2013',
	till: 'May 2018',
	Icon: StorageIcon,
};

export default goCraftPlugin;
