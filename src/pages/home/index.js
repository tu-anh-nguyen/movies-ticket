import React, { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import { Carousel, MovieList, HomeTool } from '../../components';
import { useSelector, useDispatch, connect } from 'react-redux';
import MovieAction from '../../redux/action/movie';

function HomePage() {
	const movieList = useSelector((state) => state.movie.list);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(MovieAction.fetchList());
	}, [dispatch]);
	if (movieList.length === 0) return <p>Loading..</p>;
	console.log(movieList);
	return (
		<Box className='home'>
			<Carousel />
			<Box position='relative' paddingBottom='3rem'>
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

export default connect()(HomePage);
