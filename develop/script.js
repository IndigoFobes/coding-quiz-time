// define all the variables. YAY!
var highScores = document.querySelector(".high-scores")
var timerElement = document.querySelector(".timer-element");
var intro = document.querySelector(".intro");
var startQuizBtn = document.querySelector(".start-quiz");
var hideStart = document.querySelector(".hide-start");
var bigBox = document.querySelector(".big-box");

var youWin = false;
var youLose;
var timer;
var timerCount;

// Array of questions and answers...
var questions = [
{question: "What kind of file do you need to include in your repository to describe your application and how to use it?",
choices: [
    "README.md",
    "index.html",
    "script.js",
    "google doc"
],
answer: "README.md"},

{question: "What is this?",
choices: [
    "README.md",
    "index.html",
    "script.js",
    "google doc"
],
answer: "README.md"},

{question: "What is this?",
choices: [
    "README.md",
    "index.html",
    "script.js",
    "google doc"
],
answer: "README.md"},

{question: "What is this?",
choices: [
    "README.md",
    "index.html",
    "script.js",
    "google doc"
],
answer: "README.md"},

{question: "What is this?",
choices: [
    "README.md",
    "index.html",
    "script.js",
    "google doc"
],
answer: "README.md"},
]

// Create a div (a container for each question).
var questionDiv = document.createElement("div");
// Add a class to that div (to style in css).
questionDiv.classList.add("divStyle");
// This p tag is where the question text goes.
var questionBox = document.createElement("p"); 
// Give the question p tag a class (to style in css).
questionBox.classList.add("questionStyles");
// Create an un ordered list for the multiple choice answers.
var questionAnswers = document.createElement("ul");
// Give it a class for STYLE.
questionAnswers.classList.add("answerStyles");


// This function runs as soon as page loads. It gets user's high score info.
function init() {
    //getHighScores()
}


// Define startQuiz function: When quiz starts, the timer is at 90. 
// The startTimer function is called, so that the time immediately begins decrementing.
// askQuestion function called
function startQuiz() {
    timerCount = 90;
    startTimer();
    intro.setAttribute("style", "display: none");
    hideStart.setAttribute("style", "display: none");
    askQuestion();
}

  // This is our starting iteration. 
  let i = 0;
// Define function askQuestion1()
function askQuestion() {

    // Append this new div to the big box.
    bigBox.appendChild(questionDiv);
    // The text will be each question within the questions array.
    var questionText = document.createTextNode(questions[i].question);
    // Append text to p tag.
    questionBox.appendChild(questionText);
    // Append the question p tag to the question div wihtin the big box.
    questionDiv.appendChild(questionBox);
    // Append this un ordered list to the question container.
    questionDiv.appendChild(questionAnswers);
    // Remove the center alignment previously placed on this container.
    bigBox.classList.remove("center-alignment");


    // This loop goes through each set of choices within each question.
    for (w=0; w<4; w++) {
        // Create a list item for each answer choice.
        var newAnswer = document.createElement("li");
        // This will grab each item in the choices array and make it the text of each li.
        var newAnswerText = document.createTextNode(questions[i].choices[w]); 
        // Append the text to the li.
        newAnswer.appendChild(newAnswerText);
        // Now append the new list items to the unordered list created a few lines above, before the loop.
        questionAnswers.appendChild(newAnswer);
        // Give a class for some classy style.
        newAnswer.classList.add("answers"); 
        newAnswer.setAttribute('id', 'answerClick')
        
    }
}

// Event listener for answers. (JQuery would be easier lol.)
document.body.addEventListener( 'click', function ( e ) {
    if( e.target.id == 'answerClick' ) {
        // Give a variable to the targeted (clicked) element.
        var d = e.target;
        // Check if it's the right answer...
        isItRight();
    };
     // Define function isItRight. (I THINK it has to be defined inside the event listener function because the element we're targeting was was created dynamically, adn we need certain variables defined in there?)
    function isItRight() {
        // If the selected choice is the same as the answer...
        if (d.innerHTML === questions[i].answer) {
            console.log("correct!");
            // Trigger the function to move on to the next question.
            nextQuestion();
        } else {
            console.log("not it fam.");
            // Trigger the function to subtract time from timer.
            subtractTime();
            // And move to next question
            nextQuestion();
        };
      }
  } );


// Define timer function.
function startTimer() {
    // The interval of the following function (the countdown) is every one second.
    timer = setInterval(function() {
    timerCount--; // Timer decrementing
    timerElement.textContent = timerCount;
    if (timerCount > 0 && youWin) {
        clearInterval(timer);
        youDitIt();
    }
    if (timerCount === 0) {
        clearInterval(timer);
        notQuite();
    }},
    1000);
};

// When button is clicked, quiz starts.
startQuizBtn.addEventListener("click", startQuiz);

init()



