import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
	homeTool: {
		position: 'absolute',
		top: '0',
		left: '50%',
		width: '940px',
		height: '80px',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'white',
		zIndex: '1',
		borderRadius: '4px',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 10px',
		boxShadow: '2px 2px 10px 2px rgba(0, 0, 0, 0.3)',
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	homeToolGroup: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		width: 'calc(70% / 4)',
		height: '60px',
		padding: '0 10px',
	},
	horizontalSeparate: {
		height: '38px',
		borderRight: '1px solid rgb(210, 210, 210)',
	},
	dropDownIcon: {
		color: '#888',
		marginRight: 0,
		marginLeft: 'auto',
	},
	dropMenuContainer: {
		position: 'absolute',
		top: '80%',
		left: '0',
		border: '1px solid rgb(210, 210, 210)',
		borderRadius: '4px',
		overflow: 'hidden',
		zIndex: '1',
	},
	dropDownMenuList: {
		width: '100%',
		maxHeight: '300px',
		overflowY: 'auto',
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
	dropDownMenuItem: {
		padding: '4px 18px',
		fontSize: '14px',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: 'var(--primary-color)',
			color: 'white',
		},
	},
}));

const BuyTicketButton = withStyles({
	root: {
		background: '#333',
		borderRadius: '4px',
		border: 0,
		color: 'white',
		height: '40px',
		width: '146px',
		'&:hover': {
			background: '#fb4226',
		},
	},
	label: {
		textTransform: 'capitalize',
	},
})(Button);

const FilmListData = [
	{ code: '3211', name: 'Film 1' },
	{ code: '3212', name: 'Film 2' },
	{ code: '3213', name: 'Film 3' },
	{ code: '3214', name: 'Film 4' },
	{ code: '3215', name: 'Film 5' },
	{ code: '3216', name: 'Film 6' },
	{ code: '3217', name: 'Film 7' },
	{ code: '3218', name: 'Film 8' },
	{ code: '3219', name: 'Film 9' },
	{ code: '3220', name: 'Film 10' },
	{ code: '3221', name: 'Film 11' },
	{ code: '3222', name: 'Film 12' },
	{ code: '3223', name: 'Film 13' },
	{ code: '3224', name: 'Film 14' },
	{ code: '3225', name: 'Film 15' },
];

const CinemaListData = [
	{ code: '8001', name: 'Cinema 1' },
	{ code: '8002', name: 'Cinema 2' },
	{ code: '8003', name: 'Cinema 3' },
	{ code: '8004', name: 'Cinema 4' },
	{ code: '8005', name: 'Cinema 5' },
	{ code: '8006', name: 'Cinema 6' },
	{ code: '8007', name: 'Cinema 7' },
	{ code: '8008', name: 'Cinema 8' },
	{ code: '8009', name: 'Cinema 9' },
	{ code: '8010', name: 'Cinema 10' },
	{ code: '8011', name: 'Cinema 11' },
	{ code: '8012', name: 'Cinema 12' },
	{ code: '8013', name: 'Cinema 13' },
	{ code: '8014', name: 'Cinema 14' },
	{ code: '8015', name: 'Cinema 15' },
];

const DateListData = [
	{ code: '5001', name: 'Date 1' },
	{ code: '5002', name: 'Date 2' },
	{ code: '5003', name: 'Date 3' },
	{ code: '5004', name: 'Date 4' },
	{ code: '5005', name: 'Date 5' },
	{ code: '5006', name: 'Date 6' },
	{ code: '5007', name: 'Date 7' },
	{ code: '5008', name: 'Date 8' },
	{ code: '5009', name: 'Date 9' },
	{ code: '5010', name: 'Date 10' },
	{ code: '5011', name: 'Date 11' },
	{ code: '5012', name: 'Date 12' },
	{ code: '5013', name: 'Date 13' },
	{ code: '5014', name: 'Date 14' },
	{ code: '5015', name: 'Date 15' },
];

