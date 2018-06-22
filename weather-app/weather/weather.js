const request = require('request');

var API_KEY = '14737d98b6dca0c46b4bbd49bb0e3a37';

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            callback('Unable to fetch weather.');
        } else {
            // console.log(body);
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
    });
}

module.exports = {
    getWeather
}