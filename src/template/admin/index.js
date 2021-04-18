import { Route } from 'react-router-dom';
import { Header, Footer } from '../../components';

const Layout = (props) => {
	return (
		<>
			<Header />
			<main style={{ marginTop: '50px' }}>{props.children}</main>
			<Footer />
		</>
	);
};

const RouteAdmin = (props) => {
	const { Component, ...routes } = props;
	return (
		<Route {...routes}>
			<Layout>
				<Component />
			</Layout>
		</Route>
	);
};

export default RouteAdmin;