const SessionListData = [
	{ code: '7001', name: 'Session 1' },
	{ code: '7002', name: 'Session 2' },
	{ code: '7003', name: 'Session 3' },
	{ code: '7004', name: 'Session 4' },
	{ code: '7005', name: 'Session 5' },
	{ code: '7006', name: 'Session 6' },
	{ code: '7007', name: 'Session 7' },
	{ code: '7008', name: 'Session 8' },
	{ code: '7009', name: 'Session 9' },
	{ code: '7010', name: 'Session 10' },
	{ code: '7011', name: 'Session 11' },
	{ code: '7012', name: 'Session 12' },
	{ code: '7013', name: 'Session 13' },
	{ code: '7014', name: 'Session 14' },
	{ code: '7015', name: 'Session 15' },
];

export default function HomeTool() {
	const classes = useStyles();
	const [isShowFilmList, setIsShowFilmList] = React.useState(false);
	const [isShowCinemaList, setIsShowCinemaList] = React.useState(false);
	const [isShowDateList, setIsShowDateList] = React.useState(false);
	const [isShowSessionList, setIsShowSessionList] = React.useState(false);

	const [currentFilm, setCurrentFilm] = React.useState('');
	const [currentCinema, setCurrentCinema] = React.useState('');
	const [currentDate, setCurrentDate] = React.useState('');
	const [currentSession, setCurrentSession] = React.useState('');

	const [filmList, setFilmList] = React.useState(FilmListData);
	const [cinemaList, setCinemaList] = React.useState([
		{
			code: '',
			name: 'Vui lòng chọn phim',
		},
	]);
	const [dateList, setDateList] = React.useState([
		{
			code: '',
			name: 'Vui lòng chọn rạp',
		},
	]);
	const [sessionList, setSessionList] = React.useState([
		{
			code: '',
			name: 'Vui lòng chọn ngày',
		},
	]);

	const toggleIsShowFilmList = () => {
		setIsShowFilmList(!isShowFilmList);
	};

	const toggleIsShowCinemaList = () => {
		setIsShowCinemaList(!isShowCinemaList);
	};

	const toggleIsShowDateList = () => {
		setIsShowDateList(!isShowDateList);
	};

	const toggleIsShowSessionList = () => {
		setIsShowSessionList(!isShowSessionList);
	};

	const handleSelectFilm = (filmCode) => (event) => {
		setCurrentFilm(filmCode);

		setCurrentCinema('');
		setCinemaList(CinemaListData);

		setCurrentDate('');
		setDateList([{ code: '', name: 'Vui lòng chọn rạp' }]);

		setCurrentSession('');
		setSessionList([{ code: '', name: 'Vui lòng chọn ngày' }]);
	};

	const handleSelectCinema = (cinemaCode) => (event) => {
		if (currentFilm !== '') {
			setCurrentCinema(cinemaCode);

			setCurrentDate('');
			setDateList(DateListData);

			setCurrentSession('');
			setSessionList([{ code: '', name: 'Vui lòng chọn ngày' }]);
		}
	};

	const handleSelectDate = (dateCode) => (event) => {
		if (currentCinema !== '') {
			setCurrentDate(dateCode);

			setCurrentSession('');
			setSessionList(SessionListData);
		}
	};

	const handleSelectSession = (sessionCode) => (event) => {
		if (currentDate !== '') {
			setCurrentSession(sessionCode);
		}
	};

	const getNameFromCode = (listData, code) => () => {
		let itemIndex = listData.findIndex((item) => item.code === code);
		let name = 'None value';
		if (itemIndex !== -1) {
			name = listData[itemIndex].name;
		}

		return name;
	};

	const handleBuyTicket = () => {
		if (
			currentFilm !== '' &&
			currentCinema !== '' &&
			currentDate !== '' &&
			currentSession !== ''
		) {
			console.log('Buy Ticket:');
			console.log('Film Code: ', currentFilm);
			console.log('Cinema Code:', currentCinema);
			console.log('Date Code: ', currentDate);
			console.log('Session Code: ', currentSession);
		}
	};

	return (
		<Box className={classes.homeTool}>
			<Box
				onClick={toggleIsShowFilmList}
				className={classes.homeToolGroup}
				style={{ width: '30%' }}
			>
				<Box component='span' color='black' fontSize='14px' fontWeight='500'>
					{currentFilm === '' ? 'Phim' : getNameFromCode(filmList, currentFilm)}
				</Box>
				<KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
				{isShowFilmList && (
					<ClickAwayListener onClickAway={toggleIsShowFilmList}>
						<Box
							className={classes.dropMenuContainer}
							style={{ width: '600px' }}
						>
							<List className={classes.dropDownMenuList}>
								{filmList.map((filmName, index) => (
									<ListItem
										onClick={handleSelectFilm(filmName.code)}
										key={index}
										className={classes.dropDownMenuItem}
									>
										{filmName.name}
									</ListItem>
								))}
							</List>
						</Box>
					</ClickAwayListener>
				)}
			</Box>
			<Box className={classes.horizontalSeparate}></Box>
			<Box onClick={toggleIsShowCinemaList} className={classes.homeToolGroup}>
				<Box component='span' color='black' fontSize='14px' fontWeight='500'>
					{currentCinema === ''
						? 'Rạp'
						: getNameFromCode(cinemaList, currentCinema)}
				</Box>
				<KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
				{isShowCinemaList && (
					<ClickAwayListener onClickAway={toggleIsShowCinemaList}>
						<Box
							className={classes.dropMenuContainer}
							style={{ minWidth: '200px' }}
						>
							<List className={classes.dropDownMenuList}>
								{cinemaList.map((cinema, index) => (
									<ListItem
										onClick={handleSelectCinema(cinema.code)}
										key={index}
										className={classes.dropDownMenuItem}
									>
										{cinema.name}
									</ListItem>
								))}
							</List>
						</Box>
					</ClickAwayListener>
				)}
			</Box>
			<Box className={classes.horizontalSeparate}></Box>
			<Box onClick={toggleIsShowDateList} className={classes.homeToolGroup}>
				<Box component='span' color='black' fontSize='14px' fontWeight='500'>
					{currentDate === ''
						? 'Ngày xem'
						: getNameFromCode(dateList, currentDate)}
				</Box>
				<KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
				{isShowDateList && (
					<ClickAwayListener onClickAway={toggleIsShowDateList}>
						<Box
							className={classes.dropMenuContainer}
							style={{ minWidth: '200px' }}
						>
							<List className={classes.dropDownMenuList}>
								{dateList.map((date, index) => (
									<ListItem
										onClick={handleSelectDate(date.code)}
										key={index}
										className={classes.dropDownMenuItem}
									>
										{date.name}
									</ListItem>
								))}
							</List>
						</Box>
					</ClickAwayListener>
				)}
			</Box>
			<Box className={classes.horizontalSeparate}></Box>
			<Box onClick={toggleIsShowSessionList} className={classes.homeToolGroup}>
				<Box component='span' color='black' fontSize='14px' fontWeight='500'>
					{currentSession === ''
						? 'Suất chiếu'
						: getNameFromCode(sessionList, currentSession)}
				</Box>
				<KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
				{isShowSessionList && (
					<ClickAwayListener onClickAway={toggleIsShowSessionList}>
						<Box
							className={classes.dropMenuContainer}
							style={{ minWidth: '200px' }}
						>
							<List className={classes.dropDownMenuList}>
								{sessionList.map((session, index) => (
									<ListItem
										onClick={handleSelectSession(session.code)}
										key={index}
										className={classes.dropDownMenuItem}
									>
										{session.name}
									</ListItem>
								))}
							</List>
						</Box>
					</ClickAwayListener>
				)}
			</Box>
			<Box className={classes.horizontalSeparate}></Box>
			<Box onClick={handleBuyTicket} className={classes.homeToolGroup}>
				<BuyTicketButton>MUA VÉ NGAY</BuyTicketButton>
			</Box>
		</Box>
	);
}

HomeTool.propTypes = {};

HomeTool.defaultProps = {};
