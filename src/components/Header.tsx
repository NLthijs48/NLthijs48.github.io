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
			}}
		>
			<MenuItem>Github</MenuItem>
		</header>
	);
}

function MenuItem(props: {children: React.ReactNode}) {
	return (
		<Link href="https://github.com/NLthijs48" target="_blank" rel="noopener">
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
