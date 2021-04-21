import { Route } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';
import { Header, Footer } from '../../components';

const Layout = (props) => {
	return (
		<>
			<Header />
			<Box
				css={{
					backgroundImage: 'url(/assets/img/bg-details.jpg)',
					backgroundSize: 'cover',
					backgroundRepeat: 'repeat-y',
					backgroundPosition: 'fixed',
					marginTop: '60px',
				}}
			>
				{props.children}
			</Box>
			<Box css={{ backgroundColor: '#222222' }}>
				<Container maxWidth='md'>
					<Footer />
				</Container>
			</Box>
		</>
	);
};

const RouteMain = (props) => {
	const { Component, ...routes } = props;
	return (
		<Route {...routes}>
			<Layout>
				<Component />
			</Layout>
		</Route>
	);
};

export default RouteMain;
