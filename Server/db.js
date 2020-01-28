var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/swiggyDB", { useNewUrlParser: true });

var userSchema  = new mongoose.Schema({
    name: String,
    password: String,
    userType: String
});

var restaurant = new mongoose.Schema({
    name: String,
    ownerName: String,
    location: String
})


var userDetails = mongoose.model("User",userSchema);
var restaurant = mongoose.model("restaurant",restaurant);

module.exports = {userDetails, restaurant};