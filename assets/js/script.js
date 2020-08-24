//Variable IDs 
//VARIABLE ID'S
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");

var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");
var finalScoreIs = document.getElementById("finalScoreIs");
var quizQuestionsPage = document.getElementById("quizQuestionsPage");
var questionButton = document.getElementsByClassName("questionButton");

//Variable Classes to hide / show pages
//VARIABLE CLASSES TO HIDE/SHOW PAGES
var quizChallengePage = document.querySelector(".quizChallengePage");
var finalScorePage = document.querySelector(".finalScorePage");


// QUIZ QUESTION ARRAY
var quizQuestions = [
  {
  "quizQuestionHeader" : "Commonly used Data Types do NOT Include:", 
  "one" : "1. strings",
  "two" : "2. booleans",
  "three" : "3. alerts",
  "four" : "4. numbers",
  "correct" : "3. alerts",
  },{
  "quizQuestionHeader" : "The condition in an if / else statement is enclosed within ________.",
  "one" : "1. quotes",
  "two" : "2. curly brackets",
  "three" : "3. parenthesis",
  "four" : "4. square brackets",
  "correct" : "3. parenthesis",
  },{
  "quizQuestionHeader" : "Arrays in JavaScript can be used to store ________.",
  "one" : "1. numbers and strings",
  "two" : "2. other arrays",
  "three" : "3. booleans",
  "four" : "4. all of the above",
  "correct" : "4. all of the above",
  },{
   "quizQuestionHeader" : "String values must be enclosed within ________ when being assigned to variables",
   "one" : "1. commas",
   "two" : "2. curly brackets",
   "three" : "3. parenthesis",
   "four" : "4. square brackets",
   "correct" : "3. parenthesis",
    },{
    "quizQuestionHeader" : "Arrays in JavaScript can be used to store ________.",
    "one" : "1. numbers and strings",
    "two" : "2. other arrays",
    "three" : "3. booleans",
    "four" : "4. all of the above",
    "correct" : "4. all of the above",
   },{
    "quizQuestionHeader" : "String values must be enclosed within ________ when being assigned to variables",
    "one" : "1. commas",
    "two" : "2. curly brackets",
    "three" : "3. quotes",
    "four" : "4. parenthesis",
    "correct" : "3. quotes",
   },{
    "quizQuestionHeader" : "A very useful tool used for developing and debugging for printing content to the debugger is:",
    "one" : "1. JavaScript",
    "two" : "2. terminal / bash",
    "three" : "3. for loops",
    "four" : "4. console.log",
    "correct" : "4. console.log",
   "three" : "3. quotes",
   "four" : "4. parenthesis",
   "correct" : "3. quotes",
  },{
   "quizQuestionHeader" : "A very useful tool used for developing and debugging for printing content to the debugger is:",
   "one" : "1. JavaScript",
   "two" : "2. terminal / bash",
   "three" : "3. for loops",
   "four" : "4. console.log",
   "correct" : "4. console.log",
  },
]

//CODING QUIZ CHALLENGE PAGE 
quizQuestionsPage.style.display = "none"; // Hide Quiz Questions Page
finalScorePage.style.display = "none";   // Hide Final Core Page 
submitButton.addEventListener("click", startQuiz);  // Event Listener when hit start quiz 

// TIMER FUNCTION BEGINS 
var secondsLeft = 5; // Seconds in Timer 
var secondsLeft = 80; // Seconds in Timer 
var startScore = 0; // Starting time 
var timer = document.getElementById("timer"); // Timer Variable 

timer.textContent = "Time: " + startScore; // Holder text in nav bar 
function startQuiz() { 
finalScorePage.style.display = "none"; // Hide Final Core Page 
quizChallengePage.style.display = "none"; // Hide Quiz Challenge Page 
quizQuestionsPage.style.display = "block"; // Show Quiz Questions Page

  var timerInterval = setInterval(function() {
  var timerInterval = setInterval(function() { 
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || quizQuestions.length === questionIndex+1) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);
})

// Show Questions 
// SHOW QUESTIONS
var questionIndex = 0;
var previousQuestionIndex = quizQuestions.length -1;

function showQuestions() {
  var q = quizQuestions[questionIndex];
  quizQuestionHeader.innerHTML = q.quizQuestionHeader;
  choice1.innerHTML = q.one;
  choice1.setAttribute("data-answer", q.one);
  choice2.innerHTML = q.two;
  choice2.setAttribute("data-answer", q.two);
  choice3.innerHTML = q.three;
  choice3.setAttribute("data-answer", q.three);
  choice4.innerHTML = q.four;
  choice4.setAttribute("data-answer", q.four);
}

// Event Listeners when user clicks button 
// EVENT LISTENERS WHEN USER CLICKS BUTTON
showQuestions();
choice1.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
  checkAnswer(event);
})

 // Check to see if the answer is correct
 // CHECK TO SEE IF ANSWER IS CORRECT
