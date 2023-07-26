import React from 'react';
import Link from '@mui/material/Link';
import {useActivitySelect} from '../activityItem/ActivitySelect';
import ActivityInformation from '../activities/ActivityInformation';

interface ExternalLinkProps {
	activity?: null | ActivityInformation;
	children: React.ReactNode;
}

function InternalLink(props: ExternalLinkProps) {
	const {setActivity} = useActivitySelect();

	const searchParams = new URLSearchParams();
	if (props.activity) {
		searchParams.set('activity', props.activity.slug);
	}
	const url = window.location.origin + (Array.from(searchParams).length ? `?${searchParams.toString()}` : '');
	return (
		<Link
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			underline="always"
			onClick={(event) => {
				if (event.ctrlKey || event.metaKey) {
					return;
				}

				setActivity(props.activity ?? null);
				event.preventDefault();
				event.stopPropagation();
			}}
		>
			{props.children}
		</Link>
	);
}

export default InternalLink;
