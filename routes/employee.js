var express =  require('express');
var router = express.Router();

router.get('/employeeinterface',function(req,res,next)
{
    res.render('data',{status:false});

});


router.get('/get_data', function(req, res, next) 
{
  console.log(req.query)
  
  
    var date= new Date()
    var month=['January','Fabruary','March','April','May','June','July','August','Setember','October','November','december']
    var cd = month[date.getMonth()]
    
  
  var emp_name= req.query.ep_name
  var profasion =req.query.DD 
  var salary = parseInt(req.query.salary)
  if(profasion=="Manager")
  {
    var DA = 50; 
    var HRA = 15;

    var net_salary = salary+(salary*DA/100)+(salary*HRA/100)
  }
  else if(profasion=="Supervisor")
  {
    var DA = 35;
    var HRA = 10;

    var net_salary = salary+(salary*DA/100)+(salary*HRA/100);
  }
  
    res.render('data',{status:true,emp_name:emp_name,profasion:profasion,salary:salary,net_salary:net_salary,DA:DA,HRA:HRA,cd:cd});
  

});

module.exports=router;