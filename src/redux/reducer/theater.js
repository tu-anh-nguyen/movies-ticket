import { GET_SHOWING_TIME_LIST } from '../constant/theater';
const initialState = {
	showingTimeList: [
		{
			logo: '',
			maHeThongRap: '',
			mahom: '',
			tenHeThongRap: '',
			lstCumRap: [
				{
					danhSachPhim: [
						{
							hinhAnh: '',
							maPhim: null,
							tenPhim: '',
							lstLichChieuTheoPhim: [
								{
									giaVe: null,
									maLichChieu: null,
									maRap: '',
									ngayChieu: '',
									tenRap: '',
								},
							],
						},
					],
					diaChi: '',
					maCumRap: '',
					tenCumRap: '',
				},
			],
		},
	],
};

const theaterReducer = (state = initialState, action) => {
	let { type, data } = action;
	switch (type) {
		case GET_SHOWING_TIME_LIST: {
			return { ...state, showingTimeList: data };
		}
		default:
			return state;
	}
};

export default theaterReducer;
