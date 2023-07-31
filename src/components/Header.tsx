import React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import ButtonMenu from './Menu';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import {LayoutMode} from '../PageWrapper';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import {useActivitySelect} from '../activityItem/ActivitySelect';

interface HeaderProps {
	layoutMode: LayoutMode;
	isHome: boolean;
}

/** Header at the top of the page */
function Header(props: HeaderProps) {
	const [open, setOpen] = React.useState<boolean>(false);
	React.useEffect(() => {
		/// Reset open state when switching between mobile and desktop
		if (props.layoutMode === LayoutMode.Desktop) {
			setOpen(false);
		}
	}, [props.layoutMode]);

	const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const fullScreen = screenWidth < 400;

	// Close dialog on navigation to home
	const {activity} = useActivitySelect();
	React.useEffect(() => {
		setOpen(false);
	}, [activity]);

	return (
		<React.Fragment>
			{props.layoutMode === LayoutMode.Mobile && (
				<Paper style={{borderRadius: 0}} elevation={1}>
					<ListItem disablePadding>
						<ListItemButton onClick={() => setOpen(true)}>
							<ListItemIcon style={{minWidth: 40}}>
								<MenuIcon />
							</ListItemIcon>
							<ListItemText primary="Menu" />
						</ListItemButton>
					</ListItem>

					<Dialog fullScreen={fullScreen} open={open} onClose={() => setOpen(false)} aria-labelledby="responsive-dialog-title">
						<DialogTitle id="responsive-dialog-title">Menu</DialogTitle>
						<DialogContent>
							<ButtonMenu layout="vertical" isHome={props.isHome} />
						</DialogContent>
						<DialogActions>
							<Button autoFocus fullWidth onClick={() => setOpen(false)} color="secondary" size="large">
								Close
							</Button>
						</DialogActions>
					</Dialog>
				</Paper>
			)}
			{props.layoutMode === LayoutMode.Desktop && (
				<AppBar position="static" color="transparent" style={{backgroundColor: 'white'}}>
					<Toolbar
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							width: '100%',
						}}
					>
						<ButtonMenu layout="horizontal" isHome={props.isHome} />
					</Toolbar>
				</AppBar>
			)}
		</React.Fragment>
	);
}

export default Header;
