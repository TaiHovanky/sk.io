var express = require('express');
var app = express();

var weather = require('./myWeatherApp.js');
var location = require('./myLocationApp.js');

app.set('view engine', 'ejs');

var weatherResult = "";
location(function(location){
    weather(location.city, function(currentWeather){
        if(currentWeather){
            weatherResult = currentWeather;
        } else {
            console.log("Unable to get the weather");
        }        
    });
});
//call location and when it finishes retrieving the data from ipinfo, it runs a callback function
//the callback is function(location){...}. In this case, the callback is the weather function which takes the city as its location paramter, and a callback function that takes currentWeather
//when weather finishes retrieving data from openWeatherMap, it runs the callback function. If it was able to retrieve data, the result is passed into the callback as "currentWeather"
//currentWeather is stored in the weatherResult variable, which is used in the ejs template

app.get('/', function(req, res){
    res.render('weatherIndex', { sky:weatherResult });
});

var port = process.env.PORT || 5000;
app.listen(port);