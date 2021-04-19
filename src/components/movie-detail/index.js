import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import format from 'date-format';
import './style.scss';
import { Button } from '../../lib/ui';

function ContentInfo({
	tenPhim,
	hinhAnh,
	biDanh,
	moTa,
	ngayKhoiChieu,
	danhGia,
}) {
	return (
		<Grid
			container
			alignItems='center'
			justify='center'
			className='spacing'
			spacing={4}
		>
			<Grid item xs={12} md={4} lg={4}>
				<Grid container justify='center'>
					<img src={hinhAnh} alt={biDanh} className='detail-img' />
				</Grid>
				<Grid container justify='center'>
					<Typography variant='subtitle1' className='detail-showTime'>
						Ngày khởi chiếu: {format('dd - MM - yyyy', new Date(ngayKhoiChieu))}
					</Typography>
				</Grid>
			</Grid>
			<Grid item xs={12} md={8} lg={6} container justify='center'>
				<Typography variant='h4' className='detail-name detail-text'>
					{tenPhim}
					<img
						src='/assets/img/detail/underline.png'
						alt='underline'
						className='detail-underline'
					/>
				</Typography>
				<Typography variant='h5' className='detail-description detail-text'>
					{moTa}
				</Typography>
				<Grid container justify='space-around' alignItems='center'>
					<Grid item>
						<Button
							padding='0.5rem 2rem'
							color='black'
							colorHover='white'
							textTransform='uppercase'
							boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
							backgroundColor='#ebc634'
							backgroundColorHover='#ba8a04'
						>
							ĐẶT VÉ
						</Button>
					</Grid>
					<Grid item>
						<Grid container alignItems='center'>
							<Typography className='detail-imdbPoint'>
								{danhGia % 10 === 0
									? danhGia
									: danhGia / (-(danhGia % 10) + 10 + danhGia)}{' '}
								/ 10
							</Typography>
							<img
								src='/assets/img/detail/imdb.png'
								alt='imdb'
								className='detail-imdb'
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

function MovieDetail({ data = {} }) {
	return <>{ContentInfo(data)}</>;
}
export default MovieDetail;
