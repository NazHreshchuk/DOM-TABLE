import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class PageData extends Component {

    constructor(props) {
        super(props);
    
        this.farenhToCelcium = this.farenhToCelcium.bind(this);
    }

    farenhToCelcium(far) {
        return Math.round((far - 32) * 5 / 9);
    }

    render() {
        return (
            <div>
                <h2 className='temperature'> {this.farenhToCelcium(this.props.weather.temperature)}&#8451; </h2>
                <h2 className='generalWeather'> Summary: {this.props.weather.summary} </h2>
                <h3 className='wind'> Wind: {this.props.weather.windSpeed} m/s</h3>
            </div>
        );
    }
}
