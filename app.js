$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd" + ", " + "LL" + " - " + "LT"));
});
