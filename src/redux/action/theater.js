import BookingApi from '../api/booking';
import TheaterApi from '../api/theater';
import { GET_SHOWING_TIME_LIST } from '../constant/theater';

const TheaterAction = {
	/** Get showing time list*/

	fetchShowTimeCinema: () => {
		return async (dispatch) => {
			try {
				const { data, status } = await TheaterApi.getShowingTime();
				dispatch({
					type: GET_SHOWING_TIME_LIST,
					data,
				});
				return { data, status };
			} catch (error) {
				throw error;
			}
		};
	},
};

export default TheaterAction;
