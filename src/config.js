import { Booking, Detail, Home, Login, Register } from './pages';

export const mainRouter = [
	{
		path: '/',
		exact: true,
		Component: Home,
	},
	{
		path: '/movie/:movieId',
		exact: false,
		Component: Detail,
	},
	{
		path: '/booking/:movieId',
		exact: false,
		Component: Booking,
	},
];
export const adminRouter = [];

export const userRouter = [
	{
		path: '/login',
		exact: true,
		Component: Login,
	},
	{
		path: '/register',
		exact: true,
		Component: Register,
	},
];
