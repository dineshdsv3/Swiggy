var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../Public/html/index.html'));
})

router.get('/second', (req,res) => {res.send("Hello")})

module.exports = router;