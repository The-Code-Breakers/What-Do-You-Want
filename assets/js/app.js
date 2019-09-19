/* Application for project 1 named "What-Do-You-Want" */

/* ---------------------------------------------------------------------------*/

/* Global variables */

//Grab the users Date
var userTime = $("#time").val();
console.log (userTime);

//Grab the users Date

var userDate = $("#date").val();
console.log (userDate);

// grabs the users city

var userCity = $("#city").val();
console.log(userCity);

// grabs the users state

var userState = $("#state").val();
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
/* Modal display */

  // this is the vairable for the modal
let showModal = $("#showModal");

let submitMod = $("#submitMod");

 // Get the <span> element that closes the modal
   
// Have a current time variable and check the users date to make sure it valid

var unixTime = moment($("Time").val(), "HH:mm:ss").format("X");

// creating a status variable to see if meets the requirements 
var status = false;

/* Dynamic-Buttons */
let pickedTime = timeSlot[$("#time-Input").val()];
console.log(pickedTime);

// Submit Button
const submitBtn = function submit() {

  

    // taking in all the values from the form
    userCity.val().trim();

    userState.val();

    userDate.val();

    pickedTime.val();

    // check to make sure all requirements are met so they can go to the next page
    status = true
    if ( userDate == "" ) {
    // Please Enter Date
    status = false; 
    (userDate).innerHTML=  "Please enter the date";
    }
    if ( userState == "" ) {
    // Please Enter State
    status = false;
   (userState).innerHTML=  "Please enter the state";
    }
    if ( pickedTime == "" ) {
    // Please Choose Time
    status = false; 
    (pickedTime).innerHTML=  "Please enter a time";
    }
    if ( userCity == "" ) {
    // Please Enter City
    status = false;
    (userCity).innerHTML=  "Please enter the city";
    }
    else{
       status = true;
   }
   showModal();
{
// first it will check the start of the line for any word that includes white space, along side with hyphens and periods.
if ( (userCity == "^\s\.\-[\s*\.\-A-Z\s*\.\-a-z\s*\.\-_ ]\.\- \s{1,50}") ){

  (userCity).innerHTML = "Not a valid response";
  status = false;
} else{
  status = true;
}



/* Card outputs information*/

// Card-Details



// Card-Event-1



// Card-Event-2



// Card-Event-3

  }
};
$(".btn").on("submit", submitBtn);

// Randomize Button
const tryAgainBtn = function randomize() {





};


$(".btn").on("tryAgain", tryAgainBtn);
// try again
const clearBtn = function clear() {
  $("#userTime").val("");
  $("#Destination-input").val("");
};

/* ---------------------------------------------------------------------------*/

/* Event listener function */