var express = require('express');
var userDetails = require('./db.js');
var path = require('path');
var router = express.Router();

router.post('/signup' ,(req,res) => {
    var body = req.body;
    console.log(typeof(body));

    userDetails.create(body, (err,data) => {
        if(err){
            res.status(500).json({message:err})
        }else{
            res.send({message:"User Registered Successfully"});
        }
    })

})


router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../Public/html/index.html'));
})

router.get('/second', (req,res) => {res.send("Hello")})

module.exports = router;