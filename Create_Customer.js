const bearerToken = "dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=";


const apiUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create";

const requestBody = JSON.stringify({
    first_name: "amogh",
    last_name: "Doe",
    street: "Elvnu Street",
    address: "H no 2",
    city: "Delhi",
    state: "Delhi",
    email: "sam@gmail.com",
    phone: "12345678"
});

const headers = new Headers({
    "Authorization": "Bearer " + bearerToken,
    "Content-Type": "application/json"
});

// Create a POST request object
const request = new Request(apiUrl, {
    method: "POST",
    headers: headers,
    body: requestBody
});

// Send the POST request
fetch(request)
    .then(response => {
        if (response.status === 201) {
            // Successfully created
            return response.text();
        } else if (response.status === 400) {
            // Failed due to missing first name or last name
            return response.text().then(errorBody => {
                console.error("Failed to create customer. First Name or Last Name is missing.");
                console.error("Response: " + errorBody);
                return Promise.reject("Failed to create customer.");
            });
        } else {
            // Handle other response codes as needed
            console.error("Failed to create customer. Status code: " + response.status);
            return Promise.reject("Failed to create customer.");
        }
    })
    .then(responseBody => {
        // Successfully created
        console.log("Customer created successfully.");
        console.log("Response: " + responseBody);
    })
    .catch(error => {
        // Handle errors here
        console.error(error);
    });
