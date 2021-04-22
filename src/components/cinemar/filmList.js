import React from 'react';
import format from 'date-format';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
} from '@material-ui/core';
import { Button, Divider } from '../../lib/ui';
import { NavLink, withRouter } from 'react-router-dom';
function returnList(list) {
	const arr = new Array(0);
	list.forEach((element) => {
		const temp = format('dd-MM-yy', new Date(element.ngayChieuGioChieu));
		console.log('temp', temp);
		arr.indexOf(temp) === -1 && arr.push(temp);
	});
	return arr;
}
function FilmList({ list }) {
	return list.map(({ hinhAnh, tenPhim, maPhim, lstLichChieuTheoPhim }) => {
		const data = returnList(lstLichChieuTheoPhim);
		console.log('data', data);
		const time = tenPhim.length + 100;
		const imdb =
			Math.round((7 + (3 * tenPhim.length) / (tenPhim.length + 10)) * 100) /
			100;
		return (
			<Accordion className='cinema-filmList-accodion'>
				<AccordionSummary aria-controls='panel1a-content'>
					<Grid container alignItems='center'>
						<Grid item xs={2}>
							<img className='cinema-logo-cinema' src={hinhAnh} alt={tenPhim} />
						</Grid>
						<Grid item xs={10}>
							<Typography
								className='cinema-cinema-name'
								component='p'
								noWrap
								variant='inherit'
							>
								{tenPhim}
							</Typography>
							<Typography
								className='cinema-cinema-info'
								component='p'
								noWrap
								variant='inherit'
							>
								{time} phút - {imdb} IMDb
							</Typography>
						</Grid>
					</Grid>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container spacing={3} className='spacing'>
						{data.map((key) => {
							console.log('key', key);
							const dataFilter = lstLichChieuTheoPhim.filter(
								(element) =>
									format('dd-MM-yy', new Date(element.ngayChieuGioChieu)) ===
									key
							);
							console.log({ dataFilter });
							return (
								<Grid container spacing={3} className='spacing'>
									<Divider spacing={3} margin='20px 0 0'>
										<b>{key}</b>
									</Divider>
									{dataFilter.map(({ maLichChieu, ngayChieuGioChieu }) => {
										const time = new Date(ngayChieuGioChieu);
										const endTime = new Date(ngayChieuGioChieu);
										endTime.setHours(time.getHours() + 2);
										return (
											<Grid item xs={3}>
												<NavLink to={`/booking/${maLichChieu}`}>
													<Button
														fullWidth
														backgroundColor='#D1495B'
														backgroundColorHover='#932533'
														margin='1px 0 2	px'
														color='white'
													>
														{format('hh:mm', time)} - {format('hh:mm', endTime)}
													</Button>
												</NavLink>
											</Grid>
										);
									})}
								</Grid>
							);
						})}
					</Grid>
				</AccordionDetails>
			</Accordion>
		);
	});
}
export default withRouter(FilmList);
