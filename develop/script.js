// define all the variables. YAY!
var highScores = document.querySelector("#high-scores")
var timerElement = document.querySelector(".timer-element");
var intro = document.querySelector(".intro");
var startQuizBtn = document.querySelector(".start-quiz");
var hideStart = document.querySelector(".hide-start");
var bigBox = document.querySelector(".big-box");
var score = document.getElementById('score');


var youWin = false;
var youLose;
var timer;
var timerCount;

// If nothing is in localStorage, scoreArray is an empty array, otherwise, get what is already in there.
let scoreArray 
if (localStorage.getItem('scores')) {
    scoreArray = JSON.parse(localStorage.getItem('scores'))
} else {
    scoreArray = [];
}

// set up localStorage with current values
localStorage.setItem('scores', JSON.stringify(scoreArray));


// No questions answered at beginning of quiz
let questionsAnswered = 0;

// Array of questions and answers...
var questions = [
{question: "What kind of file do you need to include in your repository in order to describe your application and how to use it?",
choices: [
    "README.md",
    "index.html",
    "script.js",
    "google doc"
],
answer: "README.md"},

{question: "What does 'npm' stand for?",
choices: [
    "New Program Maintenance",
    "Node Protection Model",
    "Node Package Manager",
    "Next Processing Mode"
],
answer: "Node Package Manager"},

{question: "Which HTML tag does not need a closing tag?",
choices: [
    "form",
    "input",
    "html",
    "p"
],
answer: "input"},

{question: "______ function rounds a number down to its nearest integer.",
choices: [
    "Math.floor()",
    "Math.random()",
    "Math.ceil()",
    "Math.min()"
],
answer: "Math.floor()"},

{question: "Elements are styled in a CSS file using which of the following?",
choices: [
    "Parentheses",
    "Quotation marks",
    "Curly brackets",
    "All of the above"
],
answer: "Curly brackets"},
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
// hide the current div
questionDiv.classList.add("hideDiv");



// Event listener for high score button to go to highscore page
highScores.addEventListener('click', function() {
    document.location.replace('./viewscores.html');
})

// Define startQuiz function: When quiz starts, the timer is at 90. 
// The startTimer function is called, so that the time immediately begins decrementing.
// askQuestion function called
function startQuiz() {
    timerCount = 90;
    startTimer();
    intro.setAttribute("style", "display: none");
    hideStart.setAttribute("style", "display: none");
    createDiv();
}


// Event listener for answers. (JQuery would be easier lol.)
document.body.addEventListener( 'click', function ( e ) {
    if( e.target.id == 'answerClick' ) {
        // Give a variable to the targeted (clicked) element.
        var d = e.target;
        questionsAnswered++; 
        // Check if it's the right answer...
        isItRight();
        console.log(questionsAnswered);
    };
    
     // Define function isItRight. (I THINK it has to be defined inside the event listener function because the element we're targeting was was created dynamically, adn we need certain variables defined in there?)
    function isItRight() {
        // If the selected choice is the same as the answer...
        if (d.innerHTML === questions[i].answer) {
            console.log("correct!");
            // hide the current div
            questionDiv.classList.add("hideDiv");
            // Trigger the function to move on to the next question.
            questionAnswers.innerHTML="";
            if (questionsAnswered === 5) {
                console.log('done');
                endQuiz();
            } else {
            askQuestion();
            }
        } else {
            console.log("not it fam.");
            // hide the current div
            questionDiv.classList.add("hideDiv");
            // Trigger the function to subtract time from timer.
            subtractTime();
            // And move to next question
            questionAnswers.innerHTML="";
            if (questionsAnswered === 5) {
                console.log('done');
                endQuiz();
            } else {
            askQuestion();
            }
        };


      }
});

let i=0;

    // Define function askQuestion1()
function createDiv() {
    
    // Show hidden div.
    questionDiv.classList.remove("hideDiv");
    // Append this new div to the big box.
    bigBox.appendChild(questionDiv);
    // The text will be each question within the questions array.
    //var questionText = document.createTextNode(questions[i].question);
    // Reset question text
    questionBox.innerHTML = "";
     // Append text to p tag.
    questionBox.textContent = questions[i].question;
    // Append the question p tag to the question div wihtin the big box.
    questionDiv.appendChild(questionBox);
    // Append this un ordered list to the question container.
    questionDiv.appendChild(questionAnswers);
    // Remove the center alignment previously placed on this container.
    bigBox.classList.remove("center-alignment");
   
    

    // This loop goes through each set of choices within each question.
    for (var w=0; w<4; w++) {
        // Create a list item for each answer choice.
        var newAnswer = document.createElement("li");
        // This will grab each item in the choices array and make it the text of each li.
        //var newAnswerText;
        //newAnswer.innerHTML = questions[i].choices[w];
        newAnswer.textContent = questions[i].choices[w];
        //var newAnswerText = document.createTextNode(questions[i].choices[w]); 
        // Append the text to the li.
        //newAnswer.appendChild(newAnswerText);
        // Now append the new list items to the unordered list created a few lines above, before the loop.
        //questionAnswers.innerHTML = newAnswerText;
        questionAnswers.appendChild(newAnswer);
        // Give a class for some classy style.
        newAnswer.classList.add("answers");
        // Set id to be referenced in following event listener 
        newAnswer.setAttribute('id', 'answerClick')
        
    }

};

function saveToStorage(event) {
    event.preventDefault();
    // go to high score page
    document.location.replace('./viewscores.html');
    // Set savedScore details to put into local storage
    var userInitials = document.querySelector('#initials').value.trim();
    let savedScore = userInitials + ', ' + timerCount;

    //console.log('***** ', savedScore)
        //const jsonObj = JSON.stringify(savedScore);
    // Push this score object into the score array
    scoreArray.push(savedScore);

    // Set initials and score to local storage
    localStorage.setItem('scores', JSON.stringify(scoreArray));
}

// Define end div function
function showEndDiv() {
// Show the form div
var enterInitials = document.querySelector('.enter-initials');
enterInitials.classList.remove('hide');

// Show user's score
score.textContent = timerCount;

const submitBtn = document.querySelector("#btn");
submitBtn.addEventListener('click', saveToStorage);
}

// Define end of quiz
function endQuiz() {
    console.log(timerCount);
    // Stop timer
    clearInterval(timer);
    showEndDiv()
}

// Define subtractTime
function subtractTime() {
    // Subtract 5 seconds from timer.
    timerCount -= 5;
}

function askQuestion() {
    i++;
    createDiv();
}

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


