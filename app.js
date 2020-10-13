// GLOBAL VARIABLES
var times = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = moment().hour();
var colorTime = $("textarea").attr("id").toString();
var saveButton = $(".saveBtn");

// ADDS DATE AND TIME TO THE PAGE HEADER
$("#currentDay").text(moment().format("dddd" + ", " + "LL" + " - " + "LT"));

// CHECKS THE ID FOR EACH TEXT AREA TO THE CURRENT TIME TO DETERMINE
// PAST, PRESENT, AND FUTURE TIME SLOTS, CHANGES CLASSES BASED ON THIS
$(".inputText").each(function () {
    var hourBlock = parseInt($(this).attr("id"));
    if (hourBlock === currentHour) {
        $(this).addClass("present").removeClass("future").removeClass("past");
    } else if (hourBlock > currentHour) {
        $(this).addClass("future").removeClass("present").removeClass("past");
    } else if (hourBlock < currentHour) {
        $(this).addClass("past").removeClass("future").removeClass("present");
    }
});

// FUNCTION PULLS VALUES SAVED TO LOCAL STORAGE TO THE CORRESPONDING TEXT AREA
$(".inputText").each(function () {
    var id = $(this).attr("id");
    var schedule = localStorage.getItem(id);

    if (schedule !== null) {
        $(this).val(schedule);
    }
})

// FUNCTION SAVES BOTH VALUE OF TEXT AREA AND THE ID OF TEXT AREA UPON
// PRESSING THE SAVE BUTTON
saveButton.click(function () {
    var time = $(this).prev().attr("id");
    var schedule = $(this).prev().val();
    localStorage.setItem(time, schedule);
})