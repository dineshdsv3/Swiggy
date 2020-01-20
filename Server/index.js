var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('Public'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../Public/html/index.html'));
})

app.listen(3000, () => {console.log("Food App started on port 3000")})