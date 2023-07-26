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
			<figure style={{margin: 0, marginBottom: '2em', maxWidth: '100%'}}>
				<h3 style={{marginBottom: '0.1em'}}>{props.highlight.title}</h3>
				<img src={props.highlight.image} alt={props.highlight.title} style={{maxHeight: '50em', maxWidth: '100%'}} />
				<figcaption style={{maxWidth: '40em'}}>{props.highlight.caption}</figcaption>
			</figure>
		);
	}
	if (props.highlight.type === HighlightType.Text) {
		return (
			<div style={{marginBottom: '2em'}}>
				<h3 style={{marginBottom: '0.1em'}}>{props.highlight.title}</h3>
				<div style={{maxWidth: '40em'}}>{props.highlight.text}</div>
			</div>
		);
	}
	return null;
}

export default HighlightItem;
