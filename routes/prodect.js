var express=require('express')
// const { router } = require('../app')
var router=express.Router()

router.get('/productinterface',function(req,res){
    res.render('productinterface',{status:false})
})

router.get('/get_amount', function(req,res){
    console.log("request",req.query)
    var pn = req.query.productname
    var rate=0;
    var qty=parseInt(req.query.qty)
    if(pn=='Amul paner')
    {
        rate=100;
    }
    else if(pn=='Amul milk')
    {
        rate=60;
    }
    else if(pn=='Amul butter')
    {
        rate=80;
    }
    var amt = rate*qty
    res.render('productinterface',{status:true, productname:pn,rate:rate,quantity:qty,total:amt})
})

module.exports=router