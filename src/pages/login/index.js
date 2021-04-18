import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LinkMui from '@material-ui/core/Link';
import SmsIcon from '@material-ui/icons/Sms';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	loginBackground: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundImage: 'url(/assets/img/user/login_background.jfif)',
		backgroundPosition: 'center',
		backgroundRepeat: 'repeat',
		backgroundSize: 'contain',
	},
	headerButton: {
		height: '40px',
		lineHeight: '40px',
		bgcolor: 'transparent',
		color: 'black',
		fontSize: '22px',
		fontWeight: '500',
		userSelect: 'none',
		cursor: 'default',
	},
	headerButtonPrimary: {
		height: '40px',
		lineHeight: '40px',
		bgcolor: 'transparent',
		color: 'var(--primary-color)',
		fontSize: '18px',
		fontWeight: '500',
		userSelect: 'none',
		cursor: 'pointer',
		textDecoration: 'none !important',
		'&:hover': {
			color: 'var(--primary-color)',
		},
	},
	formBodyGroup: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '10px',
		'&::first-child': {
			marginTop: '0',
		},
	},
	formBodyGroupInput: {
		'& label.Mui-focused': {
			color: '#444',
		},
		'& .MuiInputLabel-outlined': {
			transform: 'translate(14px, 14px) scale(1)',
		},
		'& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
			transform: 'translate(14px, -6px) scale(0.75)',
		},
		'& .MuiOutlinedInput-root': {
			height: '44px',
			'&.Mui-focused fieldset': {
				borderColor: '#666',
			},
			'& .MuiInputBase-input': {
				height: '44px',
				padding: '0 14px',
			},
		},
	},
	formBodySupportLink: {
		textDecoration: 'none !important',
		color: '#888',
		fontSize: '16px',
		fontWeight: '500',
		'&:hover': {
			color: '#888',
		},
	},
	formBodyBtn: {
		textDecoration: 'none !important',
		cursor: 'pointer',
		height: '36px',
		minWidth: '130px',
		lineHeight: '36px',
		backgroundColor: 'transparent',
		borderRadius: '2px',
		fontSize: '14px',
		fontWeight: '500',
		color: 'rgb(75, 75, 75)',
		textAlign: 'center',
		marginLeft: '20px',
		'&:hover': {
			color: 'rgb(75, 75, 75)',
		},
	},
	formFooterList: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '14px 30px',
		backgroundColor: '#e9e8e9',
	},
	formFooterItem: {
		display: 'flex',
		alignItems: 'center',
		height: '36px',
		minWidth: '140px',
		padding: '0 10px',
		borderRadius: '4px',
		cursor: 'pointer',
	},
	formFooterItemLabel: {
		flex: '1 !important',
		fontSize: '16px',
		fontWeight: '500',
		color: 'white',
		textAlign: 'center !important',
	},
}));

export default function LoginPage() {
	const classes = useStyles();
	const [userName, setUserName] = React.useState('');
	const [userPassword, setUserPassword] = React.useState('');
	const [userNameErrorMsg, setUserNameErrorMsg] = React.useState(false);
	const [userPasswordErrorMsg, setUserPasswordErrorMsg] = React.useState(false);

	const onUserNameChange = (event) => {
		setUserName(event.target.value);

		if (event.target.value.length > 0) {
			setUserNameErrorMsg(false);
		}
	};

	const onUserPasswordChange = (event) => {
		setUserPassword(event.target.value);

		if (event.target.value.length > 0) {
			setUserPasswordErrorMsg(false);
		}
	};

	const handleLoginButton = () => {
		let EnableSubmit = true;

		if (userName.trim().length === 0) {
			EnableSubmit = false;
			setUserNameErrorMsg(true);
		}

		if (userPassword.length === 0) {
			EnableSubmit = false;
			setUserPasswordErrorMsg(true);
		}

		if (EnableSubmit) {
			console.log('Login:');
			console.log('UserName: ', userName);
			console.log('UserPassword: ', userPassword);
		}
	};

	return (
		<Box className={classes.loginBackground}>
			{/* Container */}
			<Box
				width='500px'
				bgcolor='rgba(255, 255, 255, 0.8)'
				borderRadius='4px'
				overflow='hidden'
			>
				{/* Form header */}
				<Box
					display='flex'
					alignItems='center'
					justifyContent='space-between'
					padding='20px 38px'
				>
					<Box className={classes.headerButton}>Đăng Nhập</Box>
					<Link className={classes.headerButtonPrimary} to='/dang-ky/'>
						Đăng Ký
					</Link>
				</Box>
				{/* Form body */}
				<Box padding='20px 30px'>
					{/* User name */}
					<Box className={classes.formBodyGroup}>
						<TextField
							onChange={onUserNameChange}
							className={classes.formBodyGroupInput}
							label='Email/Số điện thoại/Tên đăng nhập'
							variant='outlined'
							value={userName}
						/>
						{userNameErrorMsg && (
							<Box padding='4px 0' color='red'>
								Vui lòng nhập tên đăng nhập!
							</Box>
						)}
					</Box>
					{/* Password */}
					<Box className={classes.formBodyGroup}>
						<TextField
							onChange={onUserPasswordChange}
							className={classes.formBodyGroupInput}
							label='Mật khẩu'
							variant='outlined'
							type='Password'
							value={userPassword}
						/>
						{userPasswordErrorMsg && (
							<Box padding='4px 0' color='red'>
								Vui lòng nhập mật khẩu!
							</Box>
						)}
					</Box>
					{/* Support */}
					<Box
						display='flex'
						alignItems='center'
						justifyContent='flex-end'
						margin='14px 0'
					>
						<LinkMui
							className={classes.formBodySupportLink}
							style={{ color: 'var(--primary-color)' }}
							href='#'
						>
							Quên mật khẩu
						</LinkMui>
						<Box
							height='22px'
							borderLeft='1px solid rgb(158, 158, 158)'
							margin='0 12px'
						></Box>
						<LinkMui className={classes.formBodySupportLink} href='#'>
							Cần trợ giúp
						</LinkMui>
					</Box>
					{/* Main button */}
					<Box
						display='flex'
						alignItems='center'
						justifyContent='flex-end'
						marginTop='100px'
					>
						<Link className={classes.formBodyBtn} to='/'>
							TRỞ LẠI
						</Link>
						<Box
							onClick={handleLoginButton}
							className={classes.formBodyBtn}
							style={{
								color: 'white',
								backgroundColor: 'var(--primary-color)',
							}}
						>
							ĐĂNG NHẬP
						</Box>
					</Box>
				</Box>
				{/* Form footer */}
				<Box className={classes.formFooterList}>
					{/* SMS button */}
					<Box className={classes.formFooterItem} bgcolor='#13a10d'>
						<SmsIcon style={{ color: 'white' }} />
						<Box className={classes.formFooterItemLabel}>SMS</Box>
					</Box>
					{/* Facebook button */}
					<Box className={classes.formFooterItem} bgcolor='#314b86'>
						<FacebookIcon style={{ color: 'white' }} />
						<Box className={classes.formFooterItemLabel}>Facebook</Box>
					</Box>
					{/* Google button */}
					<Box className={classes.formFooterItem} bgcolor='#f04747'>
						<EmailIcon style={{ color: 'white' }} />
						<Box className={classes.formFooterItemLabel}>Google</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
