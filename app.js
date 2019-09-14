/* Application for project 1 named "What-Do-You-Want" */

/* ---------------------------------------------------------------------------*/

/* Global variables */

// Grabs User's Information

// Grab the users name

var userName = $("fName").val();

//Grab the users time

var userTime = $("userTime").val();

// grabs the users location
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

let timeSlot = {
  breakfast: {
    start: "8:00",
    end: "12:00"
  },
  brunch: {
    start: "10:00",
    end: "14:00"
  },
  lunch: {
    start: "12:00",
    end: "16:00"
  },
  dinner: {
    start: "16:00",
    end: "20:00"
  },
  lateNight: {
    start: "20:00",
    end: "8:00"
  }
};

/* Dynamic-Buttons */
let pickedTime = timeSlot[$("#time-Input").val()];
console.log(pickedTime);

let random;

// Submit Button
const submitBtn = function submit() {};

// Randomize Button
const tryAgainBtn = function randomize() {};

// Clear Button
const clearBtn = function clear() {
  $("#userTime").val("");
  $("#Destination-input").val("");
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
