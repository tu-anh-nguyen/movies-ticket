/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import BookingAction from '../../redux/action/booking';
const useStyles = makeStyles(() => {
	return {
		booked: {
			backgroundColor: 'red',
		},
		choice: {
			backgroundColor: 'green',
		},
		notBooked: {
			backgroundColor: 'pink',
		},
	};
});

export default function Booking() {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { movieId: maLichChieu } = useParams();
	const { chairList } = useSelector((state) => state.booking);
	const renderStatusChair = (booked, choice) => {
		if (booked) {
			return classes.booked;
		} else {
			if (choice) {
				return classes.choice;
			} else {
				return classes.notBooked;
			}
		}
	};
	const handleChoice = (maGhe) => {
		dispatch({ type: 'CHOICE_CHAIR', payload: maGhe });
	};
	const renderChairList = () => {
		return chairList.map((chair, index) => {
			return (
				<Button
					className={renderStatusChair(chair.daDat, chair.dangChon)}
					variant='contained'
					key={index}
					onClick={() => handleChoice(chair.maGhe)}
				>
					{chair.tenGhe}
				</Button>
			);
		});
	};
	useEffect(() => {
		dispatch(BookingAction.fetchBooking(maLichChieu));
	}, []);
	return (
		<div>
			<h1>Phòng Ghế</h1>
			<div>{renderChairList()}</div>
			<div>
				<Button
					variant='contained'
					color='primary'
					onClick={() => {
						const danhSachVe = chairList
							.filter((chair) => chair.dangChon)
							.map((chair) => ({ maGhe: chair.maGhe, giaVe: chair.giaVe }));
						dispatch(
							BookingAction.fetchBookingTicket({ maLichChieu, danhSachVe })
						);
					}}
				>
					Đặt Vé
				</Button>
			</div>
		</div>
	);
}
