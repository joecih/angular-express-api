var express = require('express');
var router = express.Router();
var parser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/btb';

router.use(require('express-chrome-logger'));


var jsonParser = parser.json();
var urlEncode = parser.urlencoded({
  extended: false
});

router.get('/search', function(req, res, next) {
  db.collection('students').find().toArray(function(error, studentRes) {
    res.json(studentRes);
  });

});

MongoClient.connect(mongoUrl, function(error, database) {
  db = database;
});

router.post('/search', jsonParser, function(req, res, next) {
  //res.console.log(req.body.name);

  var student = req.body.name;
  db.collection('students').find({
    name: student
  }).toArray(function(error, studentRes) {
    if (studentRes.length == 0) {
      db.collection('students').insertOne({
        name: student
      });

      res.json("Sorry, there were no results. We have added " + student);
    } else {
      res.json(studentRes[0].name + " is a current student");
    }

  });

  // var name = req.body.name;

  // var dcClass = ['Tristan', 'Josh', 'Bogdan', 'Keith', 'Will', 'Curtis', 'Joe', 'Kochan', 'Patrick', 'Jonathan', 'Jeremy'];

  // if (dcClass.indexof(name) > -1) {
  //   res.json({
  //     messsage: "Hello, " + name + " you are a student in this class"
  //   });
  // } else {
  //   res.json({
  //     messsage: "Hello, " + name + " you are Not a student in this class"
  //   });
  // }

  // DO SOME WORK ON THE URL Value then send some other data
  //res.send("Test " + req.query.value);
});



module.exports = router;
