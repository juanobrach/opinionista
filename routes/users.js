var express = require('express');
var router = express.Router();

var Client = require('../models/client');

function verifyUser(req,res,next){
	if(req.params.userName){
		console.log(req.params.userName);
	  Client.findOne({name:req.params.userName},function(err,user){
	  	if(err){
	  		next( new Error("No es posible encontrar al usuario" + err ));
	  		return;
	  	}else{
	  		console.log(user);
   		    req.user = [user];
   		    next();
	  	}
	  })
	}else{
		next();
	}
}

/* GET users listing. */
router.get('/:userName', verifyUser ,function(req, res, next) {
	  res.render('user', { users:req.user} );
});
module.exports = router;
