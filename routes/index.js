var express = require('express');
var router = express.Router();

/* GET home page. */

// var otp = parseInt(Math.random()*8999)+1000;

router.get('/login', function(req, res, next) {

  res.render('login', {status:false});
});

router.get('/result', function(req, res, next) {

  var pass = req.query.password
  
  if(pass=="123456")
  {
    res.render('dasbord');
  }
  else {
    var comment = 'Pls enter correct password ';
    
    res.render('login',{status:true,com:comment});
  }
  
  
});

module.exports = router;
