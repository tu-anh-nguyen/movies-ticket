import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { makeStyles, Dialog, Typography, Zoom } from '@material-ui/core';
import format from 'date-format';
import { Button } from '../../lib/ui';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles(() => ({
	modal: {
		overflowY: 'unset',
	},
	trailerBox: {
		paddingTop: '56.25%',
		position: 'relative',
		overflowY: 'unset !important',
	},
	reactPlayer: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
	root: {
		padding: '10px',
		position: 'relative',
	},
	blockbuster: {
		backgroundImage: 'url(/assets/img/film/bom-tan.png)',
		backgroundSize: '100%',
		backgroundPosition: 'top, 0 0',
		backgroundRepeat: 'no-repeat, repeat-y',
		position: 'absolute',
		width: '40%',
		height: '100px',
		zIndex: 3,
		marginTop: '5px',
		top: 0,
		left: 0,
	},
	earlyBird: {
		backgroundImage: 'url(/assets/img/film/early-bird.png)',
		backgroundSize: '100%',
		backgroundPosition: 'top, 0 0',
		backgroundRepeat: 'no-repeat, repeat-y',
		position: 'absolute',
		width: '40%',
		height: '100px',
		zIndex: 3,
		marginTop: '5px',
		top: 0,
		left: 0,
	},
	sale: {
		backgroundImage: 'url(/assets/img/film/sale.png)',
		backgroundSize: '100%',
		backgroundPosition: 'top, 0 0',
		backgroundRepeat: 'no-repeat, repeat-y',
		position: 'absolute',
		width: '40%',
		height: '100px',
		zIndex: 3,
		marginTop: '5px',
		top: 0,
		left: 0,
	},
	star: {
		position: 'absolute',
		top: '3%',
		right: '10%',
		borderRadius: '10%',
		textAlign: 'center',
		color: 'white',
		zIndex: 3,
		padding: '5px 10px',
		margin: '5px auto',
		backgroundColor: '#000000ff',
	},
	overlayContent: {
		padding: '10px',
		display: 'block',
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		opacity: 0,
		transition: 'all 0.5s',
		'&:hover': {
			opacity: 1,
		},
	},
	topContent: {
		display: 'block',
		position: 'relative',
		paddingTop: '150%',
		backgroundSize: '100% auto',
		backgroundPosition: 'center, 0 0',
		backgroundRepeat: 'no-repeat, repeat-y',
	},
	bottomContent: {
		display: 'block',
		position: 'relative',
		marginTop: '10px',
		paddingTop: '25%',
		'& Button': {
			position: 'absolute',
			height: '100%',
			width: '100%',
			top: 0,
			left: 0,
		},
	},
	Typography: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		top: 0,
		left: 0,
		fontWeight: '700',
		transition: 'all 0.5s',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		textAlign: 'center',
		overflow: 'hidden',
	},
	imgContent: {
		display: 'block',
		position: 'absolute',
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		top: 0,
		left: 0,
		'& img': {
			margin: '0 auto',
			height: '100%',
			borderRadius: '5px',
		},
	},
	imgOverlayContent: {
		position: 'absolute',
		width: '100%',
		background: 'linear-gradient(to top,#000,transparent 100%)',
		height: '100%',
		overflow: 'hidden',
		display: 'block',
		top: '0',
		left: '0',
	},
	navLink: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
	playIcon: {
		transition: 'all 0.5s',
		height: 'auto',
		width: '30%',
		top: '50%',
		left: '50%',
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		display: 'block',
		margin: 'auto',
		zIndex: 2,
		'&:hover': {
			cursor: 'pointer',
			opacity: 0.8,
		},
	},
	filmStats: {
		fontWeight: 300,
		letterSpacing: '1.5px',
	},
}));

const RenderMovieCard = (
	{ maPhim, tenPhim, trailer, ngayKhoiChieu, hinhAnh, danhGia },
	dangChieu = true
) => {
	const classes = useStyle();
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};

	const renderCredit = () => {
		// const rand = star % 3;
		const rand = Math.floor(Math.random() * 4) + 1;
		if (rand === 1) return <div className={classes.blockbuster} />;
		if (rand === 2) return <div className={classes.sale} />;
		if (rand === 3) return <div className={classes.earlyBird} />;
	};

	const renderStar = (star) => {
		const a = Math.floor(star / 2);
		const b = star % 2 ? true : false;
		const arr = new Array(a).fill('a');
		return (
			<div style={{ fontSize: '0.5em' }}>
				<div>
					{arr.map((element, index) => (
						<span key={index}>???</span>
					))}
					{b && <span>??</span>}
				</div>
			</div>
		);
	};
	return (
		<>
			<Dialog
				onClose={handleClose}
				open={open}
				TransitionComponent={Zoom}
				maxWidth='md'
				fullWidth
				classes={{ paper: classes.modal }}
			>
				<div className={classes.trailerBox}>
					<ReactPlayer
						url={trailer}
						playing
						width='100%'
						light
						height='100%'
						controls
						className={classes.reactPlayer}
					/>
				</div>
			</Dialog>
			<div className={classes.root}>
				{renderCredit(danhGia)}
				<div className={classes.star}>
					<Typography>{danhGia}</Typography>
					{renderStar(danhGia)}
				</div>
				<div>
					<div className={classes.topContent}>
						<div className={classes.imgContent}>
							<img src={hinhAnh} alt={maPhim} />
						</div>
					</div>
					<div className={classes.bottomContent}>
						<div className={classes.Typography}>
							{tenPhim}
							<Typography
								component='p'
								variant='caption'
								className={classes.filmStats}
							>
								{format('dd-MM-yyyy', new Date(ngayKhoiChieu))}
							</Typography>
						</div>
					</div>
				</div>
				<div className={classes.overlayContent}>
					<div className={classes.topContent}>
						<div className={classes.imgOverlayContent}>
							<img
								src='/assets/img/extend/play-button.svg'
								alt={maPhim}
								className={classes.playIcon}
								onClick={() => setOpen(true)}
							/>
							<NavLink to={`/movie/${maPhim}`} className={classes.navLink} />
						</div>
					</div>
					{dangChieu && (
						<div className={classes.bottomContent}>
							<Button
								fullWidth
								textTransform='uppercase'
								onClick={() => setOpen(false)}
							>
								?????t v??
							</Button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default RenderMovieCard;
RenderMovieCard.propTypes = {
	maPhim: PropTypes.string,
	tenPhim: PropTypes.string,
	trailer: PropTypes.string,
	hinhAnh: PropTypes.string,
	danhGia: PropTypes.string,
};
