import { combineReducers } from 'redux';
import movieReducer from './movie';
import bookingReducer from './booking';
import theaterReducer from './theater';
const rootReducer = combineReducers({
	movie: movieReducer,
	booking: bookingReducer,
	theater: theaterReducer,
});
export default rootReducer;
