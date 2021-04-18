import axiosClient from '../axiosInstant';

const MovieApi = {
	/** Get list */
	getList: (data) => {
		const url = '/api/QuanLyPhim/LayDanhSachPhim';
		return axiosClient.get(url, data);
	},

	/** Get list filter pagign*/
	getListPaging: (data) => {
		const url = '/api/QuanLyPhim/LayDanhSachPhimPhanTrang';
		return axiosClient.post(url, data);
	},
};

export default MovieApi;
