import axiosClient from '../axiosInstant';

const TheaterApi = {
	/** Get showing time */
	getShowingTime: (maHeThongRap = false, maNhom = 'GP09') => {
		const url = `/api/QuanLyRap/LayThongTinLichChieuHeThongRap
		${maNhom ? '?maNhom=' + maNhom : ''}
		${maHeThongRap ? '&maHeThongRap=' + maHeThongRap : ''}`;
		return axiosClient.get(url);
	},
};
export default TheaterApi;
