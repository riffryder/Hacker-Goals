const request = require('request');
const config = require('../config.js');
require('dotenv').config();

let getQuotes = (callback) => {

  let options = {
    url: 'http://api.paperquotes.com/apiv1/quotes?tags=motivational,inspiration,positivity&limit=10&order=-likes',
    headers: {
      'Authorization': `Token ${process.env.PAPERQUOTES_KEY}`
    }
  }

  request(options, (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      callback(null, body);
    }
  });
}

module.exports.getQuotes = getQuotes;