import Highlight from '../activities/Highlight';
import HighlightType from '../activities/HighlightType';
import React from 'react';
import ExternalLink from './ExternalLink';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
	if (props.highlight.type === HighlightType.Link) {
		return (
			<div style={{marginBottom: '2em'}}>
				<ExternalLink href={props.highlight.href} underline="none">
					<h3 style={{marginBottom: '0.1em'}}>
						<OpenInNewIcon style={{fontSize: '1.1em', marginBottom: '-0.2em', marginLeft: '-0.1em'}} />{' '}
						<span style={{textDecoration: 'underline'}}>{props.highlight.title}</span>
					</h3>
				</ExternalLink>
				<div style={{maxWidth: '40em'}}>{props.highlight.caption}</div>
			</div>
		);
	}
	return null;
}

export default HighlightItem;
