import { Box, Grid } from '@material-ui/core';
import React from 'react';

function ChainList({ list, setChainId, chainId }) {
	return (
		<Box
			display='flex'
			flexDirection='column'
			width='100%'
			padding='1rem 0'
			alignItems='flex-start	'
		>
			{list?.map((item) => (
				<Grid item xs={12} key={item.maHeThongRap}>
					<img
						className={`cinema-logo-chain ${
							chainId === item.maHeThongRap && 'cinema-logo-chain-selected'
						}`}
						src={item.logo}
						alt={item.biDanh}
						onClick={() => setChainId(item.maHeThongRap)}
					/>
				</Grid>
			))}
		</Box>
	);
}

export default ChainList;
