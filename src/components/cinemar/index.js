/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import TheaterAction from '../../redux/action/theater';
function renderChainList(list, setChainId) {
	return (
		<Box
			display='flex'
			flexDirection='column'
			width='100%'
			padding='1rem 0'
			alignItems='center'
		>
			{list?.map((item, index) => (
				<Grid item key={item.maHeThongRap}>
					<img
						className='cinema-logo-cineplex'
						src={item.logo}
						alt={item.biDanh}
						onClick={() => setChainId(item.maHeThongRap)}
					/>
				</Grid>
			))}
		</Box>
	);
}

function renderCineplexList(list, setCineplex) {
	const temp = Math.floor(Math.random() * 2) + 1;
	let id = 0;
	return list?.map((item, index) => (
		<Box
			display='flex'
			width='100%'
			padding='1rem 0 1rem 1rem'
			marginLeft='1rem'
			alignItems='center'
			key={item.maCumRap}
			borderLeft='1px solid'
			onClick={() => setCineplex(item.maCumRap)}
			{...(id === index ? { css: { opacity: 1 } } : { css: { opacity: 0.5 } })}
		>
			<Box>
				<img
					className='cinema-logo-cinema'
					src={`/assets/img/cinema/${temp}${
						Math.floor(Math.random() * 6) + 1
					}.png`}
					alt={item.biDanh}
					onClick={() => console.log({ item })}
				/>
			</Box>
			<Box paddingLeft={4} textOverflow='ellipsis' overflow='hidden'>
				<Typography
					className='cinema-cinema-preCode'
					component='span'
					noWrap
					variant='inherit'
				>
					{item.tenCumRap.slice(0, item.tenCumRap.indexOf('-') - 1)}
				</Typography>
				<Typography
					className='cinema-cinema-name'
					component='span'
					noWrap
					variant='inherit'
				>
					{item.tenCumRap.slice(item.tenCumRap.indexOf('-') + 1)}
				</Typography>
				<Typography
					className='cinema-cinema-address'
					component='p'
					noWrap
					variant='body2'
				>
					{item.diaChi}
				</Typography>
				<Typography
					className='cinema-cinema-map'
					component='a'
					noWrap
					variant='button'
				>
					Google map..
				</Typography>
			</Box>
		</Box>
	));
}
function CinemaList() {
	const dispatch = useDispatch();
	const { showingTimeList: data } = useSelector((state) => state.theater);
	// const [cineplexList, setCineplexList] = useState(data[0]?.lstCumRap || []);
	// const [filmList, setFilmList] = useState(cineplexList[0]?.danhSachPhim || []);

	// const [chainId, setChainId] = useState(data[0]?.maHeThongRap);
	// const [cineplexId, setCineplexId] = useState(cineplexList[0]?.maCumRap);
	// useEffect(() => {
	// 	const temp = Object.values(data).find(
	// 		(item) => item.maHeThongRap === chainId
	// 	);
	// 	setCineplexList(temp);
	// }, [chainId]);
	useEffect(() => {
		dispatch(TheaterAction.fetchShowTimeCinema());
	}, []);
	console.log({ data });
	// console.log({ cineplexList });
	return (
		<Grid container justify='center'>
			<Grid item xs={12} md={1} justify='center'>
				{renderChainList(data)}
			</Grid>
			<Grid item xs={12} sm={6} md={5} lg={4}>
				{/* {renderCineplexList(cineplexList, setCineplexId)} */}
			</Grid>
			<Grid item xs={12} sm={6} lg={7} />
		</Grid>
	);
}
export default CinemaList;
