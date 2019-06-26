/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dice.js":
/*!*********************!*\
  !*** ./src/dice.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet Dice = function(elem) {\n    this.dice = elem\n  }\n  \n  Dice.prototype.initDice = function() {\n    this.dice.style.display = 'none';\n  }\n  \n  Dice.prototype.rollDice = function() {\n    this.diceValue = Math.floor(Math.random() * 6) + 1;\n    this.dice.src = `dice-${this.diceValue}.png`;\n    this.dice.style.display = 'block';\n  }\n  \nconst createDice = elem => {\n    return new Dice(elem);\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    createDice\n});\n\n//# sourceURL=webpack:///./src/dice.js?");

/***/ }),

/***/ "./src/gamer.js":
/*!**********************!*\
  !*** ./src/gamer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet Gamer = function(name) {\n    this.playerName = name;\n}\nGamer.prototype.setScore = function(score) {\n    this.score += score;\n}\nGamer.prototype.getScore = function() {\n    return this.score;\n}\nGamer.prototype.resetScore = function() {\n    this.score = 0;\n}\n\nconst checkExistPlayer = name => {\n    let playerFromStorage = window.localStorage.getItem(name);\n    if (playerFromStorage) {\n        return playerFromStorage;\n    } \n}\n\nconst changePlayer = (activePlayer, dice1, dice2) => {\n    document.getElementById('current-'+ activePlayer).textContent = 0;\n    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');\n    activePlayer = +!activePlayer;\n    dice1.initDice();\n    dice2.initDice();\n    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');\n    return activePlayer;\n}\n\nconst createPlayer = name => {\n    return new Gamer(name);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    checkExistPlayer,\n    changePlayer,\n    createPlayer\n});\n\n//# sourceURL=webpack:///./src/gamer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gamer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamer */ \"./src/gamer.js\");\n/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice */ \"./src/dice.js\");\n/*\nGAME RULES:\n\n- The game has 2 players, playing in rounds\n- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\n- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn\n- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn\n- The first player to reach 100 points on GLOBAL score wins the game\n\n*/\n\n\n\n\nconst RESET_VALUE = 2;\n\nlet scores = [];\nlet activePlayer = 0;\nlet current = 0;\n\nconst firstDiceElement = document.querySelector('#dice-1');\nconst secondDiceElement = document.querySelector('#dice-2');\nconst winningScoreElement = document.querySelector('.winning-score');\nconst firstPlayerElement = document.querySelector('#name-0');\nconst secondPlayerElement = document.querySelector('#name-1');\n\n\nconst dice1 = _dice__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDice(firstDiceElement);\nconst dice2 = _dice__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDice(secondDiceElement);\n\n\nconst initGame = () => {\n  document.querySelector('#current-0').textContent = 0;\n  document.querySelector('#current-1').textContent = 0;\n  document.querySelector('#score-0').textContent = 0;\n  document.querySelector('#score-1').textContent = 0;\n  current = 0;\n  dice1.initDice();\n  dice2.initDice();\n  let firstPlayerName = prompt('Enter name first player');\n  if (_gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkExistPlayer(firstPlayerName)) {\n    let answer = confirm('User already exist. It is you?');\n    if (!answer) {\n      firstPlayerName = prompt('Enter other name');\n    }\n  }\n  scores[0] = _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPlayer(firstPlayerName);\n  let secondPlayerName = prompt('Enter name second player');\n  if (_gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkExistPlayer(secondPlayerName)) {\n    let answer = confirm('User already exist. It is you?');\n    if (!answer) {\n      secondPlayerName = prompt('Enter other name');\n    }\n  }\n  scores[1] = _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPlayer(secondPlayerName);\n\n  firstPlayerElement.textContent = firstPlayerName;\n  secondPlayerElement.textContent = secondPlayerName;\n  scores[0].resetScore();\n  scores[1].resetScore();\n}\n\ninitGame();\n\ndocument.querySelector('.btn-roll').addEventListener('click', function() {\n  const winningScoreValue = winningScoreElement.value;\n  if (winningScoreValue) {\n    dice1.rollDice();\n    dice2.rollDice();\n\n    if (\n      dice1.diceValue !== RESET_VALUE \n      && dice2.diceValue !== RESET_VALUE \n      && dice1.diceValue !== dice2.diceValue\n    ) {\n      current += (dice1.diceValue + dice2.diceValue);\n      document.getElementById('current-'+activePlayer).textContent = current;\n\n      const winningScoreValue = winningScoreElement.value;\n      if (scores[activePlayer].getScore() + current >= winningScoreValue) {\n        let name = scores[activePlayer].playerName;\n        let winner = _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkExistPlayer(name);\n        window.localStorage.setItem(name, winner ? ++winner : 1);\n        let isNewGame = confirm(`Player ${name} won!!! \\nDo you want start new game?`);\n        \n        isNewGame && initGame();\n      }\n    } else {\n      activePlayer =  _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changePlayer(activePlayer, dice1, dice2);\n      current = 0;\n    }\n  } else {\n    winningScoreElement.focus();\n  }\n  \n});\n\n\ndocument.querySelector('.btn-hold').addEventListener('click', function() {\n  scores[activePlayer].setScore(current);\n  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer].getScore();\n  activePlayer = _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changePlayer(activePlayer, dice1, dice2);\n  current = 0;\n});\n\n\ndocument.querySelector('.btn-new').addEventListener('click', function() {\n  initGame();\n});\n\ndocument.querySelector('.winners').addEventListener('click', function() {\n  let str = '';\n  let winnersArr = Object.keys(window.localStorage).map((el) => {\n    return {\n      name: el,\n      score: window.localStorage[el]\n    }\n  });\n  if (winnersArr) {\n    let sortableWinner = winnersArr.sort((a, b) => {\n      return a.score > b.score ? -1 : 1;\n    })\n    sortableWinner.forEach(el => str += el.name + ': ' + el.score+ '\\n')\n  }\n  alert(str ? str : 'There are not winners');\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });