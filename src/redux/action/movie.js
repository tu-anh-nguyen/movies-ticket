import MovieApi from '../api/movie';
import { GET_MOVIE_LIST } from '../constant/movie';

const MovieAction = {
	/** Fetch data list movie */
	fetchList: (option) => {
		return async (dispatch) => {
			try {
				const { data, status } = await MovieApi.getList(option);
				dispatch({
					type: GET_MOVIE_LIST,
					data,
				});
				return { data, status };
			} catch (error) {
				throw error;
			}
		};
	},
};

export default MovieAction;
