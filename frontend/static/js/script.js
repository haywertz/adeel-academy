
let url_base = "http://127.0.0.1:5000/" 


function signUp() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    $.ajax({
        type: "POST",
        url: url_base + "logins",
        data: JSON.stringify({
            email: email,
            password: password
            }),
        success: console.log("sucess"), 
        error: console.log("error"),
        dataType: "application/json",
        contentType : "application/json"
    });

}

function logIn() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    $.ajax({
        async: true,
        type: "GET",
        url: url_base + "logins",
        success: console.log("sucess"), 
        error: console.log("error"),
        dataType: "application/json",
        contentType : "application/json",
        function (response) {
            console.log(response);
        }
    });

}