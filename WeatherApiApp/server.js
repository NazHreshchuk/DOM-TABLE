var path = require('path');
var express = require('express');
var axios = require('axios');
var config = require('./config');
var bodyParser = require('body-parser');

var app = express();
// app.use(bodyParser());

app.use(express.static(__dirname));

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config');
    var compiler = webpack(webpackConfig);
    
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/location', (req, res) => {

    let town = req.query.town;
    console.log(town);
    let geocodedUrl = `${config.geocodedUrl}address=${town}`;

    axios.get(geocodedUrl)
        .then((data) => {
            
            let result = data.data.results[0].address_components;
            let city = '';
            let area = '';
            let country = '';

            result.forEach((item) => {

                if (item['types']) {

                    if (item['types'].toString() == ['locality', 'political'].toString()) {
                        city = item['long_name'];
                    }

                    if (item['types'].toString() == [ 'administrative_area_level_1', 'political' ].toString()) {
                        area = item['long_name'];
                    }

                    if (item['types'].toString() == [ 'country', 'political'].toString()) {
                        country = item['long_name'];
                    } 
                }
            });

            let lat = data.data.results[0].geometry.location.lat;
            let lng = data.data.results[0].geometry.location.lng;
            let url = `${config.url}${config.key}/${lat},${lng}`;

            axios.get(url)
                .then((data) => {
                    res.status(200).json({weather:data.data,  city: city, area: area, country: country});
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/weather', (req, res) => {
    
    let lat = req.query.lat;
    let lng = req.query.lng;
    let url = `${config.url}${config.key}/${lat},${lng}`;
    let geocodedUrl = `${config.geocodedUrl}latlng=${lat},${lng}`;

    axios.get(geocodedUrl)
        .then((data) => {

            let result = data.data.results[0].address_components;
            let city = '';
            let area = '';
            let country = '';

            result.forEach((item) => {

                if (item['types']) {

                    if (item['types'].toString() == ['locality', 'political'].toString()) {
                        city = item['long_name'];
                    }

                    if (item['types'].toString() == [ 'administrative_area_level_1', 'political' ].toString()) {
                        area = item['long_name'];
                    }

                    if (item['types'].toString() == [ 'country', 'political'].toString()) {
                        country = item['long_name'];
                    }
                   
                }
            });
            console.log(url);
            axios.get(url)
                .then((data) => {
                    res.status(200).send({weather: data.data, city: city, area: area, country: country});
                })
                .catch((err) => {
                    console.log(err);
            })
    }) 
    .catch((err) => {
        console.log(err);
    })
});

app.listen(3000);
console.log("API is running on port 3000");
