import { Route } from 'react-router-dom';

const Layout = (props) => {
	return <main>{props.children}</main>;
};

const RouteUser = (props) => {
	const { Component, ...routes } = props;
	return (
		<Route {...routes}>
			<Layout>
				<Component />
			</Layout>
		</Route>
	);
};

export default RouteUser;
