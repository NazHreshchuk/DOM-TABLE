import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { fetchForecast, fetchLocation} from '../actions/index.js';
import { bindActionCreators } from 'redux'
import PageHeader from './PageHeader'
import PageMainContent from './PageMainContent'
import PageMainData from './PageMainData'
import PageFotter from './PageFooter'
import InputForCity from './InputForCity'
import axios from 'axios';
import { FETCH_FORECAST } from '../actions/index';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            term: '',
            toggleMainPage: false,
        };

        this.handleGeolocationSuccess = this.handleGeolocationSuccess.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.renderForecastedWeather = this.renderForecastedWeather.bind(this);
    }

    componentWillMount() {
        this.getLocation();
    } 

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition (
                this.handleGeolocationSuccess,
                this.handleGeolocationError,
                { timeout:1000 },
            );
        }
    }

    // Handle success
    handleGeolocationSuccess(position) {
        const { coords } = position;
        const { latitude, longitude } = coords;
        axios.get(`weather?lat=${position.coords.latitude}&lng=${position.coords.longitude}`)
            .then((res) => {
                const { dispatch } = this.props;
                const action = fetchForecast(res.data);
                dispatch(action);
                
                this.setState({
                    toggleMainPage: !this.state.toggleMainPage
                });
                console.log(this.props.forecast);
            })
        
    }

    // Handle error
    handleGeolocationError(error) {
        if (error.code === 1) {
            this.setState({ error: 'Please enable permissions to access location and reload the page' });
        } else {
            this.setState({ error: 'Internal service for geolocation is down. Please try in a few minutes!' });
        }
    }

    renderForecastedWeather() {
        const data = this.props.forecast.weather.daily.data.slice(0, 5);
        return data.map(weather => (
            <div className="forecast-list-item" key={weather.time}>
                {/*<PageContent image={weather.icon}/>*/}
                <PageFotter image={weather.icon} wind={weather.windSpeed} maxTemp={weather.temperatureMax} minTemp={weather.temperatureMin} />
            </div>
        ));   
    }

    render() {
        const isTrue = this.state.toggleMainPage;
        if (isTrue) {
            return (
                <div>
                    <InputForCity /> 
                    <div className='mainWeather'>
                        <PageHeader location={this.props.forecast}/>
                        <PageMainContent image={this.props.forecast.weather.currently.icon}/>
                        <PageMainData weather={this.props.forecast.weather.currently}/>
                        <div className="footerWeather">
                            {this.renderForecastedWeather()}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                div>
                    <h2> Please allow access to your current location:) </h2>
                    <div className="loader"></div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        forecast: state.forecast
    };
}


export default connect(mapStateToProps)(App);


