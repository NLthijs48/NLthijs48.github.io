import {useActivitySelect} from '../../activityItem/ActivitySelect';
import React from 'react';
import allActivities from '../../activities/allActivities';
import {ButtonBase} from '@mui/material';
import ActivityTitle from '../../activityItem/ActivityTitle';
import TimePeriodIndicator from '../../activityItem/TimePeriodIndicator';
import ActivityInformation from '../../activities/ActivityInformation';

interface BreadcrumbsProps {
	/**
	 * To which activity the breadcrumbs should lead
	 * - it does not show the activity itself
	 */
	toActivity: ActivityInformation;
	style?: React.CSSProperties;
}

function Breadcrumbs(props: BreadcrumbsProps) {
	const {setActivity} = useActivitySelect();

	const breadcrumbs = React.useMemo(() => getBreadcrumbs(props.toActivity, allActivities), [props.toActivity]);
	if (!breadcrumbs || breadcrumbs.length === 0) {
		// No crumbs found somehow
		return null;
	}

	return (
		<div style={props.style}>
			{breadcrumbs.map((breadcrumb) => (
				<div key={breadcrumb.slug} style={{marginBottom: '1em'}}>
					<ButtonBase
						onClick={() => setActivity(breadcrumb)}
						style={{
							textDecoration: 'underline',
							width: '100%',
							display: 'block',
							fontSize: 'inherit',
							borderRadius: '1em',
						}}
					>
						<ActivityTitle activity={breadcrumb} hLevel={2} />
					</ButtonBase>
					<div style={{paddingLeft: '2.5em', fontSize: '1.3em'}}>
						<TimePeriodIndicator activity={breadcrumb} />
					</div>
				</div>
			))}
		</div>
	);
}

function getBreadcrumbs(to: ActivityInformation, list: ActivityInformation[]): null | ActivityInformation[] {
	for (let activityInformation of list) {
		// Target found, no breadcrumbs towards the target though
		if (activityInformation.slug === to.slug) {
			return [];
		}

		// Search in children
		if (!activityInformation.activities) {
			continue;
		}
		const childBreadcrumbs = getBreadcrumbs(to, activityInformation.activities);
		if (childBreadcrumbs !== null) {
			// Found in children, path towards it is itself + found path
			return [activityInformation, ...childBreadcrumbs];
		}
	}

	// Not found
	return null;
}

export default Breadcrumbs;
