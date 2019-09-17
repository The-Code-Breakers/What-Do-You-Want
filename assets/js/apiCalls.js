//  This document establishes the functions neccessary for calling the various API's used in
//  this web application. First is our Open-Weather api, or the Darksky API. Then our Foursquare API.

//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//  For the Open-Weather API
//  function to find a Zip Code for the Open-Weather API
let getZip = function(cityInput, stateInput){
    // Use the City and State that were put into the form to find the relevant ZIP Code
    for (let x in zipFind) {
        let stateSearch = zipFind[x];
        if (stateSearch == stateInput) {
            for (let y in stateSearch) {
                let citySearch = stateSearch[y];
                if (citySearch == cityInput) {
                    return citySearch[0];
                }
            }
        }
    }
    return false;
}
//  function to call the Open-Weather API
let weatherCall = function(zip, date, time) {
    let endpoint = "https://api.openweathermap.org/data/2.5/forecast/daily?";
    let key = "appid=b1b15e88fa797225412429c1c50c122a1";
    let queryURL = endpoint + key + "&";
    //  Use args to generate queryURL, and make API call
    queryURL += "zip=" + zip;
    //  Make AJAX call with queryURL, and GET method
    //  return response;
}
//  This is a space for notes on the Open-Weather API, and how we're utilizing it in this app
/*
    API Key: b1b15e88fa797225412429c1c50c122a1
    Endpoint: https://api.openweathermap.org/data/2.5/forecast/daily?
    Query Parameters: zip=zip 
*/


//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//  For the Foursquare API
//  function to call the Foursquare API for the "Meal" result
let mealCall = function(city, state, time) {
    let endpoint = "https://api.foursquare.com/v2/venues/explore?";
    let clientInfo = "client_id=3N2N3WZK5ZGFFORDLOQ2PISXVJG1UI5VPYZFFPJY2BD1U1G1&client_secret=QXZWHCJJLB21N2WI1YFUWELH1SULPYKKRKKQSEOCAUXA2ZON";
    let queryURL = endpoint + clientInfo + "&section=food&";
    //  Use args to generate queryURL, and make API call
    queryURL += "near=" + city + "," + state + "&time=" + time;
    //  Make AJAX call with queryURL, and GET method
    //  return response;
}

//  function to call the Foursquare API for the "Event" result
let eventCall = function(city, state, time) {
    let endpoint = "https://api.foursquare.com/v2/venues/explore?";
    let clientInfo = "client_id=3N2N3WZK5ZGFFORDLOQ2PISXVJG1UI5VPYZFFPJY2BD1U1G1&client_secret=QXZWHCJJLB21N2WI1YFUWELH1SULPYKKRKKQSEOCAUXA2ZON";
    let queryURL = endpoint + clientInfo + "&";
    //  Use args to generate queryURL, and make API call
    queryURL += "near=" + city + "," + state + "&time=" + time;
    //  Make AJAX call with queryURL, and GET method
    //  return response;
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