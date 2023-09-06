const loginId = "test@sunbasedata.com";
const password = "Test@123";


const requestBody = JSON.stringify({
    login_id: loginId,
    password: password
});


const apiUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";


const headers = new Headers({
    "Content-Type": "application/json"
});


const request = new Request(apiUrl, {
    method: "POST",
    headers: headers,
    body: requestBody
});


fetch(request)
    .then(response => {
        if (response.status === 200) {
           
            return response.text();
        } else {
            // Authentication failed
            console.error("Authentication failed. Status code: " + response.status);
            return Promise.reject("Authentication failed.");
        }
    })
    .then(responseBody => {
        
        console.log("Authentication successful.");
        console.log("Bearer Token: " + responseBody);
    })
    .catch(error => {
        console.error(error);
    });
