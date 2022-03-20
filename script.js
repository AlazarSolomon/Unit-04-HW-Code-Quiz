var secondsLeft = 75;
var score = 0
var scoreEl = document.querySelector("#score");
var timeEl = document.querySelector(".timer");
var initialsEl = document.querySelector("#initials");
var highscoreEl = document.querySelector("#Highscore");

var pageOneEl = document.querySelector(".page-1")
var pageTwoEl = document.querySelector(".page-2")
var pageThreeEl = document.querySelector(".page-3")
var pageFourEl = document.querySelector(".page-4")
var pageFiveEl = document.querySelector(".page-5")
var pageSixEl = document.querySelector(".page-6")
var pageSevenEl = document.querySelector(".page-7")

var startEl = document.querySelector("#start");
var submitEl = document.querySelector("#submit");
var clearEl = document.querySelector("#clear");
var viewHighScoreEl = document.querySelector("#submit1");
var backEl = document.querySelector("#back");


var stringsEl = document.querySelector("#strings");
var booleansEl = document.querySelector("#booleans");
var alertsEl = document.querySelector("#alerts");
var numbersEl = document.querySelector("#numbers");

var quotesEl = document.querySelector("#quotes");
var curlyEl = document.querySelector("#curly");
var parenthesisEl = document.querySelector("#parenthesis");
var squareEl = document.querySelector("#square");

var numbersStringsEl = document.querySelector("#numbersStrings");
var otherEl = document.querySelector("#other");
var booleansTwoEl = document.querySelector("#booleans2");
var allEl = document.querySelector("#all");

var commasEl = document.querySelector("#commas");
var curlyBracketsEl = document.querySelector("#curlyBrackets");
var quotesTwoEl = document.querySelector("#quotes2");
var parenthesisTwoEl = document.querySelector("#parenthesis2");

var appendedScore = [];

function renderappendedScore() {
  
  for (var i = 0; i < appendedScore.length; i++) {
    var append = appendedScore[i];

    var li = document.createElement("li");
    li.textContent = append;
    li.setAttribute("data-index", i);

    highscoreEl.appendChild(li);
  }
}

function init() {
  // Get stored scores from localStorage
  var storedScores = JSON.parse(localStorage.getItem("appendedScore"));

  // If scores were retrieved from localStorage, update the scores array to it
  if (storedScores !== null) {
    appendedScore = storedScores;
  }

  // This is a helper function that will stores scores to the DOM
  renderappendedScore();
}
function storedScores() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("appendedScore", JSON.stringify(appendedScore))
}





pageTwoEl.style.visibility = 'hidden';
pageThreeEl.style.visibility = 'hidden';
pageFourEl.style.visibility = 'hidden';
pageFiveEl.style.visibility = 'hidden';
pageSixEl.style.visibility = 'hidden';
pageSevenEl.style.visibility = 'hidden';

function subtractTime() {
    secondsLeft = secondsLeft - 10; 
}

function setCounterText() {
    scoreEl.textContent = score;
  }


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time:" + secondsLeft;
  
      if(secondsLeft === 0) {
        location.reload();
      }
    }, 1000);
  }



//Start Page

startEl.addEventListener("click", function(){
if (startEl) 
setTime();
pageOneEl.style.visibility = 'hidden';
pageTwoEl.style.visibility = 'visible';
});
    

//First Page

alertsEl.addEventListener("click", function(){
score = score + 10
setCounterText();
pageTwoEl.style.visibility = 'hidden';
pageThreeEl.style.visibility = 'visible';
});
  
stringsEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageTwoEl.style.visibility = 'hidden';
pageThreeEl.style.visibility = 'visible';
});

booleansEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageTwoEl.style.visibility = 'hidden';
pageThreeEl.style.visibility = 'visible';
});

numbersEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageTwoEl.style.visibility = 'hidden';
pageThreeEl.style.visibility = 'visible';
});

//Second Page
      
parenthesisEl.addEventListener("click", function(){
score = score + 10
setCounterText();
pageThreeEl.style.visibility = 'hidden';
pageFourEl.style.visibility = 'visible';
});
  
quotesEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageThreeEl.style.visibility = 'hidden';
pageFourEl.style.visibility = 'visible';
});

curlyEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageThreeEl.style.visibility = 'hidden';
pageFourEl.style.visibility = 'visible';
});

squareEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageThreeEl.style.visibility = 'hidden';
pageFourEl.style.visibility = 'visible';
});

//third page

allEl.addEventListener("click", function(){
score = score + 10
setCounterText();
pageFourEl.style.visibility = 'hidden';
pageFiveEl.style.visibility = 'visible';
});
  
booleansTwoEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageFourEl.style.visibility = 'hidden';
pageFiveEl.style.visibility = 'visible';
});

otherEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageFourEl.style.visibility = 'hidden';
pageFiveEl.style.visibility = 'visible';
});

numbersStringsEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageFourEl.style.visibility = 'hidden';
pageFiveEl.style.visibility = 'visible';
});

//Fourth page

quotesTwoEl.addEventListener("click", function(){
score = score + 10
setCounterText();
pageFiveEl.style.visibility = 'hidden';
pageSixEl.style.visibility = 'visible';
});
  
commasEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageFiveEl.style.visibility = 'hidden';
pageSixEl.style.visibility = 'visible';
});

curlyBracketsEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageFiveEl.style.visibility = 'hidden';
pageSixEl.style.visibility = 'visible';
});

parenthesisTwoEl.addEventListener("click", function(){
score = score - 10
setCounterText();
subtractTime();
pageFiveEl.style.visibility = 'hidden';
pageSixEl.style.visibility = 'visible';
});


//Fifth page 

submitEl.addEventListener("click", function(){
pageSixEl.style.visibility = 'hidden';
pageSevenEl.style.visibility = 'visible';


var appendText = initialsEl.value.trim();

  // Return from function early if submitted todoText is blank
  if (appendText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  appendedScore.push(appendText);

  // Store updated todos in localStorage, re-render the list
  storedScores();



});

//Sixth page

clearEl.addEventListener("click", function() {
localStorage.clear()

// storedScores();
// renderappendedScore();
}
);

//Highscore page


viewHighScoreEl.addEventListener("click", function() {
  pageOneEl.style.visibility = 'hidden';
  pageTwoEl.style.visibility = 'hidden';
  pageThreeEl.style.visibility = 'hidden';
  pageFourEl.style.visibility = 'hidden';
  pageFiveEl.style.visibility = 'hidden';
  pageSixEl.style.visibility = 'hidden';
  pageSevenEl.style.visibility = 'visible';
});

backEl.addEventListener("click", function() {
  pageOneEl.style.visibility = 'hidden';
  pageTwoEl.style.visibility = 'hidden';
  pageThreeEl.style.visibility = 'hidden';
  pageFourEl.style.visibility = 'hidden';
  pageFiveEl.style.visibility = 'hidden';
  pageSixEl.style.visibility = 'visible';
  pageSevenEl.style.visibility = 'hidden';
});





init()










// function saveHighScore() {
//   // Save related form data as an object
//   var HighScore = {
//     score: score.value.trim()
//   };

//   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//   localStorage.setItem("saveHighScore", JSON.stringify(saveHighScore));
// }