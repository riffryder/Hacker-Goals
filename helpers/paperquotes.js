const request = require('request');
const config = require('../config.js');

let getQuotes = (callback) => {

  let options = {
    url: 'http://api.paperquotes.com/apiv1/quotes?tags=motivational,inspiration,positivity&limit=10&order=-likes',
    headers: {
      'Authorization': `Token ${config.API}`
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