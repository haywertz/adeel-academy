/*
HTTP Status Codes:

1xx – Informational
	 The Client Request has either been Received or are Processing.
2xx – Success 
	 The Client Request was Successfully Received, Understood and Accepted.
3xx – Redirect
	 The Client Request was redirected and/or further action is required.
4xx – Client Request Error
	 The Client Request does not have what is necessary.
5xx – Server Response Error 
	 The Server has Failed to Fulfill a Valid Client Request.


*/

let url_base = "http://127.0.0.1:5000/" 

// Sending HTTP Requests with the fetch API -> The URL in the Fetch Method is from regres.in and Allows to Test Front-End with API
const getData = () => {
    fetch("https://reqres.in/api/users");
    
};


// Hamburger Menu Script
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
btnHamburger.addEventListener('click', function() {
    console.log('burger clicked');
    if(header.classList.contains('open')) {
        header.classList.remove('open');
    } 
    else {
        header.classList.add('open');
    }
})

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
