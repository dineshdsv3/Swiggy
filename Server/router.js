var express = require('express');
var bodyParser = require('body-parser');
var dbRecords = require('./db.js');
var router = express.Router();
var path = require('path');


var userDetails = dbRecords.userDetails;
var restaurantDetails = dbRecords.restaurant;

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

router.post('/login', async (req,res) => {
    let body = req.body;
    // console.log(body);
    var userName = body.name;
    var password = body.password;
    var userType = body.userType;
    // console.log(userName, password, userType);

    try{
       var user = await userDetails.find({name:userName,password:password,userType:userType})
       console.log(user);
       if(user.length){
           if(user[0].name == userName && user[0].password == password){
               if(user[0].userType == "Admin"){
                   res.send({message: "userFound",name: user[0].name ,userType:"Admin"});
               }else if (user[0].userType == "User"){
                   res.send({message:"userFound",name: user[0].name,userType:"User"})
               }
           }
       }else {
           res.send({message: "Username or Password Incorrect"});
       }

    } catch (err) {
        res.send(err);
    }
})


router.post('/addRes',  (req,res) => {
    let body = req.body;
    // console.log(body);

    restaurantDetails.create(body, (err,data) => {
        if(err){
            res.send(`error is ${err}`)
        }else {
            res.send({message: "Restaurant Registered Successfully"});
        }
    })
})

router.post('/fetchDetails',(req,res) => {
    let body = req.body;
    console.log(body);
    res.send("Hello world")
    // Need to find the restaurant details using the body from DB and add those to the table using the params
})

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../Public/html/index.html'));
})

module.exports = router;