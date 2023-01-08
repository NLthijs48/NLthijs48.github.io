import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

/** Header at the top of the page */
function Header() {
	return (
		<header
			style={{
				display: 'flex',
				flexDirection: 'row',
				backgroundColor: '#ec623d',
				height: 50,
				justifyContent: 'center',
				width: '100%',
			}}
		>
			<ExternalLinkButton href="https://github.com/NLthijs48">Github</ExternalLinkButton>
			<ExternalLinkButton href="https://www.linkedin.com/in/thijswiefferink/">LinkedIn</ExternalLinkButton>
			<ExternalLinkButton href="https://www.openstreetmap.org/user/NLthijs48">OpenStreetMap</ExternalLinkButton>
		</header>
	);
}

interface ExternalLinkButtonProps {
	children: React.ReactNode;
	href: string;
}

function ExternalLinkButton(props: ExternalLinkButtonProps) {
	return (
		<Link href={props.href} target="_blank" rel="noopener noreferrer" underline="none">
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
		</Link>
	);
}

export default Header;
