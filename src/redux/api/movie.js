import axiosClient from '../axiosInstant';

const MovieApi = {
	/** Get list */
	getList: ({ maNhom = 'GP09', tenPhim = false }) => {
		const url = '/api/QuanLyPhim/LayDanhSachPhim';
		return axiosClient.get(
			url +
				(maNhom ? '?maNhom=' + maNhom : '') +
				(tenPhim ? '?=tenPhim' + tenPhim : '')
		);
	},

	/** Get list filter pagign*/
	getListPaging: (data) => {
		const url = '/api/QuanLyPhim/LayDanhSachPhimPhanTrang';
		return axiosClient.post(url, data);
	},

	/** Get detail movie*/
	getDetail: ({ maPhim = '1397' }) => {
		const url = '/api/QuanLyPhim/LayThongTinPhim';
		return axiosClient.get(url + (maPhim ? '?MaPhim=' + maPhim : ''));
	},
};

export default MovieApi;
