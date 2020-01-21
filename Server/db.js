var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/swiggyDB", { useNewUrlParser: true });

var userSchema  = new mongoose.Schema({
    name: String,
    password: String,
    userType: String
});


var userDetails = mongoose.model("User",userSchema);

module.exports = userDetails;