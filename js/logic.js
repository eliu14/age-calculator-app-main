//TODO: Check valid dates
//TODO: Error when submitting incomplete input
//TODO: Add logic to actually calculate date difference

var buttonEl = document.getElementById("clickMe");
if (buttonEl.addEventListener)
   buttonEl.addEventListener("click", calculateAge, false);
else if (buttonEl.attachEvent)
   buttonEl.attachEvent('onclick', calculateAge);


function calculateAge () {
   var dayInput = document.getElementById("dayInput");
   var monthInput = document.getElementById("monthInput");
   var yearInput = document.getElementById("yearInput");

   var dayLabel = document.getElementById("dayLabel");
   var monthLabel = document.getElementById("monthLabel");
   var yearLabel = document.getElementById("yearLabel");

   var dayValue = parseInt(dayInput.value);
   var monthValue = parseInt(monthInput.value);
   var yearValue = parseInt(yearInput.value);

   console.log("Day input: " + dayValue);
   console.log("Month input: " + monthValue);
   console.log("Year input: " + yearValue);

   var dayErrorEl = document.getElementById("dayError");
   var monthErrorEl = document.getElementById("monthError");
   var yearErrorEl = document.getElementById("yearError");

   dayErrorEl.innerText = "";
   monthErrorEl.innerText = "";
   yearErrorEl.innerText = "";

   dayInput.classList.remove("red-border");
   monthInput.classList.remove("red-border");
   yearInput.classList.remove("red-border");

   dayLabel.classList.remove("errorFontRed");
   monthLabel.classList.remove("errorFontRed");
   yearLabel.classList.remove("errorFontRed");

   //Check valid input
   if (!dayValue){
      dayErrorEl.innerText = "Must be a valid day";
      dayInput.classList.add("red-border");
      dayLabel.classList.add("errorFontRed");
   }
   if (!monthValue){
      monthErrorEl.innerText = "Must be a valid month";
      monthInput.classList.add("red-border");
      monthLabel.classList.add("errorFontRed");
   }
   if (!yearValue){
      yearErrorEl.innerText = "Must be in the past";
      yearInput.classList.add("red-border");
      yearLabel.classList.add("errorFontRed");
   }
   if (!dayValue || !monthValue || !yearValue) {
      return;
   }
}