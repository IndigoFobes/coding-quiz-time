// This function runs as soon as page loads. It gets user's high score info.
function init() {

    // get highscores from local storage
    const highScores = JSON.parse(localStorage.getItem('scores'));

    console.log("***** High Scores: ", highScores);
}

init();
