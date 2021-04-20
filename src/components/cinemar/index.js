import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { system, cineplex } from './data';
import './style.scss';
function renderCineplexList(list = system) {
	return (
		<Box display='flex' width='100%' padding='1rem 0' alignItems='center'>
			{list.map((item, index) => (
				<Grid item>
					<img
						className='cinema-logo-cineplex'
						src={item.logo}
						alt={item.biDanh}
						key={index}
						onClick={() => console.log({ item })}
					/>
				</Grid>
			))}
		</Box>
	);
}
function renderCinemaList(list = cineplex) {
	const temp = Math.floor(Math.random() * 2) + 1;
	let id = 0;
	return list.map((item, index) => (
		<Box
			display='flex'
			width='100%'
			padding='1rem 0 1rem 1rem'
			marginLeft='1rem'
			alignItems='center'
			borderLeft='1px solid'
			onClick={() => {
				id = index;
				console.log({ id });
			}}
			{...(id === index ? { css: { opacity: 1 } } : { css: { opacity: 0.5 } })}
		>
			<Box>
				<img
					className='cinema-logo-cinema'
					src={`/assets/img/cinema/${temp}${
						Math.floor(Math.random() * 6) + 1
					}.png`}
					alt={item.biDanh}
					key={index}
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
	return (
		<Grid container justify='center'>
			<Grid item xs={12} md={1} justify='center'>
				{renderCineplexList()}
			</Grid>
			<Grid item xs={12} sm={6} md={5} lg={4}>
				{renderCinemaList()}
			</Grid>
			<Grid item xs={12} sm={6} lg={7} />
		</Grid>
	);
}
export default CinemaList;
