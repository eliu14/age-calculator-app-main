//TODO: Check valid dates
//TODO: Error when submitting incomplete input
//TODO: Set text to red when error
var buttonEl = document.getElementById("clickMe");
if (buttonEl.addEventListener)
   buttonEl.addEventListener("click", calculateAge, false);
else if (buttonEl.attachEvent)
   buttonEl.attachEvent('onclick', calculateAge);

function calculateAge () {
   var dayInput = document.getElementById("dayInput").value;
   var monthInput = document.getElementById("monthInput").value;
   var yearInput = document.getElementById("yearInput").value;
   // console.log("Day input: " + dayInput);
   // console.log("Month input: " + monthInput);
   // console.log("Year input: " + yearInput);
   
}