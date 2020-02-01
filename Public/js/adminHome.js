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

    // Here we are giving "cookie" as a params in the GET request 
 let details = await fetch('/fetchDetails/' + cookie ,{
     method: "GET",
     headers: {
         'Content-Type': 'application/json'
     },
     contentType: "application/json",
     dataType: 'json'

 })
 let resArray = await details.json();

 let tBody = document.getElementById('tBody');
 resArray.forEach(val => {
     console.log(val);
    let tr = document.createElement('Tr');
    let td = document.createElement('Td');
    let td1 = document.createElement('Td');
    let td2 = document.createElement('Td');
    let input = document.createElement('input');
    
    let typeAtt = document.createAttribute('type');
    typeAtt.value = "button";
    
    let onClickAtt = document.createAttribute('onClick');
    onClickAtt.val = "unNamed()";
    
    let val1 = document.createAttribute('value');
    val1.value = "Add Food to your restaurant";

    input.setAttributeNode(typeAtt);
    input.setAttributeNode(onClickAtt);
    input.setAttributeNode(val1);

    td.textContent = val.name;
    td1.textContent = val.location;
    td2.appendChild(input);
    tr.appendChild(td)
    tr.appendChild(td1);
    tr.appendChild(td2);
    tBody.appendChild(tr);
    console.log(tBody);
    


 })

}
getDetails();