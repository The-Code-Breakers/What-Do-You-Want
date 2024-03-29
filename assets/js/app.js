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

// Show Modal function  invalidEnteries is a string with list of names of text boxes with invalid or no data

let showModal = function(invalidEntries) {
  $("#badDataModal").modal(); // this line opens modal; next line puts in text
  document.getElementById("badDataModalBody").innerHTML = invalidEntries;
};

let submitMod = $("#submitMod");

// Get the <span> element that closes the modal

// creating a status variable to see if meets the requirements
let status = false;

//  *********** added by fdh to create parameter for function call  ************
var badInput = "";

/* Dynamic-Buttons */
// = $("#time-Input").val()

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
  console.log("this is the unix time  " + unixTime);

  /* ---------------- XD3V placed the new time picked into the submit button function ----------------*/

  /* The variable pickedTime is assigned to a Jquery format and it shows what ever the user picks from the drop down menu.
 Then it once the slection is chose it is linked to the object made named timeSlots pulling the time slots the API needs. */

  let pickedTime = $("#time-Input, option:selected")
    .attr(timeSlot)
    .val();

  // XD3V changed pickedTime.val(); into Jquery
  $("pickedTime").val();
  console.log(pickedTime);
  // check to make sure all requirements are met so they can go to the next page
  status = true;
  badInput = ""; //  *********** added by fdh to create parameter for function call  ************
  if (userDate == "") {
    // Please Enter Date
    status = false;
    badInput += "Date<br>"; //  *********** added by fdh to create parameter for function call  ************
    userDate.innerHTML = "Please enter the date";
  }
  if (userState == "") {
    // Please Enter State
    status = false;
    badInput += "State<br>"; //  *********** added by fdh to create parameter for function call  ************
    userState.innerHTML = "Please enter the state";
  }
  if (pickedTime == "") {
    // Please Choose Time
    status = false;
    badInput += "Time<br>"; //  *********** added by fdh to create parameter for function call  ************
    pickedTime.innerHTML = "Please enter a time";
  }
  if (userCity == "") {
    // Please Enter City
    status = false;
    badInput += "City<br>"; //  *********** added by fdh to create parameter for function call  ************
    userCity.innerHTML = "Please enter the city";
  } else {
    status = true;
  }

  // showModal("badData1<br>badData2"); //string data put in; formerly Commented out by fdh and moved below to encompass all input data ********

  {
    // first it will check the start of the line for any word that includes white space, along side with hyphens and periods.
    if (userCity == "^s.-[s*.-A-Zs*.-a-zs*.-_ ].- s{1,50}") {
      userCity.innerHTML = "Not a valid response";
      status = false;
      badInput += "City<br>"; //  *********** added by fdh to create parameter for function call  ************
    } else {
      status = true;
    }

    //  *********** showModal moved here by fdh to encomass all input data ************
    if (status == false) {
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

      let mealURL = mealCall(userCity, userState, userTime);
      let eventURL = eventCall(
        userCity,
        userState,
        userTime,
        $("#time-Input").val()
      );
      let weatherURL = weatherCall(lat, long, unixTime, $("#time-Input").val());

      $.ajax({
        url: mealURL,
        method: "GET"
      }).done(function(response) {
        meals = response;
        lat = meals.response.geocode.feature.geometry.center.lat;
        long = meals.response.geocode.feature.geometry.center.lng;
        $("#meal").html(meals.response.venues[0].name + "<br>" + meals.response.venues[0].location.address);
      });

      $.ajax({
        url: eventURL,
        method: "GET"
      }).done(function(response) {
        events = response;
        $("#event").html(events.response.venues[0].name + "<br>" + events.response.venues[0].location.address);
      });

      /* ---------------------------------------------------------------------------*/

      /* Darksky API*/

      $.ajax({
        url: weatherURL,
        method: "GET"
      }).done(function(response) {
        weather = response;
        $("#weather").html("Where? " + userCity + ", " + userState +"<br>Timezone: " + weather.timezone + "<br>Condition: " + weather.currently.summary + "<br>Temp Feels Like: " + weather.currently.apparentTemperature);
        $("#time-date").html("Timeslot chosen: " + pickedTime + "<br><br>Date chosen: " + userDate)
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

    // Card-Weather-Location
    $("#weather&location").append(weathercall).text();



    // Card-Time-Date
    
    $("#time&date").append("pickedTime").text();

    $("#time&date").append("convertedDate").text();


    // Card-Event-1

    $("#event1").append("mealQuery").text();

    // Card-Event-2


    $("#event2").append("eventQuery").text();
    



    //console.log
  }
};

// XD3V changed line 234. We were using incorrect syntax for delcaring this .on click event listener in Jquery.
$("#submit").on("click", submitBtn);

// console.log(submitBtn());

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