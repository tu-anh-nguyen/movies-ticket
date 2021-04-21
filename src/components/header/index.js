import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LinkMui from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import LocationData from './LocationData.json';

import MobileMenu from './MobileMenu';

const useStyles = makeStyles((theme) => ({
	mainMenuList: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			display: 'flex',
		},
	},
	mainMenuItemLink: {
		textDecoration: 'none !important',
		color: 'black',
		fontSize: '14px',
		fontWeight: '500',
		'&:hover': {
			color: 'var(--primary-color)',
		},
	},
	subMenuList: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			alignItems: 'center',
		},
	},
	userLoginLink: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none !important',
		cursor: 'pointer',
	},
	userLoginName: {
		paddingLeft: '10px',
		paddingRight: '10px',
		color: '#888',
		fontSize: '14px',
	},
	userLoginAvatar: {
		width: '32px',
		height: '32px',
	},
	userLoginMenuList: {
		position: 'absolute',
		top: '48px',
		left: '0',
		width: '100%',
		borderRadius: '4px',
		backgroundColor: 'white',
		padding: '10px 0',
	},
	userLoginMenuItem: {
		height: '34px',
		lineHeight: '34px',
		textAlign: 'center',
		borderRadius: '4px',
		fontSize: '14px',
		color: 'black',
		'&:hover': {
			backgroundColor: 'var(--primary-color)',
			color: 'white',
		},
		cursor: 'pointer',
		textDecoration: 'none !important',
		display: 'block',
	},
	locationList: {
		width: '160px',
		maxHeight: '300px',
		overflowY: 'scroll',
		backgroundColor: 'white',
		color: 'black',
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
		padding: '4px 18px',
		fontSize: '16px',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: 'var(--primary-color)',
			color: 'white',
		},
	},
	mobileMenu: {
		display: 'block',
		position: 'relative',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export default function NavHeader(props) {
	const classes = useStyles();
	const [currentLocation, setCurrentLocation] = useState('Hồ Chí Minh');
	const isLogin = false;
	const [isShowLocationList, setIsShowLocationList] = React.useState(false);
	const [
		isShowLocationListMobile,
		setIsShowLocationListMobile,
	] = React.useState(false);
	const [isShowMobileMenu, setIsShowMobileMenu] = React.useState(false);
	const [isLoginMenu, setIsShowLoginMenu] = React.useState(false);
	const userInfor = {
		name: 'Nguyễn Văn A',
		avatar: '/assets/img/user/default_avatar.png',
	};

	const toggleIsShowLocationList = () => {
		setIsShowLocationList(!isShowLocationList);
	};

	const toggleIsShowLocationListMobile = () => {
		setIsShowLocationListMobile(!isShowLocationListMobile);
	};

	const handleSelectLocation = (event) => {
		let locationIndex = LocationData.findIndex((location) => {
			return location.code === event.currentTarget.id;
		});

		if (locationIndex >= 0) {
			setCurrentLocation(LocationData[locationIndex].name);
		}
		setIsShowLocationList(false);
		setIsShowLocationListMobile(false);
	};

	const toggleIsShowMobileMenu = () => {
		setIsShowMobileMenu(!isShowMobileMenu);
	};

	const toggleIsShowLoginMenu = () => {
		setIsShowLoginMenu(!isLoginMenu);
	};

	const handleOnClickLogout = () => {
		setIsShowLoginMenu(false);
	};

	return (
		<AppBar
			style={{
				display: 'block',
				backgroundColor: 'rgba(255, 255, 255, 0.9)',
			}}
		>
			<Toolbar
				style={{
					minHeight: '60px',
					padding: '0 20px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box component='a' href='/' display='flex' alignItems='center'>
					<Box
						component='img'
						src={'/assets/img/logo/logo.png'}
						alt='Logo'
						width='50px'
						height='50px'
					></Box>
				</Box>
				<List className={classes.mainMenuList}>
					<ListItem style={{ width: 'unset' }} alignItems='center'>
						<LinkMui className={classes.mainMenuItemLink} href='#lich-chieu'>
							Lịch Chiếu
						</LinkMui>
					</ListItem>
					<ListItem style={{ width: 'unset' }} alignItems='center'>
						<LinkMui className={classes.mainMenuItemLink} href='#cum-rap'>
							Cụm Rạp
						</LinkMui>
					</ListItem>
					<ListItem style={{ width: 'unset' }} alignItems='center'>
						<LinkMui className={classes.mainMenuItemLink} href='#tin-tuc'>
							Tin Tức
						</LinkMui>
					</ListItem>
					<ListItem style={{ width: 'unset' }} alignItems='center'>
						<LinkMui className={classes.mainMenuItemLink} href='#ung-dung'>
							Ứng Dụng
						</LinkMui>
					</ListItem>
				</List>
				<Box className={classes.subMenuList}>
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
							<Link className={classes.userLoginLink} to='/login/'>
								<Avatar
									className={classes.userLoginAvatar}
									alt='User avatar'
									src={'/assets/img/user/default_avatar.png'}
								/>
								<span className={classes.userLoginName}>Đăng Nhập</span>
							</Link>
						)}
					</Box>
					<Box height='28px' borderRight='1px solid rgb(190, 190, 190)'></Box>
					<Box
						display='flex'
						minWidth='160px'
						alignItems='center'
						paddingLeft='10px'
						style={{ cursor: 'pointer' }}
						position='relative'
						onClick={toggleIsShowLocationList}
					>
						<LocationOnOutlinedIcon style={{ color: '#888' }} />
						<Box component='span' color='#888' fontSize='14px'>
							{currentLocation}
						</Box>
						<KeyboardArrowDownOutlinedIcon
							style={{
								color: '#888',
								marginRight: 0,
								marginLeft: 'auto',
							}}
						/>
						{isShowLocationList && (
							<ClickAwayListener onClickAway={toggleIsShowLocationList}>
								<Box
									position='absolute'
									top='44px'
									left='0'
									borderRadius='4px'
									overflow='hidden'
									boxShadow='2px 2px 6px 2px rgba(0,0,0, 0.2)'
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
							</ClickAwayListener>
						)}
					</Box>
				</Box>
				<Box className={classes.mobileMenu}>
					<MenuIcon
						onClick={toggleIsShowMobileMenu}
						style={{ color: '#888', cursor: 'pointer' }}
					/>
					<MobileMenu
						isLogin={isLogin}
						currentLocation={currentLocation}
						LocationData={LocationData}
						isShowMobileMenu={isShowMobileMenu}
						toggleIsShowMobileMenu={toggleIsShowMobileMenu}
						isShowLocationListMobile={isShowLocationListMobile}
						toggleIsShowLocationListMobile={toggleIsShowLocationListMobile}
						handleSelectLocation={handleSelectLocation}
					/>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

NavHeader.propTypes = {
	isLogin: PropTypes.bool.isRequired,
	currentLocation: PropTypes.string.isRequired,
	setCurrentLocation: PropTypes.func.isRequired,
};

NavHeader.defaultProps = {
	isLogin: false,
	currentLocation: 'Hồ Chí Minh',
	handleSelectLocation: undefined,
};
