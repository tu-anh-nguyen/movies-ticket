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
	}, []);
	console.log({ maPhim: JSON.parse(maPhim) });
	console.log({ movieDetail: movieDetail.maPhim });
	if (movieDetail.maPhim !== JSON.parse(maPhim)) return <p>Loading..</p>;
	return (
		<Box padding='5rem 0'>
			<Container maxWidth='md'>
				<MovieDetail data={movieDetail} />
			</Container>
		</Box>
	);
}

export default Detail;
