
const bearerToken = "dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=";


const apiUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list";


const headers = new Headers({
    "Authorization": "Bearer " + bearerToken,
});


const request = new Request(apiUrl, {
    method: "GET",
    headers: headers,
});


fetch(request)
    .then(response => {
        if (response.status === 200) {
            // Successfully received customer list
            return response.text();
        } else {
            // Handle other response codes as needed
            console.error("Failed to get customer list. Status code: " + response.status);
            return Promise.reject("Failed to get customer list.");
        }
    })
    .then(responseBody => {
        // Parse and use the response data here
        console.log("Customer List:");
        console.log(responseBody);
    })
    .catch(error => {
        // Handle errors here
        console.error(error);
    });
