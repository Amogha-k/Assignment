const bearerToken = "dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=";

const apiUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=test01ab4182b7e2445ca3ef1625f33ce88d";

const customerUuid = "test390b478f790a4b8788b929d4c60058f5";

const requestBody = JSON.stringify({
    uuid: customerUuid,
    first_name: "adi",
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

const request = new Request(apiUrl, {
    method: "POST",
    headers: headers,
    body: requestBody
});

fetch(request)
    .then(response => {
        if (response.status === 200) {
            // Successfully updated
            return response.text();
        } else if (response.status === 400) {
            // Body is empty
            return response.text().then(errorBody => {
                console.error("Failed to update customer. Body is empty.");
                console.error("Response: " + errorBody);
                return Promise.reject("Failed to update customer.");
            });
        } else if (response.status === 500) {
            // UUID not found
            return response.text().then(errorBody => {
                console.error("Failed to update customer. UUID not found.");
                console.error("Response: " + errorBody);
                return Promise.reject("Failed to update customer.");
            });
        } else {
            // Handle other response codes as needed
            console.error("Failed to update customer. Status code: " + response.status);
            return Promise.reject("Failed to update customer.");
        }
    })
    .then(responseBody => {
        // Successfully updated
        console.log("Customer updated successfully.");
        console.log("Response: " + responseBody);
    })
    .catch(error => {
        // Handle errors here
        console.error(error);
    });
