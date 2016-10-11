var url = 'https://ipinfo.io';
var request = require('request');

module.exports = function(callback){
    request({
        url: url,
        json: true
    }, function(err, response, data){
        if(err){
            callback("Los Angeles");
            throw err;
        } else {
            callback(data);
        }
    });
}

//use request to send a request to the ipinfo API. Once the request is made, if data was received, it's passed into the callback function.