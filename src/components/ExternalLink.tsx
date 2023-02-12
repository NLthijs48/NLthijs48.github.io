import React from 'react';
import Link from '@mui/material/Link';

interface ExternalLinkProps {
	children: React.ReactNode;
	href: string;
	underline?: 'none' | 'hover' | 'always';
}

function ExternalLink(props: ExternalLinkProps) {
	return (
		<Link href={props.href} target="_blank" rel="noopener noreferrer" underline={props.underline ?? 'always'}>
			{props.children}
		</Link>
	);
}

export default ExternalLink;
