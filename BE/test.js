const { Client } = require("@googlemaps/google-maps-services-js");
require("dotenv").config();
const client = new Client({});
var axios = require('axios');

function initMap() {
    var config = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=NTUC&key=AIzaSyBvNFYsuIRcawVXWtsb9sA-VYToFPU6afQ',
    headers: { }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}

module.exports = {
  initMap,
};
