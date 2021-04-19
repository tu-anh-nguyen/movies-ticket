import { Detail, Home, Login, Register } from './pages';

export const mainRouter = [
	{
		path: '/',
		exact: true,
		Component: Home,
	},
	{
		path: '/movie/:movieId',
		exact: true,
		Component: Detail,
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
