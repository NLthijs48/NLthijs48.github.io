import React from 'react';
import ExternalLink from './ExternalLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SvgIcon from '@mui/material/SvgIcon';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import MapIcon from '@mui/icons-material/Map';

interface MenuItemBase {
	name: string;
	Icon: typeof SvgIcon;
}
interface MenuLink extends MenuItemBase {
	type: 'link';
	href: string;
}
interface MenuEmail extends MenuItemBase {
	type: 'email';
	title: string;
	hint: string;
}
type MenuItem = MenuLink | MenuEmail;

const menuContent: MenuItem[] = [
	{
		type: 'link',
		name: 'Github',
		href: 'https://github.com/NLthijs48',
		Icon: GitHubIcon,
	},
	{
		type: 'email',
		name: 'Email',
		title: 'My email address',
		hint: 'My first name @ this domain name',
		Icon: AlternateEmailIcon,
	},
	{
		type: 'link',
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/thijswiefferink/',
		Icon: LinkedInIcon,
	},
	{
		type: 'link',
		name: 'OpenStreetMap',
		href: 'https://www.openstreetmap.org/user/NLthijs48',
		Icon: MapIcon,
	},
];

interface ButtonMenuProps {
	layout: 'horizontal' | 'vertical';
}
function ButtonMenu(props: ButtonMenuProps) {
	return (
		<nav
			style={{
				display: 'flex',
				gap: '0.5em',
				flexDirection: props.layout === 'horizontal' ? 'row' : 'column',
				width: props.layout === 'vertical' ? 250 : undefined,
			}}
		>
			{menuContent.map((menuItem, index) => {
				switch (menuItem.type) {
					case 'link':
						return (
							<ExternalLink href={menuItem.href} underline="none" key={index}>
								<MenuButton layout={props.layout} Icon={menuItem.Icon}>
									{menuItem.name}
								</MenuButton>
							</ExternalLink>
						);
					case 'email':
						return <EmailItem menuItem={menuItem} layout={props.layout} key={index} />;
				}

				// Shoul never reach
				return null;
			})}
		</nav>
	);
}

interface MenuButtonProps {
	children: React.ReactNode;
	Icon: typeof SvgIcon;
	onClick?: () => void;
	layout: 'horizontal' | 'vertical';
}
function MenuButton(props: MenuButtonProps) {
	return (
		<Button
			startIcon={<props.Icon />}
			size="large"
			variant="outlined"
			onClick={props.onClick}
			color="secondary"
			style={{flexShrink: 0, justifyContent: props.layout === 'vertical' ? 'flex-start' : 'center'}}
			fullWidth={props.layout === 'vertical'}
		>
			{props.children}
		</Button>
	);
}

interface EmailItemProps {
	menuItem: MenuEmail;
	layout: 'horizontal' | 'vertical';
}
function EmailItem(props: EmailItemProps) {
	const [dialogOpen, setDialogOpen] = React.useState(false);

	// Fullscreen version on small screens
	const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const fullScreen = screenWidth < 400;

	return (
		<React.Fragment>
			<MenuButton Icon={props.menuItem.Icon} onClick={() => setDialogOpen(true)} layout={props.layout}>
				{props.menuItem.name}
			</MenuButton>

			<Dialog
				fullScreen={fullScreen}
				open={dialogOpen}
				onClose={() => setDialogOpen(false)}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle id="responsive-dialog-title">{props.menuItem.title}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{props.menuItem.hint}
						<br />
						<br />
						(yes that is cryptic to prevent scraping it)
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus fullWidth onClick={() => setDialogOpen(false)} variant="outlined" color="secondary" size="large">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}

export default ButtonMenu;
