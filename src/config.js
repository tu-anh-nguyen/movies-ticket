import { Home, Login, Register } from './pages';

export const mainRouter = [
	{
		path: '/',
		exact: true,
		Component: Home,
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
