/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

import gamer from './gamer';
import dice from './dice';

const RESET_VALUE = 2;

let scores = [];
let activePlayer = 0;
let current = 0;

const firstDiceElement = document.querySelector('#dice-1');
const secondDiceElement = document.querySelector('#dice-2');
const winningScoreElement = document.querySelector('.winning-score');
const firstPlayerElement = document.querySelector('#name-0');
const secondPlayerElement = document.querySelector('#name-1');


const dice1 = dice.createDice(firstDiceElement);
const dice2 = dice.createDice(secondDiceElement);


const initGame = () => {
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  current = 0;
  dice1.initDice();
  dice2.initDice();
  let firstPlayerName = prompt('Enter name first player');
  firstPlayerName = gamer.checkExistPlayer(firstPlayerName);
  scores[0] = gamer.createPlayer(firstPlayerName);
  let secondPlayerName = prompt('Enter name second player');
  secondPlayerName = gamer.checkExistPlayer(secondPlayerName);
  scores[1] = gamer.createPlayer(secondPlayerName);

  firstPlayerElement.textContent = firstPlayerName;
  secondPlayerElement.textContent = secondPlayerName;
  scores[0].resetScore();
  scores[1].resetScore();
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
      if (scores[activePlayer].getScore() + current >= winningScoreValue) {
        let name = scores[activePlayer].playerName;
        let winner = gamer.checkExistPlayer(name);
        window.localStorage.setItem(name, winner ? ++winner : 1);
        let isNewGame = confirm(`Player ${name} won!!! \nDo you want start new game?`);
        
        isNewGame && initGame();
      }
    } else {
      activePlayer =  gamer.changePlayer(activePlayer, dice1, dice2);
      current = 0;
    }
  } else {
    winningScoreElement.focus();
  }
  
});


document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer].setScore(current);
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer].getScore();
  activePlayer = gamer.changePlayer(activePlayer, dice1, dice2);
  current = 0;
});


document.querySelector('.btn-new').addEventListener('click', function() {
  initGame();
});

document.querySelector('.winners').addEventListener('click', function() {
  let str = '';
  let winnersArr = Object.keys(window.localStorage).map((el) => {
    return {
      name: el,
      score: window.localStorage[el]
    }
  });
  if (winnersArr) {
    let sortableWinner = winnersArr.sort((a, b) => {
      return a.score > b.score ? -1 : 1;
    })
    sortableWinner.forEach(el => str += el.name + ': ' + el.score+ '\n')
  }
  alert(str ? str : 'There are not winners');
})
