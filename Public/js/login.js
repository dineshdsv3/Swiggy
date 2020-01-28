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
    var message = document.getElementById('message');
    // The below line for converting readble stream into json
    var msg = (await login.json());
    // console.log(msg);
    if(msg.message == "userFound" && msg.userType == "User") {
       alert(`welcome ${msg.name} your login successful`)
       document.cookie = msg.name
        window.location.pathname = "/html/userHome.html"
    }else if(msg.message == "userFound" && msg.userType == "Admin"){
        document.cookie = msg.name
        window.location.pathname = "/html/adminHome.html"
    }



}