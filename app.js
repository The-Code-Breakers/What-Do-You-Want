/* Application for project 1 named "What-Do-You-Want" */




/* ---------------------------------------------------------------------------*/



/* Global variables */

// Grabs User's Information 

// Grab the users location

var userName =  $("fName").val();

//Grab the users time

var userTime = $("userTime").val() ;

// grabs the users date
var userLocation = $("userLocation").val();




/* API Request Section for: Evenful-API, OpenWeather-API, Yelp-API */

/* ---------------------------------------------------------------------------*/



/*  Evenful-API */

// AJAX method 



//variable to call concerts

//variable to call movies

//variable to call bars




/* ---------------------------------------------------------------------------*/



/* OpenWeather-API*/

// AJAX method 

//variable to call weather provided by the user location



/* ---------------------------------------------------------------------------*/


/* Yelp-API */

// AJAX method 



// grab closest restaurants restaurants 

// reveiws of said restaurants 



/* ---------------------------------------------------------------------------*/



/* Dynamic-Buttons */
let time = $("#userTime");
let random;
let reset = $("#reset");

// Submit Button 
const submitBtn = function submit(){



};

// Randomize Button
const tryAgainBtn = function randomize(){

};


// Clear Button 
const clearBtn = function clear(){
    $("##userTime").val("");
    $("#Destination-input").val("");
    $("#reset").val("");
};

/* ---------------------------------------------------------------------------*/

/* Event listener function */

// submitBtn.addEventListener("click", Submit , true)

/* Card outputs information*/



// Card-Details



// Card-Event-1



// Card-Event-2



// Card-Event-3

/* Second page */

// check to make sure all requirements are met so they can go to the next page