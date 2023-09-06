const bearerToken = "dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=";

const apiUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=teste08a50969a0f4401b0198efff09585ef";


const customerUuid = "test390b478f790a4b8788b929d4c60058f5";

const requestBody = JSON.stringify({});


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
            // Successfully deleted
            return response.text();
        } else if (response.status === 400) {
            // UUID not found
            return response.text().then(errorBody => {
                console.error("Failed to delete customer. UUID not found.");
                console.error("Response: " + errorBody);
                return Promise.reject("Failed to delete customer.");
            });
        } else if (response.status === 500) {

            return response.text().then(errorBody => {
                console.error("Failed to delete customer. Error not deleted.");
                console.error("Response: " + errorBody);
                return Promise.reject("Failed to delete customer.");
            });
        } else {
            
            console.error("Failed to delete customer. Status code: " + response.status);
            return Promise.reject("Failed to delete customer.");
        }
    })
    .then(responseBody => {
        // Successfully deleted
        console.log("Customer deleted successfully.");
        console.log("Response: " + responseBody);
    })
    .catch(error => {
        // Handle errors here
        console.error(error);
    });
