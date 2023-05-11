var eventsData;

// setHColors has bugs

function setHColors() {
    var now = dayjs();
    
    for (var i = 9; i < 18; i++) {
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");
        } else {
            $("#hour-" + i + " textarea").addClass("future");
        }
    }
}


// will check if there's anything in localStorage, if so will load stored data and if not will default object below to be able to store data
function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "", 
            hour12: "", 
            hour13: "", 
            hour14: "", 
            hour15: "",
            hour16: "", 
            hour17: ""   
        };
    } // need function to show events, can see  devtools terminal where localStorage is shown, but not displayed on page
}



// this will grab data from html, modify, and store it in data object
function handleSaveClick(event) {
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    eventsData["hour" + hour] = value;

    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}


// when user clicks a saveBtn (button), will call function
$('.saveBtn').on('click', handleSaveClick);

// this will display stored data and display the hour colors
$(function() {
    loadStoredData();
    setHColors();
});