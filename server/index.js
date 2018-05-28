var express = require('express');
var bodyParser = require('body-parser');

var db = require('../database-mongo');

var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/goals', function (req, res) {
  console.log('SERVER-LOG ', req.body);
  // res.sendStatus(200);
  db.saveGoal(req.body)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    res.sendStatus(400);
  })
  // db.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

