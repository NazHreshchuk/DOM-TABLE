import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Skycons from 'react-skycons';

export default class PageContent extends Component {

    constructor(props) {
        super(props);

        this.setWeatherIcon = this.setWeatherIcon.bind(this);
    }

    setWeatherIcon(icon) {
        var image = icon.split('-');
        return image = image.join('_').toUpperCase();
    }

    render() {
        return (
            <div className='weatherPhoto'>
                <Skycons color='royalblue' icon={this.setWeatherIcon(this.props.image)} autoplay={true}/>
            </div>
        );
    }
}
