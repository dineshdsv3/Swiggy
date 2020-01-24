var express = require('express');
var bodyParser = require('body-parser');
var userDetails = require('./db.js');
var router = express.Router();
var path = require('path');

// Both the below lines are for to get the JSON. Otherwise we'll get undefiined
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.post('/signup' ,(req,res) => {
    var body = req.body;
    console.log(body);

    userDetails.create(body, (err,data) => {
        if(err){
            res.status(500).json({message:err})
        }else{
            res.send({message:"User Registered Successfully"});
        }
    })

})

router.post('/login', (req,res) => {
    var body = req.body;
    // console.log(body);
    var userName = body.name;
    var password = body.password;
    var userType = body.userType;
    // console.log(userName, password, userType);
})

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../Public/html/index.html'));
})

router.get('/second', (req,res) => {res.send("Hello")})

module.exports = router;