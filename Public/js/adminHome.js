var cookie = document.cookie;

document.getElementById('user').innerText = cookie.toLocaleUpperCase();
// console.log(cookie);

// Need to add addRestaurant function here 
async function addRestaurant() {

    let userName = cookie;
    let restaurant = await prompt("Enter your restaurant name");
    let location = await prompt("Enter your restaurant location");

    // console.log(userName, restaurant, location);

    var res = await fetch('/addRes', {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: restaurant,
            ownerName: userName,
            location: location
        }),
        
        contentType: "application/json",
        dataType: 'json'
    })
    let msg = await res.json();
    alert(msg.message);


}

async function getDetails() {
    console.log("hello IIFE")

 let details = await fetch('/fetchDetails' ,{
     method: "POST",
     headers: {
         'Content-Type': 'application/json'
     },
     body:({
         ownerName: cookie
     }),
     contentType: "application/json",
     dataType: 'json'

 })
//  console.log(details);
}
