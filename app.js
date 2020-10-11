var times = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = moment().format("HH");


$("#currentDay").text(moment().format("dddd" + ", " + "LL" + " - " + "LT"));

var colorTime = $("textarea").attr("id").toString();

$("textarea").each(function(){
    if(colorTime < currentHour){
    $("textarea").addClass("past");
    }
});


// $("button").click(function () {
//     $("textarea")
// });

$("button").on("click", function(){
    $('input, select, textarea').each(function() {
     var value = $(this).val(),
         name = $(this).attr("id");
         console.log(value);
         console.log(name);
     localStorage[name] = value;
             
})});