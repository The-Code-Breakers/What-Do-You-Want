/* Application for project 1 named "What-Do-You-Want" */

/* ---------------------------------------------------------------------------*/

/* Global variables */

//Grab the users Date

var userDate = $("userDate").val();
console.log (userDate);

// grabs the users city

var userCity = $("userCity").val();
console.log(userCity);

// grabs the users state

var userState = $("userState").val();
console.log(userState);

// object of picked time 
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
// this is the vairable for the modal
let showModal = ("#showModal")

// Have a current time variable and check the users date to make sure it valid

var currentDate = moment();
  console.log("CURRENT TIME: " + moment(currentTime).calender());


// creating a status variable to see if meets the requirements 
var status = false;

/* Dynamic-Buttons */
let pickedTime = timeSlot[$("#time-Input").val()];
console.log(pickedTime);

// Submit Button
const submitBtn = function submit() {
    userCity.val().trim();

    userState.val();

    userDate.val();

    pickedTime.val();

    //
   if( (userDate == "" ) & (userState == "") & (pickedTime == "") & (userCity == "")){
        (userCity).innerHTML=  "Please enter the city";

        (userState).innerHTML=  "Please enter the state";

        (userDate).innerHTML=  "Please enter the date";

        (pickedTime).innerHTML=  "Please enter a time";

        status = false;
   } else{
       status = true;
   }



};
$(".btn").on("submit", submitBtn);

// Randomize Button
const tryAgainBtn = function randomize() {};


$(".btn").on("tryAgain", tryAgainBtn);
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
