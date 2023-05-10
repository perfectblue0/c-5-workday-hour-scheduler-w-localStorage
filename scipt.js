// setHColors has bugs

function setHColors() {
    var now = dayjs();
    //for loop
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


// todo: load stored data from localStorage
function loadStoredData() {

}

function handleSaveClick(e) {
    var saveButton = $(e.target);
    // todo: store this hour's data in localStorage
}

// this will display stored data and display the colors
$(function() {
    loadStoredData();
    setHColors();
});

$('.saveBtn').on('click', handleSaveClick);

