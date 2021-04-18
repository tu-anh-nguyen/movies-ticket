import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slide from '@material-ui/core/Slide';
import LinkMui from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
	userLoginLink: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none !important',
		cursor: 'pointer',
	},
	userLoginName: {
		paddingLeft: '10px',
		paddingRight: '10px',
		color: 'black',
		fontSize: '18px',
		fontWeight: '500',
		'&:hover': {
			color: 'var(--primary-color)',
		},
	},
	userLoginAvatar: {
		width: '40px',
		height: '40px',
	},
	userLoginMenuList: {
		position: 'absolute',
		top: '48px',
		left: '0',
		width: '100%',
		borderRadius: '4px',
		backgroundColor: 'rgb(236 236 236) !important',
		padding: '10px 0',
		zIndex: '1',
	},
	userLoginMenuItem: {
		height: '38px',
		lineHeight: '38px',
		textAlign: 'center',
		borderRadius: '4px',
		fontSize: '18px',
		color: 'black',
		'&:hover': {
			backgroundColor: 'var(--primary-color)',
			color: 'white',
		},
		cursor: 'pointer',
		textDecoration: 'none !important',
		display: 'block',
	},
	mobileMenuList: {
		display: 'flex',
		flexDirection: 'column',
	},
	mobileMenuItemLink: {
		textDecoration: 'none !important',
		color: 'black',
		fontSize: '20px',
		padding: '12px 0',
		fontWeight: '500',
		'&:hover': {
			color: 'var(--primary-color)',
		},
	},
	locationList: {
		overflowY: 'scroll',
		backgroundColor: 'white',
		color: 'black',
		width: '90vw',
		maxWidth: '560px',
		maxHeight: '90vh',
		'&::-webkit-scrollbar': {
			width: '4px',
			backgroundColor: '#e8e3e3',
		},
		'&::-webkit-scrollbar-thumb': {
			borderRadius: '10px',
			boxShadow: 'inset 0 0 6px rgb(0 0 0 / 30%)',
		},
	},
	locationListItem: {
		padding: '10px 18px',
		fontSize: '20px',
		justifyContent: 'center',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: 'var(--primary-color)',
			color: 'white',
		},
	},
}));

