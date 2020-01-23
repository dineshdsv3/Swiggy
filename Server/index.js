var express = require('express');
var app = express();

var router = require('./router.js')

app.use(router);


app.use(express.static('Public'))

app.listen(3000, () => {console.log("Food App started on port 3000")})