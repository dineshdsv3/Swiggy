async function login() {
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var userType = document.getElementById('userType').value;

    console.log(userName, password, userType);

    var login = await fetch('/login', {
        method: "POST",
        headers: {
            // Specifying the content type
            'Content-Type' : 'application/json'
            // here we are sending json data that's the reason we are specifiying above line
        },
        body: JSON.stringify({
            name: userName,
            password: password,
            userType: userType
        }),
        contentType: "application/json",
        dataType: 'json'
    })




}