const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database-mongo');
const pq = require('../helpers/paperquotes.js')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/goals', function (req, res) {
  db.saveGoal(req.body)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.sendStatus(400);
  })
});

app.get('/goals', function(req, res) {
  db.selectAll((err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
})

app.get('/quote', function(req, res) {
  pq.getQuotes((err, quotes) => {
    if(err) {
      res.sendStatus(500);
    } else {
      var quotesObj = JSON.parse(quotes)
      res.send(quotesObj.results);
    }
  })
})

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

