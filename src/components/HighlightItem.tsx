import Highlight from '../activities/Highlight';
import HighlightType from '../activities/HighlightType';
import React from 'react';

interface HighlightItemProps {
	highlight: Highlight;
}

function HighlightItem(props: HighlightItemProps) {
	if (props.highlight.type === HighlightType.Image) {
		// TODO: use header similar to ActivityTitle?
		return (
			<figure style={{margin: 0}}>
				<h2 style={{marginBottom: '0.1em'}}>{props.highlight.title}</h2>
				<img src={props.highlight.image} alt={props.highlight.title} />
				<figcaption>{props.highlight.caption}</figcaption>
			</figure>
		);
	}
	return null;
}

export default HighlightItem;
