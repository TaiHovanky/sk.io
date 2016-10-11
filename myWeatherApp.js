module.exports = function(location, callback){
    var request = require('request');
    var encodedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation +',us&units=imperial&appid=a1048d44b704cad8a328b68164cbb086';
    //encode the location parameter and pass it into the url

    if(!location){
        return callback("No location provided.");
    }
    request({
        url: url,
        json: true
    }, function(error, response, data){
        if(error){
            callback("Unable to get the weather in your area.");
        } else {
            var temp = data.main.temp;
            var description = data.weather[0].description;
            var city = data.name;
            callback("It is " + temp + " degrees and there is " + description + " in " + city + ".");
        }
    });
    //make the request to the openweathermap API, and if data is received, run the callback with those parameters.
    //in the myServerApp.js file, these parameters are stored/passed in as "currentWeather"
}