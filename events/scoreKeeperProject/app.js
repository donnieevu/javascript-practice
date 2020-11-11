const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
const player3 = {
    score: 0,
    button: document.querySelector('#p3Button'),
    display: document.querySelector('#p3Display')
}
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playingTo');
let winningScore = 5;
let isGameOver = false;

function updateScores(player, ...opponents) {
    if (!isGameOver) {
        player.score++;
    } if (player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add('has-text-success');
        player.button.disabled = true;
        for (let opponent of opponents) {
            opponent.display.classList.add('has-text-danger');
            opponent.button.disabled = true;
        }
    }
    player.display.textContent = player.score;
}

player1.button.addEventListener('click', function (e) {
    updateScores(player1, player2, player3);
})

player2.button.addEventListener('click', function (e) {
    updateScores(player2, player1, player3);
})


player3.button.addEventListener('click', function (e) {
    updateScores(player3, player1, player2);
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [player1, player2, player3]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}