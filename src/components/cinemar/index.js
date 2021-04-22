/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import TheaterAction from '../../redux/action/theater';
import ChainList from './chainList';
import CineplexList from './cineplex';
import FilmList from './filmList';

function CinemaList() {
	const dispatch = useDispatch();
	const { showingTimeList: data } = useSelector((state) => state.theater);
	const [chainId, setChainId] = useState();
	const [cineplexList, setCineplexList] = useState([]);
	const [cineplexId, setCineplexId] = useState();
	const [filmList, setFilmList] = useState();

	/** Fetch data showing time */
	useEffect(() => {
		dispatch(TheaterAction.fetchShowTimeCinema());
	}, []);

	/** Select first cinema chain and cineplex */
	useEffect(() => {
		setChainId(data[0].maHeThongRap);
		setCineplexList(data[0].lstCumRap);
	}, [data]);

	/** Set cineplex when select chainId */
	useEffect(() => {
		const tempCineplex = data.find(
			(element) => element.maHeThongRap === chainId
		);
		console.log({ tempCineplex });
		setCineplexId(tempCineplex?.lstCumRap[0].maCumRap);
		setCineplexList(tempCineplex?.lstCumRap);
	}, [chainId]);
	useEffect(() => {
		const tempCinema = cineplexList.find(
			(element) => element.maCumRap === cineplexId
		);
		console.log({ tempCinema });
		setFilmList(tempCinema?.danhSachPhim);
	}, [cineplexId]);
	console.log({ filmList });
	return (
		<Grid container justify='center' spacing={4} className='spacing'>
			<Grid item xs={12} md={1}>
				<ChainList list={data} setChainId={setChainId} chainId={chainId} />
			</Grid>
			<Grid item xs={12} sm={6} md={5} lg={4}>
				{cineplexList && (
					<CineplexList
						list={cineplexList}
						setCineplexId={setCineplexId}
						cineplexId={cineplexId}
					/>
				)}
			</Grid>
			<Grid item xs={12} sm={6} lg={7}>
				{filmList && <FilmList list={filmList} />}
			</Grid>
		</Grid>
	);
}
export default CinemaList;
