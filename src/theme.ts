import {createTheme} from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#ec623d',
		},
		secondary: {
			main: '#555555',
		},
		background: {
			default: '#eeeeee',
		},
	},
	components: {
		MuiTooltip: {
			defaultProps: {
				// Prevent going into tooltip quick-open mode after moving from the first to the second one
				enterNextDelay: 200,
			},
		},
	},
});

export default theme;
