import BookingApi from '../api/booking';
import { GET_LIST_TICKET } from '../constant/booking';

const BookingAction = {
	/** Booking ticket*/
	fetchBookingTicket: async ({ maLichChieu, danhSachVe }) => {
		try {
			const { taiKhoan: taiKhoanNguoiDung } = JSON.parse(
				localStorage.getItem('userLogin')
			);
			const { data, status } = await BookingApi.postBooking({
				maLichChieu,
				danhSachVe,
				taiKhoanNguoiDung,
			});
			return { data, status };
		} catch (error) {
			throw error;
		}
	},

	/** Get list movie chair of cinema */
	fetchChairList: (maLichChieu) => {
		return async (dispatch) => {
			try {
				const { data, status } = await BookingApi.getChairList(maLichChieu);
				dispatch({
					type: GET_LIST_TICKET,
					data,
				});
				return { data, status };
			} catch (error) {
				throw error;
			}
		};
	},
};

export default BookingAction;
