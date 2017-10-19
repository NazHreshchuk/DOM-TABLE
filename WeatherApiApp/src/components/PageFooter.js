import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Skycons from 'react-skycons';

export default class PageData extends Component {

    constructor(props) {
        super(props);
    
        this.farenhToCelcium = this.farenhToCelcium.bind(this);
        this.setWeatherIcon = this.setWeatherIcon.bind(this);
    }

    farenhToCelcium(far) {
        return Math.round((far - 32) * 5 / 9);
    }

    setWeatherIcon(icon) {
        var image = icon.split('-');
        return image = image.join('_').toUpperCase();
    }

    render() {
        return (
            <div className="flexItem">
                <Skycons color='royalblue' icon={this.setWeatherIcon(this.props.image)} autoplay={true}/>
                <h2 className="footerTemperature"> {this.farenhToCelcium(this.props.minTemp)}&#8451;/{this.farenhToCelcium(this.props.maxTemp)}&#8451; </h2>
                <h3 className="footerWind"> Wind: {this.props.wind} m/s </h3> 
            </div>
        );
    }
}
