import { combineReducers } from 'redux';
import bookingReducer from './booking';
import movieReducer from './movie';
const rootReducer = combineReducers({
	movie: movieReducer,
	booking: bookingReducer,
});
export default rootReducer;
