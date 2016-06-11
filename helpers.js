// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key:'ViIn2WXh2INPKnrySvSrIrHg4',
    consumer_secret:'bxr155rZDPMnwUdHzFiaEcQ33oqZqkkLtAVUrJdO9IagKj8mQ1',
    access_token_key:'741683360028852224-dRutAIfxyQvnrqFcMg1nhx4W7lc0cA6',
    access_token_secret:'SxhKrg5qCciRWnm9nm7I323VY5U8RU62vnZAqinrrD9il',
  });

  return client;
};

module.exports = Helpers;
