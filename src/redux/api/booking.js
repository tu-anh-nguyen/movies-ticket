import axiosClient from '../axiosInstant';

const BookingApi = {
	/**Booking ticket */
	postBooking: (data) => {
		const url = '/api/QuanLyDatVe/DatVe';
		return axiosClient.post(url, data);
	},

	/** Get list movie chair of cinema */
	getChairList: (maLichChieu) => {
		const url = `/api/QuanLyDatVe/LayDanhSachPhongVe${
			maLichChieu ? '?MaLichChieu=' + maLichChieu : ''
		}`;
		return axiosClient.get(url);
	},

	/** Create new showing time*/
	createShowing: (option) => {
		const url = '/api/QuanLyDatVe/TaoLichChieu';
		return axiosClient.post(url, option);
	},
};

export default BookingApi;
