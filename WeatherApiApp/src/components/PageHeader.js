import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class PageHeader extends Component {

    constructor(props) {
        super(props);
    
        this.getData = this.getData.bind(this);
    }

    getData() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    render() {
        const { city, area, country } = this.props.location;
        return (
            <div>
                <h1 className='address'> {city}, {area}, {country} </h1>
                <h3 className='date'> {this.getData()} </h3>
            </div>
        );
    }
}
