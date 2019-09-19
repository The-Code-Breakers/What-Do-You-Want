window.onload = function () {
    $('#results').hide()
}

$("#w-and-l").click(function () {
    alert("weather & location .click() called.");
});

$("#t-and-d").click(function () {
    alert("time & date .click() called.");
});

$("#event1").click(function () {
    alert("event#1 .click() called.");
});

$("#event2").click(function () {
    alert("event2 .click() called.");
});

$("#reset-all").click(function () {
    $("#results").hide();
    $("#index").show();
});

$('#submit').click(function (event) {
    event.preventDefault()
    $("#index").hide();
    $("#results").show();
})