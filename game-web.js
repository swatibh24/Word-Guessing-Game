const wordsArr = require ('./words');
const constants= require('./constants');

const gameWeb = {
    gamePage: function(gameId,words) {
        return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/game.css"/>
          <title>Word Guessing Game</title>
        </head>
         <header>
            <h1>Let's play a word guessing game</h1>
        </header>
        <body>
        <div id="start-game">           
           <form action="/game-web" method="post">
            <input type="hidden" name="gameId" value="${gameId}" readonly="readonly"/>
             <button class="btn" >Start New Game</button>
           </form>
        </div>
        <div id="game-app">
            <div class="display-panel">
              ${gameWeb.getListOfUserGuess(gameId,words)}
            </div> 
            <div>
            ${gameWeb.submitUserGuess(gameId,words)}
          </div>
        </div>
         <div id="game-app">
            <li>Instructions to play: </li>
            <li>Click Start New Game To Play</li>
            <li>Hint of guess letter would be given when you click start new game!!</li>
            <li>After winning the game click start button if you want to play again!!</li>
        </div>
        </div>
        </body>
      </html>
  `;
    },
    checkUserGuesses: function (words,gameID,userGuess) {
        let result="";
        const secretWord=words[gameID.substring(4,5)];
        if (words.indexOf(userGuess.toUpperCase()) !== -1) {
            if (userGuess.toUpperCase() === secretWord.toUpperCase()) { //exact match case
                constants.turns++;
                result=(`CORRECT!  You won in ${constants.turns} turns!`);
                constants.turns=0;
            } else {
                const match = gameWeb.compare(userGuess.toUpperCase(), secretWord.toUpperCase());
                result=(`You matched ${match} letters out of ${secretWord.length}`);
                constants.turns++;
            }
        } else {
            result="It is an invalid word please try again!!";
        }
        return result;
    },
    compare: function ( word, guess ) {
        let foundMatches = 0;
        const count = {};
        for( let letter of word.toLowerCase() ) { //first word
            count[letter] = count + 1 || 1;
        }
        for( let letter of guess.toLowerCase() ) { //second word
            if( count[letter] ) {
                count[letter] -= 1;
                foundMatches += 1;
            }
        }
        return foundMatches;
    },
    getListOfUserGuess: function(gameId,words) {
        constants.resultUserGuessArray = constants.userGuessArray.filter(item => item.gameId==gameId);
        return `<ol class="messages">` + (constants.resultUserGuessArray).map(message=>`
        <li id="list">
          <div class="message">
            <div class="meta-info">
              <div class="user-info">
              <span class="user-guess">${message.userGuess}</span>
             </div>
           </div>
            <p class="message-text"> ${message.text}</p>            
            </div>
        </li>
      `).join('') + `</ol>`;
    },
    submitUserGuess: function(gameId,words) {
        return `
      <div class="outgoing">
        <form action="/submit-user-guesses" method="POST">
          <input type="hidden" name="gameId" value="${gameId}" readonly="readonly"/>
          <input class="to-send" name="text" value="" placeholder="Enter Your Guess"/>
          <button class="submit-button" type="submit">Submit your guess</button>
        </form>
      </div>
    `;
    }
};

module.exports = gameWeb;
