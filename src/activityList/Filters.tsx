import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ActivityType, {activityTypeColors, activityTypeIcons} from '../activities/ActivityType';
import {createContext, CSSProperties} from 'react';
import AppsIcon from '@mui/icons-material/Apps';

export const FilterContext = createContext<null | ActivityType>(null);

interface FiltersProps {
	style?: CSSProperties;
	activityType: null | ActivityType;
	setActivityType: (newActivityType: null | ActivityType) => void;
}
function Filters(props: FiltersProps) {
	return (
		<ButtonGroup size="medium" style={{backgroundColor: 'white', ...props.style}} color="secondary">
			<Button variant={props.activityType === null ? 'contained' : 'outlined'} onClick={() => props.setActivityType(null)}>
				<AppsIcon style={{opacity: 0.8, marginRight: '0.3em', fontSize: '1.3em'}} />
				All
			</Button>
			{Object.entries(ActivityType).map(([activityTypeName, activityType]) => {
				const ActivityTypeIcon = activityTypeIcons[activityType];
				const isActive = props.activityType === activityType;
				return (
					<Button
						variant={isActive ? 'contained' : 'outlined'}
						onClick={() => props.setActivityType(activityType)}
						style={{color: isActive ? undefined : activityTypeColors[activityType]}}
					>
						<ActivityTypeIcon style={{opacity: 0.8, marginRight: '0.3em', fontSize: '1.3em'}} /> {activityTypeName}
					</Button>
				);
			})}
		</ButtonGroup>
	);
}

export default Filters;
