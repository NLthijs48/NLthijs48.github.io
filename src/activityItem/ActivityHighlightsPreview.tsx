import ActivityInformation from '../activities/ActivityInformation';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Highlight from '../activities/Highlight';
import HighlightType from '../activities/HighlightType';
import PhotoIcon from '@mui/icons-material/Photo';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
	if (props.highlight.type === HighlightType.Image) {
		return <PhotoIcon />;
	}
	if (props.highlight.type === HighlightType.Link) {
		return <OpenInNewIcon />;
	}
	return null;
}

export default ActivityHighlightsPreview;
