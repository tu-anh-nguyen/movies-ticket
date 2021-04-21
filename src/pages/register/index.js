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
	formBodyPolicyLink: {
		textDecoration: 'none !important',
		fontSize: '14px',
		fontWeight: '500',
		color: 'var(--primary-color)',
		'&:hover': {
			color: 'var(--primary-color)',
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

export default function RegisterPage() {
	const classes = useStyles();
	const [userName, setUserName] = React.useState('');
	const [userPassword, setUserPassword] = React.useState('');
	const [userPasswordConfirm, setUserPasswordConfirm] = React.useState('');

	const [userNameErrorMsg, setUserNameErrorMsg] = React.useState(false);
	const [userPasswordErrorMsg, setUserPasswordErrorMsg] = React.useState(false);
	const [
		userPasswordConfirmErrorMsg,
		setUserPasswordConfirmErrorMsg,
	] = React.useState(false);

	const onUserNameChange = (event) => {
		setUserName(event.target.value);

		if (event.target.value.length >= 8) {
			setUserNameErrorMsg(false);
		}
	};

	const onUserPasswordChange = (event) => {
		setUserPassword(event.target.value);

		if (event.target.value.length >= 8) {
			setUserPasswordErrorMsg(false);
		}
	};

	const onUserPasswordConfirmChange = (event) => {
		setUserPasswordConfirm(event.target.value);

		if (event.target.value === userPassword) {
			setUserPasswordConfirmErrorMsg(false);
		}
	};

	const handleRegisterButton = () => {
		let EnableSubmit = true;

		if (userName.length < 8) {
			EnableSubmit = false;
			setUserNameErrorMsg(true);
		}

		if (userPassword.length < 8) {
			EnableSubmit = false;
			setUserPasswordErrorMsg(true);
		}

		if (userPasswordConfirm !== userPassword) {
			EnableSubmit = false;
			setUserPasswordConfirmErrorMsg(true);
		}

		if (EnableSubmit) {
			console.log('Register:');
			console.log('UserName: ', userName);
			console.log('UserPassword: ', userPassword);
			console.log('UserPasswordConfirm: ', userPasswordConfirm);
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
					<Box className={classes.headerButton}>Đăng Ký</Box>
					<Link className={classes.headerButtonPrimary} to='/login/'>
						Đăng Nhập
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
								Tên đăng nhập phải có ít nhất 8 ký tự!
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
								Mật khẩu phải có ít nhất 8 ký tự!
							</Box>
						)}
					</Box>
					{/* Confirm password */}
					<Box className={classes.formBodyGroup}>
						<TextField
							onChange={onUserPasswordConfirmChange}
							className={classes.formBodyGroupInput}
							label='Nhập lại mật khẩu'
							variant='outlined'
							type='Password'
							value={userPasswordConfirm}
						/>
						{userPasswordConfirmErrorMsg && (
							<Box padding='4px 0' color='red'>
								Mật khẩu xác nhận không đúng!
							</Box>
						)}
					</Box>
					{/* Policy */}
					<Box
						display='inline-block'
						textAlign='center'
						margin='14px 10px'
						fontSize='14px'
						fontWeight='500'
					>
						Bằng việc đăng ký, bạn đã đồng ý với TIX về{' '}
						<LinkMui className={classes.formBodyPolicyLink} href='#'>
							Điều khoản dịch vụ
						</LinkMui>{' '}
						và{' '}
						<LinkMui className={classes.formBodyPolicyLink} href='#'>
							Chính sách bảo mật
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
							onClick={handleRegisterButton}
							className={classes.formBodyBtn}
							style={{
								color: 'white',
								backgroundColor: 'var(--primary-color)',
							}}
						>
							ĐĂNG KÝ
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
