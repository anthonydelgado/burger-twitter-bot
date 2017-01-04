var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
  
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
 
/* GET home page. */
router.get('/', function(req, res, next) {

 client.get('search/tweets', { q: 'best burger since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data);
  res.render('index', { title: 'Express', data: data });
});


  
});

module.exports = router;
