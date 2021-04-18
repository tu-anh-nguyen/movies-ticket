import React from 'react';
import { Box, Container } from '@material-ui/core';

import NavHeader from '../../components/header';
import MyCarousel from '../../components/carousel';
import HomeTool from '../../components/home-tool';
import MovieList from '../../components/movie-list';
import Footer from '../../components/footer';

export default function HomePage() {
	const [currentLocation, setCurrentLocation] = React.useState('Hồ Chí Minh');
	const isLogin = false;

	return (
		<Box className='home'>
			<NavHeader
				isLogin={isLogin}
				currentLocation={currentLocation}
				setCurrentLocation={setCurrentLocation}
			/>
			<Box marginTop='60px'></Box>

			<MyCarousel />
			<Box position='relative'>
				<HomeTool />
			</Box>
			<Box id='lich-chieu'>
				<Container maxWidth='md'>
					<MovieList />
				</Container>
			</Box>
			<Box
				id='cum-rap'
				style={{
					height: '1000px',
					backgroundColor: 'yellow',
					opacity: '0.3',
				}}
			></Box>
			<Box
				id='tin-tuc'
				style={{ height: '1000px', backgroundColor: 'green', opacity: '0.3' }}
			></Box>
			<Box id='ung-dung' css={{ backgroundColor: '#222222' }}>
				<Container maxWidth='md'>
					<Footer />
				</Container>
			</Box>
		</Box>
	);
}
