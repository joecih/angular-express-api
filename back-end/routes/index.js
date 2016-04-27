var express = require('express');
var router = express.Router();
var parser = require('body-parser');
router.use(require('express-chrome-logger'));


var jsonParser = parser.json();
var urlEncode = parser.urlencoded({
  extended: false
});

router.post('/search', jsonParser, function(req, res, next) {
  res.console.log(req);
  // res.send(JSON.stringify({
  //   message: "This is your value back from the Server: " + req.query.value
  // }));

  // DO SOME WORK ON THE URL Value then send some other data
  res.send("Test " + req.query.value);
});

router.get('/search', function(req, res) {

});

module.exports = router;
