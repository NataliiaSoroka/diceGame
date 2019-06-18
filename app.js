/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const RESET_VALUE = 2;

let scores = [0, 0];
let activePlayer = 0;
let current = 0;
const firstDiceElement = document.querySelector('#dice-1');
const secondDiceElement = document.querySelector('#dice-2');
const winningScoreElement = document.querySelector('.winning-score');

let Dice = function(elem) {
  this.dice = elem
}

Dice.prototype.initDice = function() {
  this.dice.style.display = 'none';
}

Dice.prototype.rollDice = function() {
  this.diceValue = Math.floor(Math.random() * 6) + 1;
  this.dice.src = `dice-${this.diceValue}.png`;
  this.dice.style.display = 'block';
}

const dice1 = new Dice(firstDiceElement);
const dice2 = new Dice(secondDiceElement);

const initGame = () => {
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  dice1.initDice();
  dice2.initDice();
}

initGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
  const winningScoreValue = winningScoreElement.value;
  if (winningScoreValue) {
    dice1.rollDice();
    dice2.rollDice();

    if (
      dice1.diceValue !== RESET_VALUE 
      && dice2.diceValue !== RESET_VALUE 
      && dice1.diceValue !== dice2.diceValue
    ) {
      current += (dice1.diceValue + dice2.diceValue);
      document.getElementById('current-'+activePlayer).textContent = current;

  const winningScoreValue = winningScoreElement.value;
      if (scores[activePlayer] + current >= winningScoreValue) {
        alert(`Player ${activePlayer} won!!!`);
      }
      
    } else {
      changePlayer();
    }
  } else {
    winningScoreElement.focus();
  }
  
});

const changePlayer = () => {
  current = 0;
  document.getElementById('current-'+activePlayer).textContent = 0;
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
  activePlayer = +!activePlayer;
  dice1.initDice();
  dice2.initDice();
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
}

document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += current;
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
  changePlayer();
});


document.querySelector('.btn-new').addEventListener('click', function() {
  initGame();
});
