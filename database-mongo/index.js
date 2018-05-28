var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hrgoals');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var goalSchema = mongoose.Schema({
  title: String,
  entry: String
});

var Goal = mongoose.model('Goal', goalSchema);

var saveGoal = (goal) => {
  return new Goal({
    title: goal.title,
    entry: ''
  }).save();
}

var selectAll = (callback) => {
  Goal.find({}, function(err, goals) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, goals);
    }
  });
};

module.exports.saveGoal = saveGoal;

module.exports.selectAll = selectAll;