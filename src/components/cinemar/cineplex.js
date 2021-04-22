import React from 'react';
import { Box, Typography } from '@material-ui/core';

const CineplexList = ({ list, setCineplexId, cineplexId }) => {
	console.log({ cineplexId });
	return list?.map((item, index) => (
		<Box
			display='flex'
			width='100%'
			padding='1rem 0 1rem 1rem'
			marginLeft='1rem'
			alignItems='center'
			key={item.maCumRap}
			borderLeft='1px solid'
			onClick={() => setCineplexId(item.maCumRap)}
			{...(cineplexId === item.maCumRap
				? { css: { opacity: 1 } }
				: { css: { opacity: 0.6 } })}
		>
			<Box>
				<img
					className='cinema-logo-cineplex'
					src={`/assets/img/cinema/${(item.tenCumRap.length % 2) + 1}${
						(item.tenCumRap.length % 6) + 1
					}.png`}
					alt={item.biDanh}
					onClick={() => console.log({ item })}
				/>
			</Box>
			<Box paddingLeft={4} textOverflow='ellipsis' overflow='hidden'>
				<Typography
					className='cinema-cinema-preCode'
					component='span'
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
};
export default CineplexList;
