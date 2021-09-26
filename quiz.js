var quizForm = document.querySelector(".quiz-form");
var submitButton = document.querySelector("#submit-answer-btn");
var outputDiv = document.querySelector("#win");
var winLose = document.querySelector("#lose");
var correctAnswers = ['90°', 'right angled', 'one right angle'];

function calculateScore() {
    hiddenMessage();
    var score = 0;
    var index = 0;

    const data = new FormData(quizForm);
    for (let value of data.values()) {
        if (value == correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputDiv.innerText = "Your Score is " + score;
    totalScore(score);
}

submitButton.addEventListener("click", calculateScore);
function hiddenMessage() {
    outputDiv.style.display = "none";
    winLose.style.display = "none";
}
function totalScore(score) {
    if (score >= 2) {
        outputDiv.style.display = "block";
        winLose.style.display = "block";
        winLose.innerText = "YOU WON!"
    }
    else {
        outputDiv.style.display = "block";
        winLose.style.display = "block";
        winLose.innerText = "try again later!";
    }
}