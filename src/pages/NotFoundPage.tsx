import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

interface NotFoundPageProps {
	/** href of the page that was not found */
	href: null | string;
}
function NotFoundPage(props: NotFoundPageProps) {
	return (
		<div style={{position: 'relative'}}>
			<h1 style={{marginTop: 0}}>Oops, that page does not exist!</h1>
			<p>Probably you can find it through the homepage, or otherwise email me.</p>
			<Link href={window.location.origin}>
				<Button variant="contained" size="large">
					Go to the home page
				</Button>
			</Link>

			{!!props.href && (
				<div style={{marginTop: '4em', fontSize: '80%', opacity: 0.8}}>
					<div>Broken url:</div>
					<div>{props.href}</div>
				</div>
			)}
		</div>
	);
}

export default NotFoundPage;
