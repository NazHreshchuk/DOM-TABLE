import axios from 'axios';

export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCH_LOCATION = 'FETCH_LOCATION';

// Action-creator responsible for fetching weather forecast
export function fetchForecast(data) {

    return {
        type: FETCH_FORECAST,
        data
    };

}

// Action-creator responsible for fetching location
export function fetchLocation(props) {
    //const { latitude, longitude } = props;
    const request = axios.get(`location?town=${val}`); // ЗМІНИТИ!!!!!!

    return {
        type: FETCH_LOCATION,
        payload: request
    };
}