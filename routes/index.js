var express = require('express');
var router = express.Router();
var spawn = require('child_process')
var fs = require('fs')


	// tags now contains your ID3 tags
/* GET home page. */
router.get('/', function(req, res, next) {
  var music = [];
  fs.readdir('../../Desktop/music/', function (err, data){
    res.render('index', {data: data});
  })
});
// router.post('/', function(req, res, next) {
//   spawn.spawn('open', ['../../Desktop/NickMacIntyre.jpg']);
//   res.render('error')
// })
router.post('/:id', function(req, res, next) {
  spawn.spawn('afplay', ['../../Desktop/music/' + req.params.id]);
  res.render('error')
})
router.post('/stop', function(req, res, next) {
  console.log('stop');
  spawn.spawn('killall afplay', '../../music/');
  res.redirect('/')
})

module.exports = router;