function checkAnswer(event) {
  event.preventDefault();

  function checkAnswer(event) {
      var answer = event.currentTarget.dataset.answer;
      console.log(answer);
      var correctAnswer = null;
  var answer = event.currentTarget.dataset.answer;
  var correctAnswer = null;

      if (quizQuestions[questionIndex].correct === answer) {
          correctAnswer = answer;
      }
      if (answer === correctAnswer) {
      answerResponse.textContent = "Correct!";
      } else {
      answerResponse.textContent = "Wrong!";
          secondsLeft -= 10
          if (secondsLeft < 0) {
              secondsLeft = 0;
          }
      }
      console.log(quizQuestions.length);
      console.log(questionIndex);
      if (quizQuestions.length === questionIndex+1) {
        showFinalScore();
        return;
  if (quizQuestions[questionIndex].correct === answer) {
      correctAnswer = answer;
  }
  if (answer === correctAnswer) {
  answerResponse.textContent = "Correct!"; // If correct, say correct
  } else {
  answerResponse.textContent = "Wrong!"; // If wrong, say wrong & deduct 10 points
      secondsLeft -= 10
      if (secondsLeft < 0) {
          secondsLeft = 0;
      }
      questionIndex++;
      showQuestions();
    }

// Go to All Done page & Print Score
function showFinalScore() {
  }
  if (quizQuestions.length === questionIndex+1) {
    showFinalScore(); // If it has gone through all questions, show final score
    return; // If not, print the next question
  }
  questionIndex++;
  showQuestions();
}

// GO TO "ALL DONE" PAGE AND SHOW FINAL SCORE
var finalScore = secondsLeft; 

function showFinalScore() { //Function to go to page when time out or quiz complete 
  quizChallengePage.style.display = "none"; // Hide Quiz Challenge Page
  quizQuestionsPage.style.display = "none"; // Hide Questions Page
  answerResponse.style.display = "none"; // Hides correct/incorrect response 
  finalScorePage.style.display = "block"; // Show Final Score Page 

  if (startScore === 0 || quizQuestions.length === null) {
  if (startScore === 0 || quizQuestions.length -1) { 
    finalScoreIs.textContent = "Your final score is " + finalScore;
  }
}

//Function to add in initials - THINK IS DONE 
var initials = document.getElementById("initials");
var intitialInput = document.getElementById("initialInput");
var initialButton = document.getElementById("initialButton");

var submittedInitial = document.getElementById("response");
// CAPTURE INITIALS AND GO TO HIGH SCORE PAGE 
var initialButton = document.getElementById("initialButton"); // Variable for Initial input
var initials = document.getElementById("initials"); // Variable for Initial input
var intitialInput = document.getElementById("initialInput"); // Variable for Initial input
var printInitials = document.getElementById("highScoreList");

initialButton.textContent = "Submit";
initials.textContent = "Enter Your Initials: ";

initialButton.addEventListener("click", function(event) { // click takes you to the high score page 
  event.preventDefault();

   var response = intitialInput.value;
   submittedInitial.textContent = response; 
 });
initialButton.textContent = "Submit"; // Form button 
initials.textContent = "Enter Your Initials: "; // Form text

renderInitials ();

 /*
 // Save score (use.value?) - adjust this code 
var highScore = localStorage.getItem("highScore");
localStorage.setItem("highScore", highScore);
function renderInitials() { 
  var getInitials = localStorage.getItem("initialInput"); 

  if (getInitials === null) {
    return;
  }

// Print high scores - adjust this code
function showScore() {
  finalScore.textContent = " ";
  mainEl.appendChild(imgEl);
  printInitials.textContent = highScoreList;
}
 */


  initialButton.addEventListener("click", function(event) { 
    event.preventDefault();

    var getInitials = document.getElementById("initialInput").value; 
    console.log("getInitials", getInitials);

    localStorage.setItem("getInitials", getInitials); 



    if (initialInput === "") {
      displayMessage("getInitials" + "finalScore");
      renderInitials ();
    }
});