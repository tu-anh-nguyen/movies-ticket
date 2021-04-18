import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Grid, makeStyles } from '@material-ui/core';

function DividerComponent(props) {
	const {
		spacing,
		padding,
		backgroundColor,
		margin,
		children,
		...other
	} = props;
	const useStyle = makeStyles(() => ({
		root: {
			width: '100%',
			padding,
			margin,
		},
		divider: {
			backgroundColor,
		},
	}));
	const classes = useStyle();
	return (
		<Grid
			container
			className={classes.root}
			alignItems='center'
			spacing={spacing}
			{...other}
		>
			<Grid item xs>
				<Divider className={classes.divider} />
			</Grid>
			<Grid item>{children}</Grid>
			<Grid item xs>
				<Divider className={classes.divider} />
			</Grid>
		</Grid>
	);
}
export default DividerComponent;
DividerComponent.propTypes = {
	padding: PropTypes.string,
	margin: PropTypes.string,
	spacing: PropTypes.number,
	children: PropTypes.node,
	ackgroundColor: PropTypes.string,
};
