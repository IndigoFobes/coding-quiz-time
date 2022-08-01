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

//Styles
//var questionStyles = document.querySelector(".question-styles")

// IDK about this one...
firstStyle = {
    "background-color": "purple",
    "border-radius": "2rem",
    "width": "10rem",
    "height": "10rem",
}

// I will have an array of questions and answers...
var question1 = {
    question: "What kind of file do you need to include in your repository in order to describe your code and explain how to use it?",
    choices: {
        correctAnswer: "README.md",
        incorrectAnswer1: "index.html",
        incorrectAnswer2: "script.js",
        incorrectAnswer3: "google doc"
    }
}
var question2 = {
    question: "This is question number two!",
    choices: {
        incorrectAnswer1: "index.html",
        incorrectAnswer2: "script.js",
        correctAnswer: "right answer!",
        incorrectAnswer3: "google doc"
    }
}
var question3 = {
    question: "What kind of file do you need to include in your repository in order to describe your code and explain how to use it?",
    choices: {
        correctAnswer: "README.md",
        incorrectAnswer1: "index.html",
        incorrectAnswer2: "script.js",
        incorrectAnswer3: "google doc"
    }
}
var question4 = {
    question: "What kind of file do you need to include in your repository in order to describe your code and explain how to use it?",
    choices: {
        correctAnswer: "README.md",
        incorrectAnswer1: "index.html",
        incorrectAnswer2: "script.js",
        incorrectAnswer3: "google doc"
    }
}
var question5 = {
    question: "What kind of file do you need to include in your repository in order to describe your code and explain how to use it?",
    choices: {
        correctAnswer: "README.md",
        incorrectAnswer1: "index.html",
        incorrectAnswer2: "script.js",
        incorrectAnswer3: "google doc"
    }
}
var question6 = {
    question: "What kind of file do you need to include in your repository in order to describe your code and explain how to use it?",
    choices: {
        correctAnswer: "README.md",
        incorrectAnswer1: "index.html",
        incorrectAnswer2: "script.js",
        incorrectAnswer3: "google doc"
    }
}
var question7 = {
    question: "What kind of file do you need to include in your repository in order to describe your code and explain how to use it?",
    choices: {
        correctAnswer: "README.md",
        incorrectAnswer1: "index.html",
        incorrectAnswer2: "script.js",
        incorrectAnswer3: "google doc"
    }
}
var question8 = {
    question: "What kind of file do you need to include in your repository in order to describe your code and explain how to use it?",
    choices: {
        correctAnswer: "README.md",
        incorrectAnswer1: "index.html",
        incorrectAnswer2: "script.js",
        incorrectAnswer3: "google doc"
    }
}

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
    askQuestion1();
}


// Define function askQuestion1()
function askQuestion1() {
    var question1Div = document.createElement("div");
    question1Div.classList.add("divStyle");
    bigBox.appendChild(question1Div);
    var question1Box = document.createElement("p"); 
    var question1Text = document.createTextNode(question1.question); 
    question1Box.appendChild(question1Text);
    question1Div.appendChild(question1Box);
    question1Box.classList.add("questionStyles");
    var question1Answers = document.createElement("ul");
    question1Answers.classList.add("answerStyles");
    question1Div.appendChild(question1Answers);
    bigBox.classList.remove("center-alignment"); // remove center alignment once quiz is started


    // Show questions as list items (i.e. multiple choice questions)
    for (i=0; i<4; i++) {
        var arr = Object.values(question1.choices);
        var newAnswer = document.createElement("li");
        var newAnswerText = document.createTextNode(arr[i]);
        newAnswer.appendChild(newAnswerText);
        question1Answers.appendChild(newAnswer);
        newAnswer.classList.add("answers"); 
    }

    // style the answers on hover and click in css... respond to click (is it correct or incorrect?)
    var answers = document.querySelectorAll(".answers");
    answers.forEach(item => {
        // 
        item.addEventListener("click", function clickEvent(event) {
            console.log("answer selected: " + this.innerHTML);
            item.setAttribute("style", "font-weight: 800"); // can take this out and put into css if wanted
            // Go through each item in a for loop. if item === correctAnswer, add class to that element..
            if (this.innerHTML === "README.md") {
                item.setAttribute("id", "correct");
                console.log("correct!!");
            }
            else {
                console.log("nope");
            }
        });
});
        // This event listener activates function to check if right or wrong
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

init()



//random snippets to be deleted later
//var question1Box = document.createElement("div");
    //bigBox.appendChild(question1Box);
    //Object.assign(question1Box.style, firstStyle);
    //var question1Text = document.createElement("p");
    //question1Box.append