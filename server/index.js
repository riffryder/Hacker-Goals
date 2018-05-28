var express = require('express');
var bodyParser = require('body-parser');

var db = require('../database-mongo');

var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/goals', function (req, res) {
  // console.log('SERVER-LOG ', req.body);
  db.saveGoal(req.body)
  .then((data) => {
    // console.log('SUCCESS DATA LOG', data);
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
      // console.log('THIS IS THE DATA ', data);
      res.send(data);
    }
  });
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

