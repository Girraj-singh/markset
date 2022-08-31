var express = require('express');
var router = express.Router();

router.get('/marksheet',function(req,res,next){
    res.render('marksheet',{status:false});
})



router.get('/get_marksheet',function(req,res,next){

    var total=0
    var per=0

    var  num=[parseInt(req.query.hmarks),parseInt(req.query.emarks),parseInt(req.query.pmarks),parseInt(req.query.cmarks),parseInt(req.query.mmarks)]
    var  sub=['Hindi','English','Physics','Chemistry','Math']
    var  subcode=['101','102','103','104','105']
    var count1=''
    
    var result1=''
    var fsub=''
   
    


    // var dive='' 
    // if(per>=60 && per<=100)
    // {
    //     dive="1st"
        
    // }
    // else if(per>=40 && per<60)
    // {
    //     dive="2nd"
        
    // }
    // else if(per>=20 && per<40 )
    // {
    //     dive="3rd"
    // }

    var gen
    if(req.query.gender=='male')
    {
        gen="S/O"
    }
    else if(req.query.gender=='female')
    {
        gen="D/O"
    }
   var sname = req.query.sname;
   var fname = req.query.fname;
   var roll = req.query.roll;
   var School = req.query.School;
   
   


    
    
    // htm+=`<table border='1' cellpadding='10' width='80%'><tr><td>Sub. Code</td><td>Hindi</td><td>English</td><td>Physics</td><td>Chemistry</td><td>Math</td></tr></table>`
   
    for(i=0;i<num.length;i++)
    {
        total+=num[i]
        var remark=''
        if(num[i]>0 && num[i]<33)
        {
            count1++;
             remark="<font size='5' color='red'>*</font>"
             fsub+=sub[i]+","

        }  
        else if(num[i]>=75 && num[i]<=100)
        {
            remark="<font size='5' color='green'>D</font>"
        }

        
    }
    var per=total/5
    // htm+=`<tr ><th>101</th><th>Hindi</th><th>33</th><th>100</th><th>${hmarks.value}</th><th></th></tr>`
    // htm+=`<tr><th>102</th><th>English</th><th>30</th><th>100</th><th>${emarks.value}</th><th></th></tr>`
    // htm+=`<tr><th>103</th><th>Physics</th><th>30</th><th>100</th><th>${pmarks.value}</th><th></th></tr>`
    // htm+=`<tr><th>104</th><th>Chemistry</th><th>30</th><th>100</th><th>${cmarks.value}</th><th></th></tr>`
    // htm+=`<tr><th>105</th><th>Math</th><th>30</th><th>100</th><th>${mmarks.value}</th><th></th></tr>`
    if (count1==0){
        result1='pass'
    }
    else if(count1>2){
        result1='fail'
    }
    else{
        result1=`compartment(${fsub})`
    }
    var dive='' 
    if(per>=60 && per<=100)
    {
        dive="1st"
        
    }
    else if(per>=40 && per<60)
    {
        dive="2nd"
        
    }
    else if(per>=20 && per<40 )
    {
        dive="3rd"
    }
     

    


     

    
    res.render('show_marksheet',{Total:total,per:per,dive:dive,result1:result1,sname:sname,fname:fname,roll:roll,School:School,gen:gen,hmarks:req.query.hmarks,emarks:req.query.emarks,pmarks:req.query.pmarks,cmarks:req.query.cmarks,mmarks:req.query.mmarks});
})

module.exports=router;