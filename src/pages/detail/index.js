import React, { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import { MovieDetail } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import MovieAction from '../../redux/action/movie';
import { useParams } from 'react-router-dom';

function Detail() {
	const movieDetail = useSelector((state) => state.movie.detail);
	const dispatch = useDispatch();
	const { movieId: maPhim } = useParams();
	useEffect(() => {
		dispatch(MovieAction.fetchDetail({ maPhim }));
	}, [dispatch, maPhim]);
	if (movieDetail.length === 0) return <p>Loading..</p>;
	return (
		<Box className='home'>
			<Container maxWidth='md'>
				<MovieDetail data={movieDetail} />
			</Container>
		</Box>
	);
}

export default Detail;
