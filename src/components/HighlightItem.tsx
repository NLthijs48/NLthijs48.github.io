import Highlight from '../activities/Highlight';
import HighlightType from '../activities/HighlightType';
import React from 'react';
import ExternalLink from './ExternalLink';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SvgIcon from '@mui/material/SvgIcon';
import PhotoIcon from '@mui/icons-material/Photo';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

interface HighlightItemProps {
	highlight: Highlight;
}

function HighlightItem(props: HighlightItemProps) {
	const Icon = highlightIconMap[props.highlight.type];
	if (props.highlight.type === HighlightType.Image) {
		// TODO: use header similar to ActivityTitle?
		return (
			<figure style={{margin: 0, marginBottom: '2em', maxWidth: '100%'}}>
				<figcaption>
					<h3 style={{marginBottom: '0.1em'}}>
						<Icon style={{fontSize: '1.2em', marginBottom: '-0.2em', marginLeft: '-0.1em', opacity: 0.7}} />{' '}
						{props.highlight.title}
					</h3>
					{!!props.highlight.caption && <div style={{maxWidth: '40em', marginBottom: '0.5em'}}>{props.highlight.caption}</div>}
				</figcaption>

				<img
					src={props.highlight.image}
					alt={props.highlight.title}
					style={{maxHeight: props.highlight.fullHeight ? undefined : '50em', maxWidth: '100%'}}
				/>
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
						<Icon style={{fontSize: '1.2em', marginBottom: '-0.2em', marginLeft: '-0.1em'}} />{' '}
						<span style={{textDecoration: 'underline'}}>{props.highlight.title}</span>
					</h3>
				</ExternalLink>
				<div style={{maxWidth: '40em'}}>{props.highlight.caption}</div>
			</div>
		);
	}
	return null;
}

export const highlightIconMap: Record<HighlightType, typeof SvgIcon> = {
	[HighlightType.Link]: OpenInNewIcon,
	[HighlightType.Image]: PhotoIcon,
	[HighlightType.Text]: TextSnippetIcon,
};

export default HighlightItem;
