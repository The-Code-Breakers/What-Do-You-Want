/* Application for project 1 named "What-Do-You-Want" */

/* ---------------------------------------------------------------------------*/

/* Global variables */

//Grab the users time
var userTime = $("#time-Input").val();
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

//  *********** added by fdh to create parameter for function call  ************
var badInput = ""

/* Dynamic-Buttons */
let pickedTime = $("#time-Input").attr(timeSlot).val();
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
    badInput = ""  //  *********** added by fdh to create parameter for function call  ************
    if ( userDate == "" ) {
    // Please Enter Date
    status = false; 
    badInput += "Date<br>";  //  *********** added by fdh to create parameter for function call  ************
    (userDate).innerHTML=  "Please enter the date";
    }
    if ( userState == "" ) {
    // Please Enter State
    status = false;
    badInput += "State<br>";  //  *********** added by fdh to create parameter for function call  ************
   (userState).innerHTML=  "Please enter the state";
    }
    if ( pickedTime == "" ) {
    // Please Choose Time
    status = false; 
    badInput += "Time<br>";  //  *********** added by fdh to create parameter for function call  ************
    (pickedTime).innerHTML=  "Please enter a time";
    }
    if ( userCity == "" ) {
    // Please Enter City
    status = false;
    badInput += "City<br>";  //  *********** added by fdh to create parameter for function call  ************
    (userCity).innerHTML=  "Please enter the city";
    }
    else{
       status = true;
   }

   showModal("badData1<br>badData2");      //sting data put in; formerly Commented out by fdh and moved below to encompass all input data ********

{
// first it will check the start of the line for any word that includes white space, along side with hyphens and periods.
if ( (userCity == "^\s\.\-[\s*\.\-A-Z\s*\.\-a-z\s*\.\-_ ]\.\- \s{1,50}") ){

  (userCity).innerHTML = "Not a valid response";
  status = false;
  badInput += "City<br>"  //  *********** added by fdh to create parameter for function call  ************
} else{
  status = true;
}

//  *********** showModal moved here by fdh to encomass all input data ************
if (status==false) {  
  showModal(badInput);
 }
 
//badInput = ""    // variable reset added by fdh after modal closes -- this may be redundant

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

// Show Modal function  invalidEnteries is a string with list of names of text boxes with invalid or no data

function ShowModal(invalidEntries) {
  $("#badDataModal").modal();         // this line opens modal; next line puts in text
  document.getElementById("badDataModalBody").innerHTML = invalidEntries;
}
