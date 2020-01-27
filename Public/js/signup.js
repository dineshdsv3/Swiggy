async function signup() {
    console.log("Click triggered");
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    let userType = document.getElementById('userType').value;

    

    try {

        var registeredUser = await fetch('/signup', {
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
        let span = document.getElementById('message');
            let msg = (await registeredUser.json());
           span.innerText = msg.message;
           span.style.color = "green";
           

    } catch (err) {
        console.log(`error is ${(err)}`)
    }


}