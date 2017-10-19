
import { FETCH_FORECAST } from '../actions/index';

const INITIAL_STATE = { 
    all: {} 
};

// Returns the data from the api for the weather forecast
export default function (state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        
        case FETCH_FORECAST:
            //return Object.assign({}, state,  {all: action.payload.data });
            state = action.data;
            return state;
        default:
            return state;
    }
}