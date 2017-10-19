import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import axios from 'axios';
import { fetchForecast } from '../actions/index.js';

class InputForCity extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

        this.getLocationWeather = this.getLocationWeather.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.target.value });
    }


    getLocationWeather() {
        var val = this.state.input;
        axios.get(`location?town=${val}`)
            .then((res) => {
                const { dispatch } = this.props;
                console.log(this.props);
                const action = fetchForecast(res.data);
                dispatch(action);
                //console.log(this.props.forecast);
            })
    }

    render() {
        return (
            <div className="setLocation">
                <input className="inputForm" onChange={ this.handleChange } type="text" placeholder="Enter your town.." name="city"/> 
                <button className="buttonWeather" value="Location" onClick={this.getLocationWeather}>Get weather </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        forecast: state.forecast,
        location: state.location
    };
}

export default connect(mapStateToProps)(InputForCity);


