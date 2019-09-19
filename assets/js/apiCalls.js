//  This document establishes the functions neccessary for calling the various API's used in
//  this web application. First is the Foursquare API, then the darksky API.

//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//  For the Foursquare API
//  function to call the Foursquare API for the "Meal" result
let mealCall = function(city, state, time) {
    let endpoint = "https://api.foursquare.com/v2/venues/search?";
    let clientInfo = "client_id=3N2N3WZK5ZGFFORDLOQ2PISXVJG1UI5VPYZFFPJY2BD1U1G1&client_secret=QXZWHCJJLB21N2WI1YFUWELH1SULPYKKRKKQSEOCAUXA2ZON";
    //  Use args to generate queryURL, and make API call
    let mealQuery = endpoint + clientInfo + "&v=20180323&categoryId=4d4b7105d754a06374d81259&near=" + city + "," + state + "&time=" + time;
    return mealQuery;
}

//  function to call the Foursquare API for the "Event" result
let eventCall = function(city, state, time, timeSlot) {
    let endpoint = "https://api.foursquare.com/v2/venues/search?";
    let clientInfo = "client_id=3N2N3WZK5ZGFFORDLOQ2PISXVJG1UI5VPYZFFPJY2BD1U1G1&client_secret=QXZWHCJJLB21N2WI1YFUWELH1SULPYKKRKKQSEOCAUXA2ZON";
    //  Use args to generate queryURL, and make API call
    let eventQuery = endpoint + clientInfo + "&v=20180323&near=" + city + "," + state + "&time=" + time;
    switch (timeSlot) {
        case "breakfast":
        case "brunch":
            eventQuery += "&categoryId=4d4b7105d754a06374d81259";
            break;
        case "lunch":
            eventQuery += "&categoryId=4d4b7105d754a06377d81259";
            break;
        case "dinner":
            eventQuery += "&categoryId=4d4b7105d754a06377d81259,4d4b7104d754a06370d81259";
            break;
        case "late night":
            eventQuery += "&categoryId=4d4b7105d754a06376d81259";
            break;
    }
     return eventQuery;
}
//  This is a space for notes on the Foursquare API, and how we're utilizing it in this app.
/*
    Client ID: 3N2N3WZK5ZGFFORDLOQ2PISXVJG1UI5VPYZFFPJY2BD1U1G1
    Client Secret: QXZWHCJJLB21N2WI1YFUWELH1SULPYKKRKKQSEOCAUXA2ZON
    Endpoint: https://api.foursquare.com/v2/venues/explore
    Method: GET
    Documentation: https://developer.foursquare.com/docs/api/venues/explore
    Query Parameters: section=food || near=city,state || time= time
*/

//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//  For the Darksky API
//  function to call the Darksky API
let weatherCall = function(lat, long, time) {
    let endpoint = "https://api.darksky.net/forecast/";
    let key = "b85c22ea2293cfe948c6f0e6b31705af";
    //  Use args to generate queryURL, and make API call
    let weatherQuery = endpoint + key +"/" + lat + "," + long + "," + time;
    return weatherQuery;
}
//  This is a space for notes on the Open-Weather API, and how we're utilizing it in this app
/*
    Secret Key: b85c22ea2293cfe948c6f0e6b31705af
    Endpoint: https://api.darksky.net/forecast/
    Method: GET
    Query Parameters: [latitude] = from Foursquare API call || [longitude] = from Foursquare API call ||  [time] = time/date in UNIX format
*/