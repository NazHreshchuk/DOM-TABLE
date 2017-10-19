
import { combineReducers } from 'redux';
import ForecastReducer from './reducer_forecast';

// root Reducer combine 
const rootReducer = combineReducers({
    forecast: ForecastReducer
});

export default rootReducer;