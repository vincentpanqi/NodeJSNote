var mongoose = require('mongoose');
require('./model');

var Book = mongoose.model('Book');

Book.find({}, function(err, docs) {
  if (err) {
    console.log('err:', err);
    return;
  }

  console.log('result:', docs);
});
