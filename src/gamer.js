let Gamer = function(name) {
    this.playerName = name;
}
Gamer.prototype.setScore = function(score) {
    this.score += score;
}
Gamer.prototype.getScore = function() {
    return this.score;
}
Gamer.prototype.resetScore = function() {
    this.score = 0;
}

const checkExistPlayer = name => {
    let playerFromStorage = window.localStorage.getItem(name);
    if (playerFromStorage) {
        let answer = confirm('User already exist. It is you?');
        if (!answer) {
            return prompt('Enter other name');
        }
        // return playerFromStorage;
    } else {
        return name;
    }
}

const changePlayer = (activePlayer, dice1, dice2) => {
    document.getElementById('current-'+ activePlayer).textContent = 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    activePlayer = +!activePlayer;
    dice1.initDice();
    dice2.initDice();
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    return activePlayer;
}

const createPlayer = name => {
    return new Gamer(name);
}

export default {
    checkExistPlayer,
    changePlayer,
    createPlayer
}