export default function MobileMenu(props) {
	const classes = useStyles();
	const {
		isLogin,
		currentLocation,
		LocationData,
		isShowMobileMenu,
		toggleIsShowMobileMenu,
		isShowLocationListMobile,
		toggleIsShowLocationListMobile,
		handleSelectLocation,
	} = props;

	const [isLoginMenu, setIsShowLoginMenu] = React.useState(false);
	const userInfor = {
		name: 'Nguyễn Văn A',
		avatar: '/assets/img/user/default_avatar.png',
	};

	const toggleIsShowLoginMenu = () => {
		setIsShowLoginMenu(!isLoginMenu);
	};

	const handleOnClickLogout = () => {
		setIsShowLoginMenu(false);
	};

	return (
		<Fragment>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modalTopRight}
				open={isShowMobileMenu}
				onClose={toggleIsShowMobileMenu}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
				}}
			>
				<Slide
					direction='left'
					in={isShowMobileMenu}
					mountOnEnter
					unmountOnExit
					timeout={300}
				>
					<Box
						position='absolute'
						top='0'
						right='0'
						width='70vw'
						height='100vh'
						bgcolor='white'
						style={{ outline: 'none' }}
					>
						<Box
							display='flex'
							height='60px'
							alignItems='center'
							justifyContent='space-between'
							margin='0 14px'
						>
							<Box>
								{isLogin && (
									<Box position='relative'>
										<Box
											onClick={toggleIsShowLoginMenu}
											className={classes.userLoginLink}
											to='/ca-nhan/'
										>
											<Avatar
												className={classes.userLoginAvatar}
												alt='User avatar'
												src={userInfor.avatar}
											/>
											<span className={classes.userLoginName}>
												{userInfor.name}
											</span>
										</Box>
										{isLoginMenu && (
											<ClickAwayListener onClickAway={toggleIsShowLoginMenu}>
												<Box className={classes.userLoginMenuList}>
													<Link
														to='/ca-nhan/'
														className={classes.userLoginMenuItem}
													>
														Thông tin cá nhân
													</Link>
													<Box
														onClick={handleOnClickLogout}
														className={classes.userLoginMenuItem}
													>
														Đăng xuất
													</Box>
												</Box>
											</ClickAwayListener>
										)}
									</Box>
								)}
								{!isLogin && (
									<Link className={classes.userLoginLink} to='/dang-nhap/'>
										<Avatar
											className={classes.userLoginAvatar}
											alt='User avatar'
											src={'/assets/img/user/default_avatar.png'}
										/>
										<span className={classes.userLoginName}>Đăng Nhập</span>
									</Link>
								)}
							</Box>
							<ArrowForwardIosIcon
								onClick={toggleIsShowMobileMenu}
								style={{
									color: '#888',
									cursor: 'pointer',
								}}
							/>
						</Box>
						<List className={classes.mobileMenuList}>
							<ListItem style={{ width: 'unset' }} alignItems='center'>
								<LinkMui
									onClick={toggleIsShowMobileMenu}
									className={classes.mobileMenuItemLink}
									href='#lich-chieu'
								>
									Lịch Chiếu
								</LinkMui>
							</ListItem>
							<ListItem style={{ width: 'unset' }} alignItems='center'>
								<LinkMui
									onClick={toggleIsShowMobileMenu}
									className={classes.mobileMenuItemLink}
									href='#cum-rap'
								>
									Cụm Rạp
								</LinkMui>
							</ListItem>
							<ListItem style={{ width: 'unset' }} alignItems='center'>
								<LinkMui
									onClick={toggleIsShowMobileMenu}
									className={classes.mobileMenuItemLink}
									href='#tin-tuc'
								>
									Tin Tức
								</LinkMui>
							</ListItem>
							<ListItem style={{ width: 'unset' }} alignItems='center'>
								<LinkMui
									onClick={toggleIsShowMobileMenu}
									className={classes.mobileMenuItemLink}
									href='#ung-dung'
								>
									Ứng Dụng
								</LinkMui>
							</ListItem>
							<ListItem style={{ width: 'unset' }} alignItems='center'>
								<Box
									onClick={toggleIsShowLocationListMobile}
									className={classes.mobileMenuItemLink}
									style={{ cursor: 'pointer' }}
								>
									{currentLocation}
								</Box>
							</ListItem>
						</List>
					</Box>
				</Slide>
			</Modal>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modalCenter}
				open={isShowLocationListMobile}
				onClose={toggleIsShowLocationListMobile}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 0,
				}}
			>
				<Box
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						outline: 'none',
					}}
				>
					<List className={classes.locationList}>
						{LocationData.map((location, index) => (
							<ListItem
								id={location.code}
								key={index}
								onClick={handleSelectLocation}
								className={classes.locationListItem}
							>
								{location.name}
							</ListItem>
						))}
					</List>
				</Box>
			</Modal>
		</Fragment>
	);
}

MobileMenu.propTypes = {
	isLogin: PropTypes.bool.isRequired,
	currentLocation: PropTypes.string.isRequired,
	LocationData: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			code: PropTypes.string,
		})
	).isRequired,
	isShowMobileMenu: PropTypes.bool.isRequired,
	toggleIsShowMobileMenu: PropTypes.func.isRequired,
	isShowLocationListMobile: PropTypes.bool.isRequired,
	toggleIsShowLocationListMobile: PropTypes.func.isRequired,
	handleSelectLocation: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
	isLogin: false,
	currentLocation: 'Hồ Chí Minh',
	LocationData: [
		{
			id: 1,
			name: 'Hồ Chí Minh',
			code: 'HoChiMinh',
		},
	],
	isShowMobileMenu: false,
	toggleIsShowMobileMenu: undefined,
	isShowLocationListMobile: false,
	toggleIsShowLocationListMobile: undefined,
	handleSelectLocation: undefined,
};
