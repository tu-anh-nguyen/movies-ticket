import React, { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';

import { Carousel, MovieList, HomeTool } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import MovieAction from '../../redux/action/movie';

export default function HomePage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(MovieAction.fetchList());
	}, []);
	const movieList = useSelector((state) => state.movie.list);

	console.log(movieList);
	return (
		<Box className='home'>
			<Carousel />
			<Box position='relative'>
				<HomeTool />
			</Box>
			<Box id='lich-chieu'>
				<Container maxWidth='md'>
					<MovieList data={movieList} />
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
		</Box>
	);
}
