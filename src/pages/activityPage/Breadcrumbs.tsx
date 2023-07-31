import React from 'react';
import allActivities from '../../activities/allActivities';
import ActivityInformation from '../../activities/ActivityInformation';
import ActivityItem from '../../activityItem/ActivityItem';

interface BreadcrumbsProps {
	/**
	 * To which activity the breadcrumbs should lead
	 * - it does not show the activity itself
	 */
	toActivity: ActivityInformation;
	style?: React.CSSProperties;
}

function Breadcrumbs(props: BreadcrumbsProps) {
	const breadcrumbs = React.useMemo(() => getBreadcrumbs(props.toActivity, allActivities), [props.toActivity]);
	if (!breadcrumbs || breadcrumbs.length === 0) {
		// No crumbs found somehow
		return null;
	}

	return (
		<div style={props.style}>
			{breadcrumbs.map((breadcrumb) => (
				<ActivityItem
					activity={breadcrumb}
					hLevel={2}
					showDetails={false}
					key={breadcrumb.slug}
					style={{marginBottom: '1em', fontSize: '1.2em'}}
				/>
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
