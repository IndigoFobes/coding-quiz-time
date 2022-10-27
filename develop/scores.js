// variable to use to gather and use scores saved in local storage
var scoreData = JSON.parse(localStorage.getItem('scores'));
const ol = document.querySelector('#highscores');
const toHome = document.querySelector('#to-home');
const clearBtn = document.querySelector('#clear');

console.log(scoreData);

for (i = 0; i < scoreData.length; i++) {

    const score = scoreData[i];
    const scoreListEl = document.createElement('li');
    scoreListEl.textContent = score;
    ol.appendChild(scoreListEl);
    scoreListEl.setAttribute('class', 'score-list-el');

}

//
const backToHome = (event) => {
    event.preventDefault();
    document.location.replace('./index.html');
}

//
toHome.addEventListener('click', backToHome);

//
// Event listener for clear history button
clearBtn.addEventListener('click', function() {
    localStorage.clear()
    while (ol.firstChild) {
        ol.removeChild((ol.firstChild))
    }
});





// // This function runs as soon as page loads. It gets user's high score info.
// function init() {

//     // get highscores from local storage
//     const highScores = JSON.parse(localStorage.getItem('scores'));

//     console.log("***** High Scores: ", highScores);
// }

// init();