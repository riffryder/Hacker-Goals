const mongoose = require('mongoose');
// require('dotenv').config();

mongoose.connect('mongodb://localhost/hrgoals');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const goalSchema = mongoose.Schema({
  title: String,
  entry: String
});

const Goal = mongoose.model('Goal', goalSchema);

const saveGoal = (goal) => {
  return new Goal({
    title: goal.title,
    entry: ''
  }).save();
}

const selectAll = (callback) => {
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