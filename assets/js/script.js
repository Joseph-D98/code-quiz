// HEADER 

//Variables
//VARIABLES
var score = document.getElementById("score");
var timer = document.getElementById("timer");

//Text
score.textContent = "View High Scores";
timer.textContent = "Time: " + secondsLeft;

//Style
score.setAttribute("style", "color:purple; padding-left:20px;");
timer.setAttribute("style", "float:right; padding-right:30px;");

// Timer Function
var secondsLeft = 80;
var totalScore = 0;
var secondsLeft = 90;  

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        finalScore();
      }

    }, 1000);
  }

// START QUIZ
var h1 = document.querySelectorAll("h1");
var text = document.querySelectorAll("p");
var button = document.querySelector("button");
h1[0].textContent = "Coding Quiz Challenge"
text[0].textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your time by ten seconds";
button.textContent = "Start Quiz";

// Variables for questions 
var start = document.getElementById("start");
var explanation = document.getElementById("explanation");
var submitButton = document.getElementById("submit");
var quizQuestions = document.getElementById("quizQuestions");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var correctAnswer = document.getElementById("correct");
quizQuestions.setAttribute("style","font-size:20px; font-family:sans-serif;");
choice1.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
choice2.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
choice3.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
choice4.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
correctAnswer.setAttribute("style","font-size:15px; font-family: sans-serif; color:grey font-style: italic");
var answerResponse = document.getElementById("answerResponse");
var allDone = document.getElementById("allDone")
var finalScoreIs = document.getElementById("complete");
var initials = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var goBack = document.getElementById("goBack");
var clearHighScores = document.getElementById("clearHighScores");

//TEXT
score.textContent = "View High Scores";
timer.textContent = "Time: " + totalScore;
start.textContent = "Coding Quiz Challenge"
explanation.textContent = "Try to answer the following code-related questions within 80 seconds. Every incorrect answers will penalize your time by ten seconds";
submitButton.textContent = "Start Quiz";


// QUESTIONS 
var questions = [
var quizQuestions = [
    {
        question: "Commonly used Data Types Include:",
        choice1: "1. strings",
@@ -95,38 +72,29 @@ var questions = [
    }
]

//ALL DONE 
var end = document.getElementById("allDone")
var complete = document.getElementById("complete");
var submitButton = document.getElementById("submit");
var initials = document.getElementById("initials")
end.setAttribute("style","font-size:20px; font-family: sans-serif; padding:20px;");
finalScore.setAttribute("style","font-size:20px; font-family:sans-serif; padding:20px;");
submitButton.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
initials.setAttribute("style","font-size:15px; font-family: sans-serif;");
end.textContent = "All done!";
complete.textContent = "Your final score is " + finalScore;
submitButton.textContent - "Submit";
initials.textContent - "Enter Initials";

//High Scores 







  // Final Score Function 
  function showScore() {
    finalScore.textContent = " ";
    mainEl.appendChild(imgEl);
// timer.addEventListener("click", function();
// Timer / Score Function 
function submitButton() {
  var timerInterval = setInterval(function() {
    secondsLeft--;

  }
  setTime();
    if(secondsLeft === 0) {
      var finalScore = secondsLeft - wrongAnswer; 
      clearInterval(timerInterval);
      finalScorePage();
    }
  }, 1000);
}

  // Function that runs through question and answer 
// Go to All Done page 
function finalScorePage() {
    allDone.textContent = "All done!";
    finalScoreIs.textContent = "Your final score is " + finalScore;
    submitButton.textContent - "Submit";
    initials.textContent - "Enter Initials";
  }

// Function that runs through question and answer 
var lastQuestionIndex = questions.length-1;
var questionUserAnswering = 0;

@@ -145,6 +113,27 @@ function answerQuestion() {
    renderQuestion ()
}

 // Score Function NEED TO FINISH 
 //var finalScore = 
// Final Score Function 
function showScore() {
  finalScore.textContent = " ";
  mainEl.appendChild(imgEl);

}
setTime();

 //Click Events 

 //View High Scores  

 //Start Quiz 
 start.addEventListener("click", start);

 //Quiz Answers
 //Submit 

 //Go Back Button 
 //Clear High Scores Button  
