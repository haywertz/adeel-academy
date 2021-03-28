
let url_base = "http://127.0.0.1:5000/" 

/*
HTTP Status Codes:
1xx – Informational
	 The Client Request have either been Received or are Processing.
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


/*
        Sending HTTP Requests with the fetch() API

        Hey Dean, We just need to do this for each Class in our API. This 
        
        is the approach as seen in this video: https://www.youtube.com/watch?v=23hrM4saaMk

*/

const sendHTTPRequest = (method, url, data) => {

    return fetch(url, {
        method: method, 
        body : JSON.stringify(data), 
        headers: data ? {'Content-Type': 'application/json'} : {}
    }).then(response => {

        if (response.status >= 400){
            // Do Nothing as a Client Request Error or Server Response Error Exists
            response.json().then(errResponseData => {
                const error = new Error("Client Request or Server Response Error");
                error.data = errResponseData;
                throw error;
            });
        }

        return response.json();
    });
};
const getData = () => {
  sendHTTPRequest('GET', 'https://reqres.in/api/users').then(responseData => {
      console.log(responseData);
  });
};

const sendData = () => {
    sendHTTPRequest('POST', 'https://reqres.in/api/register', {
        /* This is a JSON Object put here as seen in this Example below: https://reqres.in/0*/
        email: "eve.holt@reqres.in",
        password: "pistol"
    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err, err.data);
    });
};

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
        success: console.log("success"), 
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
        success: console.log("success"), 
        error: console.log("error"),
        dataType: "application/json",
        contentType : "application/json",
        function (response) {
            console.log(response);
        }
    });

}

function getChat(chatID) {
    // Get this chat

    // Change Chat Window area to display this chat
}
