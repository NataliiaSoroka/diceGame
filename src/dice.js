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
  
const createDice = elem => {
    return new Dice(elem);
}


export default {
    createDice
}