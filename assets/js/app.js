/* Application for project 1 named "What-Do-You-Want" */

/* ---------------------------------------------------------------------------*/

/* Global variables */

// variables for User Input

let userTime;
let userDate;
let userCity;
let userState;

// variables for the API responses

let meals;
let events;
let weather;

// object of picked time
const timeSlot = {
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

/* Modal display */

// this is the vairable for the modal
let showModal = $("#showModal");

let submitMod = $("#submitMod");

// Get the <span> element that closes the modal

// creating a status variable to see if meets the requirements
let status = false;

//  *********** added by fdh to create parameter for function call  ************
var badInput = ""

/* Dynamic-Buttons */
// = $("#time-Input").val()
// console.log(userTime);
let pickedTime = $("#time-Input, option:selected").val();


//$("#time-Input"); 

// pickedTime
//   $("pickedTime").attr(timeSlot).val();
console.log(pickedTime);

// Submit Button
const submitBtn = function submit() {
  // taking in all the values from the form
  userCity = $("#city")
    .val()
    .trim();
  console.log("this is the city" + "  " + userCity);

  userState = $("#state").val();
  console.log("this is the state" + "  " + userState);

  userDate = $("#date").val();
 console.log("this is the Date" + "  " + userDate);

/*--------- Moved users date inside the submit function ---------*/

//XD3V moved users date input into the submit function,
userDate = $("#date").val();

// XD3V created new variable named convertedDate that converts the moment function into a variable
var convertedDate = moment(userDate);

// XD3V assigned unixTime to equal var convertableDate which will format it in unix time. 

let unixTime = convertedDate.format("X");
console.log( "this is the unix time" + unixTime);

  // XD3V changed pickedTime.val(); into Jquery
  $("pickedTime").val();
  
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

  // first it will check the start of the line for any word that includes white space, along side with hyphens and periods.
  if (userCity == "^s.-[s*.-A-Zs*.-a-zs*.-_ ].- s{1,50}") {
    userCity.innerHTML = "Not a valid response";
    status = false;
  } else {
    status = true;
  }
  console.log(status);

  if (status) {
    /* API Request Section for: Darksky API and Foursquare API */

    /* ---------------------------------------------------------------------------*/

    /*  Foursquare API */

    $.ajax({
      url: mealCall(userCity, userState, userTime),
      method: "GET"
    }).done(function(response) {
      meals = response;
      lat = meals.response.geocode.feature.geometry.center.lat;
      long = meals.response.geocode.feature.geometry.center.lng;
    });

    $.ajax({
      url: eventCall(userCity, userState, userTime, $("#time-Input").val()),
      method: "GET"
    }).done(function(response) {
      events = response;
    });

    /* ---------------------------------------------------------------------------*/

    /* Darksky API*/

    $.ajax({
      url: weatherCall(lat, long, unixTime, $("#time-Input").val()),
      method: "GET"
    }).done(function(response) {
      weather = response;
    });

    //  Debbugging
    console.log(
      "Meals: " +
        meals +
        "\nEvents: " +
        events +
        "\nLat: " +
        lat +
        "\nLong: " +
        long +
        "\nWeather: " +
        weather
    );
    /* ---------------------------------------------------------------------------*/
  }

  /* Card outputs information*/

  // Card-Details

  // Card-Event-1

  // Card-Event-2

  // Card-Event-3
  
  //console.log

  }
  
};

// XD3V changed line 234. We were using incorrect syntax for delcaring this .on click event listener in Jquery.
$("#submit").on("click", submitBtn);

console.log(submitBtn());

// Randomize Button
const tryAgainBtn = function randomize() {};

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
