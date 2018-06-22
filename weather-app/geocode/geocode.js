const request = require('request');

var API_KEY = 'AIzaSyDHwtM2GWYp1HHLBBlw8PxakMI_O7x-B7A';

var geocodeAddress = (address, callback) => {
    var encodedAdress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=${API_KEY}`,
        json: true
    }, (error, response, body) => {
        // console.log(JSON.stringify(body, undefined, 2));
        if (error) {
            callback('Some Error Occured!');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find this address.');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports = {
    geocodeAddress
}