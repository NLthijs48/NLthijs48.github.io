import React from 'react';
import Button from '@mui/material/Button';
import {AppBar, Toolbar} from '@mui/material';
import ExternalLink from './ExternalLink';

/** Header at the top of the page */
function Header() {
	return (
		<AppBar position="relative">
			<Toolbar
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<ExternalLinkButton href="https://github.com/NLthijs48">Github</ExternalLinkButton>
				<ExternalLinkButton href="https://www.linkedin.com/in/thijswiefferink/">LinkedIn</ExternalLinkButton>
				<ExternalLinkButton href="https://www.openstreetmap.org/user/NLthijs48">OpenStreetMap</ExternalLinkButton>
			</Toolbar>
		</AppBar>
	);
}

interface ExternalLinkButtonProps {
	children: React.ReactNode;
	href: string;
}

function ExternalLinkButton(props: ExternalLinkButtonProps) {
	return (
		<ExternalLink href={props.href} underline="none">
			<Button
				variant="outlined"
				style={{
					color: 'white',
					borderColor: 'white',
					borderWidth: 2,
					margin: 4,
				}}
			>
				{props.children}
			</Button>
		</ExternalLink>
	);
}

export default Header;
