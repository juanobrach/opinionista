var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var Client = require('../models/client');

/* GET home page. */
router.get('/', function(req, res, next) {
	var clientData ={
		name:'BePlaya',
		rates: 11922,
		tripadvisor: 'www.tripadvisor.com',
		title:'home'
	}
  res.render('index', clientData );
});


module.exports = router;
