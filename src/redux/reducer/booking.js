import { CHOICE_CHAIR, GET_LIST_TICKET } from '../constant/booking';
const initialState = {
	chairList: [],
};
const bookingReducer = (state = initialState, { type, data }) => {
	switch (type) {
		case GET_LIST_TICKET:
			return { ...state, chairList: data.danhSachGhe };
		case CHOICE_CHAIR: {
			const index = state.chairList.findIndex((chair) => chair.maGhe === data);
			if (index !== -1) {
				let currentChair = state.chairList[index];
				let newChair = { ...currentChair, dangChon: !currentChair.dangChon };
				state.chairList[index] = newChair;
				return { ...state };
			}
			return state;
		}
		default:
			return state;
	}
};

export default bookingReducer;
