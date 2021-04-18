import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		margin: 'auto',
		width: 'fit-content',
	},
	formControl: {
		marginTop: theme.spacing(2),
		minWidth: 120,
	},
	formControlLabel: {
		marginTop: theme.spacing(1),
	},
}));

function ModalComponent(props) {
	const classes = useStyles();
	const { open, setOpen, maxWidth, children, ...other } = props;
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			fullWidth
			maxWidth={maxWidth | 'md'}
			open={open}
			onClose={handleClose}
			{...other}
		>
			{children}
		</Dialog>
	);
}
export default ModalComponent;
ModalComponent.propTypes = {
	maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
	children: PropTypes.node,
	open: PropTypes.bool,
	setOpen: PropTypes.func,
};
