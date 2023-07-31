import ActivityInformation from '../activities/ActivityInformation';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Highlight from '../activities/Highlight';
import {highlightIconMap} from '../components/HighlightItem';

interface ActivityHighlightsPreviewProps {
	activity: ActivityInformation;
	style?: React.CSSProperties;
}

function ActivityHighlightsPreview(props: ActivityHighlightsPreviewProps) {
	if (!props.activity.highlights || props.activity.highlights.length === 0) {
		return null;
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ...props.style}}>
			<Tooltip title="Contains project highlights">
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: '0.1em',
						opacity: 0.5,
						overflow: 'hidden',
					}}
				>
					{props.activity.highlights.map((highlight, index) => (
						<HighlightPreview highlight={highlight} key={index} />
					))}
				</div>
			</Tooltip>
		</div>
	);
}

interface HighlightPreviewProps {
	highlight: Highlight;
}
function HighlightPreview(props: HighlightPreviewProps) {
	const Icon = highlightIconMap[props.highlight.type];
	return <Icon />;
}

export default ActivityHighlightsPreview;
